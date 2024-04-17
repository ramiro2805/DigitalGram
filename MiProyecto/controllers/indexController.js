const db = require('../database/models')
const posteo = db.Posteo
const usuario = db.Usuario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs')

const controller = {
    index: function (req, res) {

        posteo.findAll({
            include: [
                {   association: "posteoComentario",
                    include: [{ association: "comentarioUsuario" }]
                },
                { association: "posteoUsuario" }
            ],
            order: [
                ["created_at", "DESC"]
            ]
        })
            .then((datosEncontrados) => {
                //return res.send(datosEncontrados)
                return res.render('index', { posteo: datosEncontrados, usuarioLogueado: false })

            }).catch((error) => {
                return res.send(error)

            })
    },
    resultados: function (req, res) {
        let busqueda = req.query.busqueda;

        let errors = {}

        posteo.findAll({
            where: [{ pie: { [op.like]: "%" + busqueda + "%" } }],
            include: [
                {
                    association: "posteoComentario",
                    include: [{ association: "comentarioUsuario" }]
                },
                { association: "posteoUsuario" }
            ],
            order: [
                ['created_at', "DESC"]
            ]
        })
            .then((datosEncontrados) => {

                // return res.send({data:datosEncontrados.length})

                if (datosEncontrados.length == 0) {
                    errors.message = "No hay resultados para su busqueda"
                    res.locals.errors = errors
                    return res.render("resultadoBusqueda")

                }else{
                    return res.render('resultadoBusqueda', { posteo: datosEncontrados })

                }
            })
            .catch((error) => {
                console.log(error)
                return res.send(error)
            })
    },
    register: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/")
        } else {
            return res.render('registracion')
        }
        
    },
    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    },
    registerPost: function (req, res) {
        let errors = {};

        if (req.session.user != undefined) {
            return res.redirect("/")
        } else {
            if (req.body.email == "") {
                errors.message = "El campo del email no puede estar vacío"
                res.locals.errors = errors
                return res.render("registracion")
            }
            else if (req.body.password.length < 4) {
                errors.message = "La contraseña no puede tener menos de 4 caracteres"
                res.locals.errors = errors
                return res.render("registracion")
            }
            else {
                let user = {
                    nombre : req.body.name,
                    email : req.body.email,
                    pass : bcrypt.hashSync(req.body.password),
                    fecha_nac : req.body.Fecha,
                    dni : req.body.dni,
                    foto : req.body.foto 
                }
    
                usuario.create(user)
                    .then((result) => {
                        return res.redirect('/login')
                    })
                    .catch((error) => {
                        if (error.errors[0].message == "email must be unique") {
                            errors.message = "El email ya está registrado en la base de datos"
                            res.locals.errors = errors
                            return res.render("registracion")
                        }
                        return res.send(error)
                    })
            }
        }
    },
    loginPost: function (req, res) {
        let emailBuscado = req.body.email
        let pass = req.body.password
        let remember = req.body.rememberme
        let errors = {}

        if (emailBuscado == "") {
            errors.message = "El campo email esta vacio";
            res.locals.errors = errors;
            return res.render("login");

        } else if (req.body.password == "") {
            errors.message = "El campo de contraseña esta vacio";
            res.locals.errors = errors;
            return res.render("login");

        } else {
            usuario.findOne({
                where: [{ email: emailBuscado }]
            })
                .then((result) => {
                    let user = result.dataValues;
                    console.log(bcrypt.compareSync(pass, user.pass));

                    if (user != null) {
                        let check = bcrypt.compareSync(pass, user.pass);

                        if (check) {
                            req.session.user = user;
                            if (req.body.rememberme != undefined) {
                                res.cookie('userId', user.id_usuario, { maxAge: 5000 * 60 * 5 })
                                
                            }
                            return res.redirect('/usuarios/profile')
                        }
                        else {
                            errors.message = "La contraseña es incorrecta";
                            res.locals.errors = errors;
                            return res.render("login");
                            }
                    }
                    else {
                        return res.send("no existe usuario con el email:" + emailBuscado)
                    }
                })
                .catch((error) => {
                    return res.send({ data: error })
                })

        }
    },
    logout: function (req, res) {
        req.session.user = undefined
        return res.redirect('/')
    },
    resultadosUsuarios: function (req, res) {
        let busqueda = req.query.busqueda;
        let errors = {}

        usuario.findAll({
            where: [{ nombre: { [op.like]: "%" + busqueda + "%" } }],
            order: [
                ['nombre', "DESC"]
            ]
        })
            .then((datosEncontrados) => {
                // return res.send({data:datosEncontrados.length})

                if (datosEncontrados.length == 0) {
                    errors.message = "No hay resultados para su busqueda"
                    res.locals.errors = errors
                    return res.render("resultadoUsuarios")
                }else{
                    return res.render('resultadoUsuarios', { usuarios: datosEncontrados })

                }
            })
            .catch((error) => {
                console.log(error)
                return res.send(error)
            })
    }
}

module.exports = controller
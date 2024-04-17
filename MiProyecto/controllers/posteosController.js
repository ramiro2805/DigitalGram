const db = require('../database/models')
const post = db.Posteo
const com = db.Comentario
const bcrypt = require('bcryptjs')

const controller = {
    detallePost: function (req, res) {
        let idParams = req.params.id
        post.findByPk(idParams, {
            include: [
                {
                    association: "posteoComentario",
                    include: [{ association: "comentarioUsuario" }]
                },
                { association: "posteoUsuario" }
            ],
            order: [
                ["posteoComentario", "created_at", "DESC"]
            ]
        })
            .then((result) => {
                //return res.send(result)
                return res.render('detallePost', { post: result, usuarioLogueado: true })
            })
            .catch((error) => {
                return res.send(error)
            })
    },
    agregarPost: function (req, res) {
        return res.render('agregarPost', { usuarioLogueado: true })
    },
    procesarPost: function (req, res) {
        if (req.session.user != undefined) {
            post.create({
                foto: req.body.imagen,
                pie: req.body.pie,
                id_usuario: req.session.user.id_usuario
            })
            .then(function (result) {
                // res.send(req.body)
                return res.redirect("/usuarios/profile")
            })
            .catch(function (error) {
                // res.send(req.body)
                return res.send(error)
            });  
        }
        else {
            return res.render("login")
        }
        
    },
    borrar : function(req,res){
        let idPost= req.params.id
        if (req.session.user != undefined) {
            post.destroy({
                where : {id : idPost}
            })
            .then(function(result){
                return res.redirect('/usuarios/profile')
            })
            .catch(function(error){
               return res.send(error)
            })
        } else {
            return res.render(`/posteos/detallePost/id/${req.params.id}`)
        }
    },
    editarPost: function(req,res){
        let idPost= req.params.id
        if (req.session.user != undefined) {
            post.update({
                foto : req.body.img,
                pie: req.body.pie
            },
            { where : {id :idPost}})    
        } else {
            return res.render(`/posteos/detallePost/id/${req.params.id}`)
        }
    },
    agregarCom: function (req,res) {
        if(req.session.user !=undefined){
            
            let comentario = {
                texto : req.body.comment,
                id_post: req.params.id,
                id_usuario: req.session.user.id_usuario
            }
            
            com.create(comentario)
            .then(function(params) {
                return res.redirect( `/posteos/detallePost/id/${req.params.id}`)
            })
            .catch(function(error) {
                return res.send(error)
            })
        }else {
            return res.render("login")
        }
    }
}
module.exports = controller
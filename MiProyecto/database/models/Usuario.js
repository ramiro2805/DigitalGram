module.exports = function (sequelize, dataTypes) {
    
    let alias = "Usuario";

    let cols = {
        id_usuario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING(50)
        },
        email: {
            type: dataTypes.STRING(50)
        },
        pass: {
            type: dataTypes.STRING(200)
        },
        fecha_nac: {
            type: dataTypes.DATE 
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING(200)
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "usuario",
        timestamps: false,
        underscored: true,
    };

    const Usuario = sequelize.define(alias,cols,config);

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Comentario, {
            as: "usuarioComentario",
            foreignKey: "id_usuario"
        });
        Usuario.hasMany(models.Posteo, {
            as: "usuarioPosteo",
            foreignKey: "id_usuario"
        });
    };

    return Usuario;

}
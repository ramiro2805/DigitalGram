module.exports = function (sequelize, dataTypes) {
    
    let alias = "Posteo";

    let cols = {
        id_posteo: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
        },
        pie: {
            type: dataTypes.STRING
        },
        id_usuario: {
            type: dataTypes.INTEGER
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
        tableName: "posteo",
        timestamps: false,
        underscored: true,
    };

    const Posteo = sequelize.define(alias,cols,config);

    Posteo.associate = (models) => {
        Posteo.hasMany(models.Comentario, {
            as: "posteoComentario",
            foreignKey: "id_post"
        });
        Posteo.belongsTo(models.Usuario, {
            as: "posteoUsuario",
            foreignKey: "id_usuario"
        });
    };

    return Posteo;

}
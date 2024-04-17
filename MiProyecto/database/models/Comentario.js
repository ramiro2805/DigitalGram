module.exports = function (sequelize, dataTypes) {
    
    let alias = "Comentario";

    let cols = {
        id_comentario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING(200)
        },
        id_post :{
            type: dataTypes.INTEGER
        },
        id_usuario :{
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
        tableName: "comentarios",
        timestamps: false,
        underscored: true,
    };

    const Comentario = sequelize.define(alias,cols,config);

    Comentario.associate = (models) => {
        Comentario.belongsTo(models.Posteo, {
            as: "comentarioPosteo",
            foreignKey: "id_post"
        });
        Comentario.belongsTo(models.Usuario, {
            as: "comentarioUsuario",
            foreignKey: "id_usuario"
        });
    };

    return Comentario;

}
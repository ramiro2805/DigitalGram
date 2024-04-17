CREATE SCHEMA tpProgra;
USE tpProgra;

CREATE TABLE usuario (
	id_usuario	INT 	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre 		VARCHAR(200) 	NOT NULL,
    email 		VARCHAR(50) 	UNIQUE NOT NULL,
    pass 		VARCHAR(300) 	NOT NULL,
    fecha_nac 	DATE 			NULL,
    dni 		INT 			UNIQUE NOT NULL,
    foto 		VARCHAR(500) 	NULL,
    created_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    updated_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at 	TIMESTAMP 		NULL
);

CREATE TABLE posteo (
	id_posteo	INT 	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    foto        VARCHAR(500) NOT NULL,
    pie 		varchar(500) NULL,
    id_usuario 	INT 	UNSIGNED NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    created_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    updated_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at 	TIMESTAMP 		NULL
);

CREATE TABLE comentarios (
	id_comentario 	INT 	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_post 	INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_post) REFERENCES posteo(id_posteo),
    id_usuario 	INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    texto 		VARCHAR(200) 	NOT NULL,
	created_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    updated_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at 	TIMESTAMP 		NULL  
);

INSERT INTO usuario 
VALUES (DEFAULT,"Ramiro Lohrmann","lohrmannramiro@gmail.com","Ramiro",'2003-05-28',44997949,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFXrBeXSi9ouhOg_9KP2BSd-UKu8jF2F2bg&usqp=CAU",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuario 
VALUES (DEFAULT,"Ornella Cipollone","ornella@gmail.com","Ornella",'2001-08-01',44997950,"https://i.pinimg.com/736x/16/f3/43/16f343bc941ba6e9692ce7202e50b322.jpg",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuario 
VALUES (DEFAULT,"Lara Manfredini","lara@gmail.com","Lara",'2003-09-04',44997951,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV93av248CT8E_17zEHuHMRQEEUQ4c6QS-cg&usqp=CAU",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuario 
VALUES (DEFAULT,"Juan Rodriguez","Juan@gmail.com","Juan",'2003-08-05',44997952,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIvPnoDQs_hlSp5o6gXtVdIcaYYmzS_ICpJA&usqp=CAU",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO usuario 
VALUES (DEFAULT,"Jorge Pinto","Jorge@gmail.com","Jorge",'2003-03-13',44997953,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGS6PXmcCU3G61cIRfcz3ezcF5gL93PeRvw&usqp=CAU",DEFAULT,DEFAULT,DEFAULT);
SELECT*FROM usuario;

INSERT INTO posteo 
VALUES (DEFAULT,"https://images.philips.com/is/image/PhilipsConsumer/TAH4205BK_00-IMS-es_AR?$jpglarge$&wid=960","Miren los nuevos auriculares Philips!",1,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7-zDRMKJ4XQGgT7FKlVYLa6vCbZTln8-iw&usqp=CAU","Lo amo!",2,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"https://blog.formaciongerencial.com/wp-content/uploads/2017/11/bigstock-Internet-Business-Technology-428549714_1024X684-1024x640.png","Nuevas tendencias",3,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg","Codeando a full..",4,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png","Qué opinan de las metodologías ágiles?",1,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"https://compuvip.com.ar/wp-content/uploads/2022/05/Mouse-gamer-RGB-ONIKUMA-CW905-COMPUVIP.png","Lo último en tendencia",2,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"https://www.mysql.com/common/images/products/MySQL_Workbench_Visual_Design_Mac.png","Trabajando...",3,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"https://media.geeksforgeeks.org/wp-content/uploads/20200528002238/database17.png","Qué opinan?",4,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhj1Gd7eXWBUc3MLermbOSNPO42ASMbHwTQ&usqp=CAU","El mejor lugar para aprender!",2,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO posteo 
VALUES (DEFAULT,"https://www.cepal.org/sites/default/files/styles/1280x720/public/images/featured/gobierno_digital.png?itok=wkYrulEg","Conexión",3,DEFAULT,DEFAULT,DEFAULT);
SELECT*FROM posteo;

INSERT INTO comentarios
VALUES (DEFAULT,3,3,"Me encanta!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,2,4,"Tremendo!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,1,5,"Quiero conocer más",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,7,2,"Buenísimo",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,7,5,"Hablamos sobre eso?",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,4,4,"Divino",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,6,1,"Lo mejor!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,3,1,"Me fascina",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,2,2,"Qué bueno!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,1,2,"Genial",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,4,1,"Una locura",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,7,3,"Me encantó",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,6,5,"Dónde puedo saber más?",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,5,5,"Info",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,1,1,"Que buenooo",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,1,3,"Geniaaall",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,1,4,"Amooo",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,2,5,"Que bien!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,2,1,"Muy bueno",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,3,4,"Recomiendo!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,3,2,"Me encanta",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,4,3,"Genial",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,4,5,"Me encantaa",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,5,1,"Dónde puedo saber más?",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,5,4,"Dónde se consigue?",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,5,3,"Que bien!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,6,3,"10/10",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,6,4,"Te escribí al dm!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,7,4,"Recomiendo!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,8,3,"Buenísimo",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,8,5,"Me encantaa",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,8,1,"Recomiendo!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,8,2,"Dónde se consigue?",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,9,2,"Te escribí al dm!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,9,3,"10/10",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,9,4,"Me encantaa",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,9,5,"Recomiendo!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,10,1,"Te escribí al dm!",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,10,2,"Buenísimo",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,10,3,"Dónde se consigue?",DEFAULT,DEFAULT,DEFAULT);
INSERT INTO comentarios
VALUES (DEFAULT,10,4,"Te escribí al dm!",DEFAULT,DEFAULT,DEFAULT);



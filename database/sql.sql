CREATE DATABASE `Prueba` /*!40100 DEFAULT CHARACTER SET utf8 */;

-- Prueba.`user` definition

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `nick` varchar(100) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `rol` varchar(100) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Prueba.album definition

CREATE TABLE `album` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `album_FK` (`id_user`),
  CONSTRAINT `album_FK` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Prueba.foto definition

CREATE TABLE `foto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_album` int(11) NOT NULL,
  `url` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `foto_FK` (`id_album`),
  CONSTRAINT `foto_FK` FOREIGN KEY (`id_album`) REFERENCES `album` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `apply`;
CREATE TABLE `apply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `genler` bit(1) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `position` varchar(50) DEFAULT NULL,
  `major` varchar(50) DEFAULT NULL,
  `workExp` int(2) DEFAULT NULL,
  `diploma` varchar(20) DEFAULT NULL,
  `school` varchar(50) DEFAULT NULL,
  `tell` int(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `experience` text,
  `retain` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `pay`;
CREATE TABLE `pay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `basicSalary` float DEFAULT NULL,
  `mealAllowance` float DEFAULT NULL,
  `housingSubsidy` float DEFAULT NULL,
  `allTsutomuFri` float DEFAULT NULL,
  `taxes` float DEFAULT NULL,
  `ExtraHelp` float DEFAULT NULL,
  `punish` float DEFAULT NULL,
  `IssuedTime` float DEFAULT NULL,
  `total` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `rewards`;
CREATE TABLE `rewards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `award` float DEFAULT NULL,
  `Punish` float DEFAULT NULL,
  `reason` varchar(50) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `train`;
CREATE TABLE `train` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `purpose` varchar(100) DEFAULT NULL,
  `startTime` date DEFAULT NULL,
  `endTime` date DEFAULT NULL,
  `lecturer` varchar(30) DEFAULT NULL,
  `trainee` varchar(1000) DEFAULT NULL,
  `courseware` text,
  `result` varchar(100) DEFAULT NULL,
  `summary` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(32) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `genler` bit(1) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `role` int(1) DEFAULT NULL,
  `intro` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user` (`id`, `account`, `password`, `genler`, `birthday`, `role`, `intro`) VALUES
(15,	'admin',	'21232F297A57A5A743894A0E4A801FC3',	CONV('1', 2, 10) + 0,	'2018-01-01',	2,	'超级管理员');

-- 2018-03-12 16:29:23

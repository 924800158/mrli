# Host: localhost  (Version: 5.5.53)
# Date: 2018-01-29 15:39:54
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

INSERT INTO `goodsinfo` VALUES ('217197501E','男装春季大容量组合手提包旅行包','快速查看',456,121,'时尚外套','../img/217197501E03_p7.jpg','wdasqdwa','wqdsawqdas','wqdaswdas','asdwxwq','wqdasdwd','aswqxsawq','asdwqdas','wqdsadxwqx','asdwdasdqw','asdwdasdw','asdwdasdw','asdwqdasdwqdsa','dwqdasdwqdq'),('217321518E','秋男防风连帽可调节休闲风衣外套','快速查看',767,2121,'时尚外套','../img/217321518E39_p7.jpg','wdasqdwa','wqdsawqdas','wqdaswdas','asdwxwq','wqdasdwd','aswqxsawq','asdwqdas','wqdsadxwqx','asdwdasdqw','asdwdasdw','asdwdasdw','asdwqdasdwqdsa','dwqdasdwqdq'),('217332536J','男装秋季莱卡弹力纯色牛仔裤长裤','快速查看',678,123,'时尚外套','../img/217332566E39_p7.jpg','wdasqdwa','wqdsawqdas','wqdaswdas','asdwxwq','wqdasdwd','aswqxsawq','asdwqdas','wqdsadxwqx','asdwdasdqw','asdwdasdw','asdwdasdw','asdwqdasdwqdsa','dwqdasdwqdq'),('217332566E','男装秋季莱卡弹力纯色牛仔裤长裤','快速查看',678,123,'时尚外套','../img/217332566E39_p7.jpg','wdasqdwa','wqdsawqdas','wqdaswdas','asdwxwq','wqdasdwd','aswqxsawq','asdwqdas','wqdsadxwqx','asdwdasdqw','asdwdasdw','asdwdasdw','asdwqdasdwqdsa','dwqdasdwqdq'),('217412514F','杰克琼斯休闲连帽立领男装秋短款羽绒服','快速查看',768,1212,'时尚外套','../img/217412514F15_p7.jpg','wdasqdwa','wqdsawqdas','wqdaswdas','asdwxwq','wqdasdwd','aswqxsawq','asdwqdas','wqdsadxwqx','asdwdasdqw','asdwdasdw','asdwdasdw','asdwqdasdwqdsa','dwqdasdwqdq'),('217412523E','休闲罗纹棒球领男装秋冬短款羽绒服','快速查看',999,1211,'时尚外套','../img/217412523E06_p7.jpg','wdasqdwa','wqdsawqdas','wqdaswdas','asdwxwq','wqdasdwd','aswqxsawq','asdwqdas','wqdsadxwqx','asdwdasdqw','asdwdasdw','asdwdasdw','asdwqdasdwqdsa','dwqdasdwqdq'),('217412528E','灰鸭绒连帽立领男装夹克羽绒服外套秋冬','快速查看',453,122,'时尚外套','../img/217412528E40_p7.jpg','wdasqdwa','wqdsawqdas','wqdaswdas','asdwxwq','wqdasdwd','aswqxsawq','asdwqdas','wqdsadxwqx','asdwdasdqw','asdwdasdw','asdwdasdw','asdwqdasdwqdsa','dwqdasdwqdq'),('217432504E','JackJones杰克琼斯秋男舒适高弹原色修身牛仔裤长裤JO','快速查看',780,121,'时尚外套','../img/217432504E37_p7.jpg','wdasqdwa','wqdsawqdas','wqdaswdas','asdwxwq','wqdasdwd','aswqxsawq','asdwqdas','wqdsadxwqx','asdwdasdqw','asdwdasdw','asdwdasdw','asdwqdasdwqdsa','dwqdasdwqdq');

#
# Structure for table "shoppingcar"
#

CREATE TABLE `shoppingcar` (
  `username` varchar(20) NOT NULL,
  `goodsid` char(16) NOT NULL,
  `goodscount` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcar"
#


#
# Structure for table "vip"
#

CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  `usersex` char(2) DEFAULT NULL,
  `userage` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

INSERT INTO `vip` VALUES ('','',NULL,NULL),('18712312344','123456',NULL,NULL),('18712312345','123qwe',NULL,NULL),('18712312347','12345678',NULL,NULL),('提莫','789789','男',NULL),('李四','456456','男',NULL);

-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: lucianturlea
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `challenge`
--

DROP TABLE IF EXISTS `challenge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `challenge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `solution` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_D7098951166D1F9C` (`project_id`),
  CONSTRAINT `FK_D7098951166D1F9C` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge`
--

LOCK TABLES `challenge` WRITE;
/*!40000 ALTER TABLE `challenge` DISABLE KEYS */;
INSERT INTO `challenge` VALUES (7,2,'List dymanic changes of the products and services.','In the administration area using credentials, owner can modify the availability and the price of the products in the databasse.',NULL),(8,2,'Request a specific product or service by the customer.','Each product has a request button that automatic fill a new form. Customer can change the message text and can submit the form.',NULL),(9,2,'Owner get notified each product or service request.','After the request form it\'s submited by the customer, the server send an e-mail message to the owner of the website. The e-mail adress can be change in the administration area.',NULL),(10,3,'Display a lot of text with complete informations about the association, like history of the company, the results, the law reglementations.','Let only a small number of text rows each section. Hide the extra information and place a specific button that reveals it.',NULL),(11,3,'List the projects with additional data about it. Some of the information have technical data or are in different formats.','Each project can have attachments. Can attach different type of files like : PDF, ods, xlsx, png, etc.',NULL),(12,3,'Some of the project should not be public, or expired, but the data needs to not be removed.','In the administration area, the status of each project can be changed. So the private project won\'t be displayed in the public areas of the website.',NULL),(13,3,'Show announces about the assiciation, but some of them are too important to sink to the bottom of the list.','In the administration area, each announce can have a status of \"normal\" or \"important\". The important announces are pinned to the top of the list.',NULL),(14,3,'Show different external informations that can be usefull for the website visitors.','The news page display the different multimedia materials. In the administration area, Youtube embeded links, linked photos, or standard http links, can be added as \"news\".',NULL),(15,3,'Show photos of the association events with a short description.','Create an album in the administration area. Here can be added a short description, a timestamp and imported local photos. The albums can have a profile picture, or can have the visibility changed.',NULL),(16,3,'Insert a map of the association location.','Use leaflet JS library and add the location of the association center.',NULL),(17,1,'Find an alternative to create the project\'s database.','Create a Pattern class service that contains a array with data as constant.',NULL),(18,1,'Create input and output for each pattern.','Create a route for each pattern. Use the Symfony\'s forms as a way to imput data. If the form is valid, the result of the pattern will be output on the same page.',NULL),(19,1,'Create a fast layout with negative space and porpotional sections for each pattern page.','Use Webpack for tailwind css and Sass compiler. Symfony\'s encore bundle has Webpack.',NULL),(20,1,'Test each pattern page for rendering the page, and for submited valid data.','Use Symfony\'s PHPUnit test bundle. For each controller create a new class test and extend the WebTestCase class.',NULL),(21,4,'Add different data to the projects like photos, challenges or technologies from a predefined list','Manage linked data between database tables with doctrine bundle, create relationships like ManyToOne or ManyToMany.',NULL),(22,4,'Remove linked data from a project, like an attached photo or technology without access the specified entity.','Create an API routes to manage the promise requests and modify the database.',NULL),(23,4,'Store and keep a good evidence of the submited jobs data or the recived contact messages.','Use the administration area to insert data from the submited jobs and update their latest status.',NULL),(24,4,'Add a new project to the portofolio and change its position in the list.','Use a higher value of the level field to place the important projects on the top of the list.',NULL),(25,4,'Make an enjoyable transition between the sections.','Add background images with fade effect. Edit them to keep a good contrast between the text and the website\'s background color.',NULL),(26,4,'Add a live version of the projects.','Get a VPS and manage the webserver. Buy a valid web address and configure a DNS to setup the subdomains (ex: www.design-patterns.lucianturlea.ro ).',NULL),(27,4,'Close temporally the website.','Create a BasicController class that extend the AbstractController and insert a service that checks the database status. The entity that behaves as a configuration settings can be modified only from the server login.',NULL);
/*!40000 ALTER TABLE `challenge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `info` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_4C62E6389395C3F3` (`customer_id`),
  CONSTRAINT `FK_4C62E6389395C3F3` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `platform` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `info` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `issues` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctrine_migration_versions`
--

LOCK TABLES `doctrine_migration_versions` WRITE;
/*!40000 ALTER TABLE `doctrine_migration_versions` DISABLE KEYS */;
INSERT INTO `doctrine_migration_versions` VALUES ('DoctrineMigrations\\Version20220430140556','2022-04-30 17:06:44',422),('DoctrineMigrations\\Version20220430141132','2022-04-30 17:11:57',102),('DoctrineMigrations\\Version20220430150502','2022-04-30 18:05:18',562),('DoctrineMigrations\\Version20220430150806','2022-04-30 18:08:10',73),('DoctrineMigrations\\Version20220430191541','2022-04-30 22:15:56',80),('DoctrineMigrations\\Version20220503123630','2022-05-03 15:36:51',166),('DoctrineMigrations\\Version20220503133710','2022-05-03 16:37:16',79),('DoctrineMigrations\\Version20220503134220','2022-05-03 16:42:24',64),('DoctrineMigrations\\Version20220511152620','2022-05-11 18:26:32',98),('DoctrineMigrations\\Version20220511154139','2022-05-11 18:41:47',476),('DoctrineMigrations\\Version20220604121419','2022-06-04 15:14:23',141),('DoctrineMigrations\\Version20220717214558','2022-07-18 00:46:16',90),('DoctrineMigrations\\Version20220717222045','2022-07-18 01:20:50',113),('DoctrineMigrations\\Version20220717222707','2022-07-18 01:27:11',313),('DoctrineMigrations\\Version20220717223201','2022-07-18 01:32:03',42);
/*!40000 ALTER TABLE `doctrine_migration_versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `globalsettings`
--

DROP TABLE IF EXISTS `globalsettings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `globalsettings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `enable_website` tinyint(1) NOT NULL,
  `enable_email_service` tinyint(1) NOT NULL,
  `enable_login` tinyint(1) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `globalsettings`
--

LOCK TABLES `globalsettings` WRITE;
/*!40000 ALTER TABLE `globalsettings` DISABLE KEYS */;
INSERT INTO `globalsettings` VALUES (1,1,1,1,'lucianturlea27@gmail.com',1);
/*!40000 ALTER TABLE `globalsettings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` datetime NOT NULL,
  `document` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile` tinyint(1) DEFAULT NULL,
  `details` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_14B78418166D1F9C` (`project_id`),
  CONSTRAINT `FK_14B78418166D1F9C` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (1,1,'design-ph.svg','2022-05-03 14:25:21','900a773eff408be3bccb7946abac2723.svg',1,'Design patterns logo',NULL),(7,1,'design2.png','2022-05-03 15:38:02','33e63527c3617747c76aaf72f4dfd9a0.png',NULL,'Here we have the Visitor Controller class, with the added \"App\\Entity\\Visitor\\\" classes. Those services containes all the logic of the pattern, the controller just handle the input data.',NULL),(8,1,'design1.png','2022-05-03 15:38:12','04a23ac663c75ff0246d583883f08e69.png',NULL,'This photo has the tests of the Design pattern project. Each route is tested for rendering the page, the form and validation of the input data. All the test are passed.',NULL),(11,4,'lucianturlea-ph.svg','2022-06-04 16:16:52','1637101b10d637e4da3dde01ece8e8eb.svg',1,'profile',NULL),(12,3,'capriday-ph.svg','2022-06-04 16:18:01','47237bcda0443d3588e76d5766c687ac.svg',1,'profile',NULL),(13,2,'fisticromania-ph.svg','2022-06-04 16:19:22','c7b23dec2972919405d628d6449d6c95.svg',1,'profile',NULL),(14,1,'design3 (1).png','2022-07-12 21:54:19','32fc5b8f0e3f8bd59c1bb7008cc56a82.png',NULL,'(2) This it\'s a continuation of the Visitor pattern page. Here we can see the bottom of the page with the results of our inputs. The table shows different discounts of the products, by categories, with the total amount at the end.',2),(15,1,'design2 (1).png','2022-07-12 21:55:22','e6cf950ea2d837f3a24113694d37804c.png',NULL,'(1) Here it\'s the Visitor\'s pattern page, a Shopping cart exemple. In the left we have a short description and the implementation of the pattern. In right we can input values.',3),(16,1,'design1 (1).png','2022-07-12 21:56:04','cd9fee7655e1c138ff78499d81bcac40.png',NULL,'This it\'s the Design patterns HOMEPAGE, with the github link in the top right coner, the project overview, the used technology and the pattern list below. Each pattern has a link with the implementation.',5),(17,3,'capri1.png','2022-07-12 23:03:37','3e6fa05968afb62ccd4d14f0c7317396.png',NULL,'Here it\'s Capriday\'s homepage. It contains a stick navbar, with the navigation links and social media, a carousel area and the main sections.',10),(18,3,'capri2.png','2022-07-12 23:03:55','e558d0e794517c159ae342d7a526ca54.png',NULL,'The project page has a table with the available (visible) projects. After table we have the card view of the projects, with the attached files.',9),(19,3,'capri3.png','2022-07-12 23:04:15','3546092c70e924613dc2fe4549c8362b.png',NULL,'Each project can be edited in the admin area, after the login.',8),(20,3,'capri4.png','2022-07-12 23:04:28','c244a4d542a87919f5432200a4da369f.png',NULL,'The news page contains informations from different channel, like Youtube embeded videos, linked images or an external webadress.',7),(21,3,'capri5.png','2022-07-12 23:04:43','2cf6c4ed585a95792021c28efb2b3524.png',NULL,'The news can be also edited from the admin area. The table shows the created date and the user that generated it.',6),(22,3,'capri6.png','2022-07-12 23:05:07','aae7afd144727cd435014b10c0914e3d.png',NULL,'The gallery page shows the visible albums, their description and the number of photos.',5),(23,3,'capri7.png','2022-07-12 23:05:21','6f7624e08bb75ac8e3c7b3753bdb67e5.png',NULL,'Here we can edit the albums. The profile picture can be change or can be added new photos.',4),(24,3,'capri8.png','2022-07-12 23:05:54','c6f726154a9016b86c6f01a006401485.png',NULL,'The contact page contains a map generated by Leaflet, short informations about the company and a form to send a message.',3),(26,2,'fisitc1.png','2022-07-12 23:06:28','ae060ff78901e2a39e7f6391e5a61a30.png',NULL,'This it\'s Fisticromania\'s landing page. This project it\'s in production, and the admin area it\'s private. The landing page contains a navigation menu, the logo and buttons with the products and services. Also, it has a full background image.',10),(27,2,'fistic2.png','2022-07-12 23:06:40','ed8723f141bc410757c793eaa98a0897.png',NULL,'(1) Here we have the product list displayed as cards. It contains an image, short description, the price and the request button.',9),(28,2,'fistic3.png','2022-07-12 23:06:57','90babb98194eddecfcc339683c5ca211.png',NULL,'(2) Here it\'s the product request, after clicking the card button. After filling the input fields, the server sends an email to a default adress.',8),(29,2,'fistic4.png','2022-07-12 23:13:25','6946da7fe3f310a9f0b0aef23067b47b.png',NULL,'The website it\'s fully responsive. Here we have the Galaxy S5 display of the homepage.',7),(30,4,'lt1.png','2022-07-20 03:29:38','3cf41026987981df146334abdc1bea55.png',NULL,'Website home page with the navigation bar, short animation and a project button. It is fully responsive, on the mobile version it hides the main picture.',10),(31,4,'lt2.png','2022-07-20 03:33:11','a28ec22839a3d6866b5329132586294f.png',NULL,'Homepage\'s project list as cards, with the black logo, watermarks, used technologies, and buttons (one external for the live version and one internal with the project\'s details section).',9),(32,4,'lt3.png','2022-07-20 03:37:18','2743dac69ea0f6911cb21a383f3b80fa.png',NULL,'The detailed project section contains buttons for the live version, github repository link, and administration area (if it public). Also, project has a short description, used technologies, list of challanges and solutions, and screenshots of the website.',8),(33,4,'lt4.png','2022-07-20 03:39:11','cfbb1c2724574a8c0ba8130e2df9efb3.png',NULL,'This it\'s the login page required for the administration area. The \"/admin\" routes are restricted for users only.',7),(34,4,'lt5.png','2022-07-20 03:43:33','5da7b99c5830388991c2da1cbe4ecd98.png',NULL,'Here it\'s the administration area with a navbar for the most important links and informations about the contact messages or submited jobs. Projects can be added or modified very easy.',6),(35,4,'lt6.png','2022-07-20 03:46:34','65017df83895c7df25ed1c6b335655a7.png',NULL,'New customer page it\'s basic a submited job input, with information about the company, conversations, status, and more.',5),(36,4,'lt7.png','2022-07-20 03:48:26','4c099b9eca211c0c1e78636b3cf2419a.png',NULL,'Here it\'s a list of the project\'s technologies. New technology can be added, a ManyToMany relationship.',4),(37,4,'lt8.png','2022-07-20 03:52:58','76df8879954cc02850b8f347efebd52e.png',NULL,'Project\'s page, with the select options of technologies. Below are remove buttons for the API routes. Fast and simple way to handle joined tables of the database.',3),(38,4,'lt9.png','2022-07-20 03:55:11','b667621a1f2f41c61e754b254b350620.png',NULL,'Phpmyadmin interface with the website\'s database. Here we have the ManyToMany relationship table, with the assign of the project table key and the technology table key.',2);
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `public` tinyint(1) NOT NULL,
  `production` tinyint(1) NOT NULL,
  `github` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `login` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'Design patterns','https://www.design-patterns.lucianturlea.ro/','23 OOP Design Patterns',1,1,0,'https://github.com/gxl27/design-patterns',2,NULL,'Design patterns project contains exemples and common usage of different patterns in software developement. With simple solutions for some complex problems, like shopping carts, broadcasting messages, caching objects, its services can be easy modified and integrated in any application. Application has no database included, or needed. The project uses Pattern class service as a database. Each pattern has his own route and it\'s own service classes. For the input values it uses symfony\'s forms and for output value it uses form validation then it renders on the same page the pattern\'s service result.\r\nFollow the github instruction to deploy on your local machine.'),(2,'Fistic Romania','https://fisticromania.ro','Personal bussiness application',1,0,1,'https://github.com/gxl27/fisticromania',1,NULL,'Fistic Romania it\'s a personal bussiness application for a pistachio project company. It is in production so the administration area it is restricted. It has a database with the products and the services of the company, contact and request forms, e-mail sending services, and high security layers. The server has the sendmail service, imported photos, database backup scripts, access logs and so on.'),(3,'Capriday','https://capriday.lucianturlea.ro/','Bussiness presentation application',1,1,0,'https://github.com/gxl27/caprirom',3,'https://capriday.lucianturlea.ro/admin','Capriday it\'s a demonstrative project of the portofolio. It sums good web design practices (UI and UX design) like text hierarchy, negative space, layers contrast, small animation effects, structured information. Also, it has an administration area where the database info can be changed.'),(4,'Lucianturlea','https://lucianturlea.ro','Portofolio with job tracker',1,1,1,'https://github.com/gxl27/lucianturlea',4,'https://lucianturlea.ro/admin','This application it\'s a portofolio type website, with an administration area where projects can be added or removed. Also it has a resume request tracker with the possibility to keep the informations about the submited jobs, the contact messages from the companies. The project has a good exemple of a modern design with harmonious images inserations and a responsive layout. The application holds external links to the projects github adresses. It\'s free for download and use!');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_technology`
--

DROP TABLE IF EXISTS `project_technology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_technology` (
  `project_id` int(11) NOT NULL,
  `technology_id` int(11) NOT NULL,
  PRIMARY KEY (`project_id`,`technology_id`),
  KEY `IDX_ECC5297F166D1F9C` (`project_id`),
  KEY `IDX_ECC5297F4235D463` (`technology_id`),
  CONSTRAINT `FK_ECC5297F166D1F9C` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_ECC5297F4235D463` FOREIGN KEY (`technology_id`) REFERENCES `technology` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_technology`
--

LOCK TABLES `project_technology` WRITE;
/*!40000 ALTER TABLE `project_technology` DISABLE KEYS */;
INSERT INTO `project_technology` VALUES (1,2),(1,4),(1,5),(2,1),(2,2),(2,6),(3,1),(3,2),(3,4),(3,6),(4,1),(4,2),(4,6);
/*!40000 ALTER TABLE `project_technology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technology`
--

DROP TABLE IF EXISTS `technology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `technology` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `version` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` int(11) DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `document` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technology`
--

LOCK TABLES `technology` WRITE;
/*!40000 ALTER TABLE `technology` DISABLE KEYS */;
INSERT INTO `technology` VALUES (1,'Symfony','5.2',1,'0000-00-00 00:00:00','b1e51e4b2bec94e6a9b16c6d23bdf6c6.svg'),(2,'Sass','1.53',NULL,'0000-00-00 00:00:00','21f3b8e37d57cbbae3e313509e710022.svg'),(4,'Tailwind','3.1',NULL,'2022-06-04 15:42:22','e3d5236f13da6066b4693a63ce866b81.svg'),(5,'Symfony','5.3',1,'2022-06-04 15:55:57','8f129920b38e96c8e0559b844b89ecf1.svg'),(6,'Mysql','10.4',NULL,'2022-07-07 14:11:05','5102b00a54da5fb2928cf6342c909f25.svg');
/*!40000 ALTER TABLE `technology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649F85E0677` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','[\"ROLE_SUPERADMIN\"]\r\n','$2y$13$qCnVyBN6wkP/hM.o4Y6TbOO37II7cmhtswOBQay1p.Z1XPzHPYBfe');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-20  3:57:28

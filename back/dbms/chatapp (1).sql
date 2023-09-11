-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2023 at 06:36 AM
-- Server version: 8.0.34
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `user_name` text NOT NULL,
  `time` datetime NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`user_name`, `time`, `message`) VALUES
('Kapil12', '2023-03-01 00:00:00', 'safafaf'),
('Kapil12', '2023-03-01 00:00:00', 'safafaf'),
('Kapil12', '2023-03-01 00:00:00', 'safafaf'),
('Satya1', '2023-03-01 00:00:00', 'Hello Kapil'),
('Satya1', '2023-03-01 00:00:00', 'ssdd'),
('Satya1', '2023-03-01 00:00:00', 'ddd'),
('Satya1', '2023-03-01 00:00:00', 'time'),
('Satya1', '2023-09-09 11:47:08', 'hi'),
('Satya1', '2023-09-09 11:52:28', 'hello'),
('Satya1', '2023-09-09 11:56:38', 'abc'),
('Satya1', '2023-09-09 12:00:21', 'heelo'),
('Satya1', '2023-09-09 12:01:55', 'hello'),
('Satya1', '2023-09-09 12:26:07', 'abccc'),
('NamdemK786', '2023-09-09 15:32:25', 'heelo'),
('NamdemK786', '2023-09-09 15:33:23', 'hello satya'),
('Satya1', '2023-09-09 15:33:38', 'bolo nadeem'),
('NamdemK786', '2023-09-09 15:51:55', ' Connection-specific DNS Suffix  . :    IPv6 Address. . . . . . . . . . . : 2402:8100:2768:1d34:5d27:cd47:f5e0:f5c    Temporary IPv6 Address. . . . . . : 2402:8100:2768:1d34:28fe:acec:3e6b:8067    Link-local IPv6 Address . . . . . : fe80::c65c:ecc7:25af:8ad1%12    IPv4 Address. . . . . . . . . . . : 192.168.43.76    Subnet Mask . . . . . . . . . . . : 255.255.255.0    Default Gateway . . . . . . . . . : fe80::a25:25ff:fe48:a6d4%12                                        192.168.43.1'),
('NamdemK786', '2023-09-10 14:37:00', 'heelo'),
('NamdemK786', '2023-09-10 14:57:46', 'saasf'),
('Satya1', '2023-09-11 08:33:53', 'hiii'),
('NamdemK786', '2023-09-11 08:34:06', 'hello'),
('Satya1', '2023-09-11 08:37:34', 'hii'),
('Satya1', '2023-09-11 08:40:03', 'hrr'),
('Satya1', '2023-09-11 08:43:48', 'ddd'),
('Satya1', '2023-09-11 08:53:40', 'heelo'),
('Satya1', '2023-09-11 08:55:34', 'heelo'),
('NamdemK786', '2023-09-11 09:41:44', 'hi'),
('NamdemK786', '2023-09-11 09:41:54', 'abc'),
('NamdemK786', '2023-09-11 09:42:59', 'may name is khan');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` bigint NOT NULL,
  `mail` varchar(50) NOT NULL,
  `name` text NOT NULL,
  `password` text NOT NULL,
  `user` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `mail`, `name`, `password`, `user`) VALUES
(1, 'Nadeemgmail.com', 'Nadeem', 'Nadeem', 'NamdemK786'),
(2, 'Nadeem@gmail.com', 'Nadeem', 'Nadeem', 'NamdemK786'),
(3, 'rdx619619@gmail.com', 'Kapil VIshwakarma', 'Kapil619', 'Kapil12'),
(4, 'Satyaprakash12@gmail.com', 'Satya Prakash', 'Satya', 'Satya1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

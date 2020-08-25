-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema structure
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema structure
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `structure` DEFAULT CHARACTER SET utf8mb4 ;CREATE SCHEMA IF NOT EXISTS `movies_db` DEFAULT CHARACTER SET utf8 ;
USE `structure` ;

-- -----------------------------------------------------
-- Table `structure`.`brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `structure`.`brands` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `structure`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `structure`.`users` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'DEFAULT' NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `mail` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `structure`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `structure`.`carts` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_users` BIGINT(20) UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `users_id_idx` (`id_users` ASC),
  CONSTRAINT `users_id`
    FOREIGN KEY (`id_users`)
    REFERENCES `structure`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `structure`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `structure`.`products` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` BIGINT(20) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `id_brands` BIGINT(20) UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_brands_idx` (`id_brands` ASC),
  CONSTRAINT `id_brands`
    FOREIGN KEY (`id_brands`)
    REFERENCES `structure`.`brands` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `structure`.`carts_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `structure`.`carts_products` (
  `id_products` BIGINT(20) UNSIGNED NOT NULL,
  `id_carts` BIGINT(20) UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  INDEX `id_products_idx` (`id_products` ASC),
  INDEX `id_carts_idx` (`id_carts` ASC),
  CONSTRAINT `id_carts`
    FOREIGN KEY (`id_carts`)
    REFERENCES `structure`.`carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_products`
    FOREIGN KEY (`id_products`)
    REFERENCES `structure`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `structure`.`cellphones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `structure`.`cellphones` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `screen_size` VARCHAR(45) NULL DEFAULT NULL,
  `screen_resolution` VARCHAR(45) NULL DEFAULT NULL,
  `os` VARCHAR(45) NULL DEFAULT NULL,
  `processor` VARCHAR(45) NULL DEFAULT NULL,
  `dimensions` VARCHAR(45) NULL DEFAULT NULL,
  `storage` VARCHAR(45) NULL DEFAULT NULL,
  `batery` VARCHAR(45) NULL DEFAULT NULL,
  `water_resistance` VARCHAR(45) NULL DEFAULT NULL,
  `id_products` BIGINT(20) UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_products_idx` (`id_products` ASC),
  CONSTRAINT `id_products_cellphone`
    FOREIGN KEY (`id_products`)
    REFERENCES `structure`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

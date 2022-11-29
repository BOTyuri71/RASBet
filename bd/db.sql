-- MySQL Script generated by MySQL Workbench
-- Thu Nov 24 00:43:56 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sql7580232
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sql7580232
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sql7580232` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema sql7580232
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sql7580232
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sql7580232` DEFAULT CHARACTER SET latin1 ;
USE `sql7580232` ;

-- -----------------------------------------------------
-- Table `sql7580232`.`Odds`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Odds` (
  `idOdds` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(128) NULL,
  `odd` FLOAT NULL,
  `estado` INT NULL DEFAULT 0,
  PRIMARY KEY (`idOdds`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sql7580232`.`Moeda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Moeda` (
  `idMoeda` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `saldo` VARCHAR(45) NULL,
  PRIMARY KEY (`idMoeda`))
ENGINE = InnoDB;

USE `sql7580232` ;

-- -----------------------------------------------------
-- Table `sql7580232`.`Apostador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Apostador` (
  `idApostador` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(45) NULL DEFAULT NULL,
  `dataN` DATE NULL DEFAULT NULL,
  `nCC` VARCHAR(45) NULL DEFAULT NULL,
  `nif` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idApostador`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql7580232`.`Aposta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Aposta` (
  `idAposta` INT NOT NULL AUTO_INCREMENT,
  `dataCriacao` DATETIME NULL DEFAULT NULL,
  `valor` FLOAT NULL DEFAULT NULL,
  `estado` INT NULL DEFAULT NULL,
  `odd` FLOAT NULL DEFAULT NULL,
  `Apostador_idApostador` INT NOT NULL,
  `Moeda_idMoeda` INT NOT NULL,
  PRIMARY KEY (`idAposta`),
  INDEX `fk_Aposta_Apostador_idx` (`Apostador_idApostador` ASC),
  INDEX `fk_Aposta_Moeda1_idx` (`Moeda_idMoeda` ASC),
  CONSTRAINT `fk_Aposta_Apostador`
    FOREIGN KEY (`Apostador_idApostador`)
    REFERENCES `sql7580232`.`Apostador` (`idApostador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aposta_Moeda1`
    FOREIGN KEY (`Moeda_idMoeda`)
    REFERENCES `sql7580232`.`Moeda` (`idMoeda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql7580232`.`Jogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Jogo` (
  `idJogo` INT NOT NULL AUTO_INCREMENT,
  `data_inicio` DATETIME NULL DEFAULT NULL,
  `estado` INT NULL DEFAULT NULL,
  `resultado` VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (`idJogo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql7580232`.`Aposta_has_Jogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Aposta_has_Jogo` (
  `Aposta_idAposta` INT NOT NULL,
  `Jogo_idJogo` INT NOT NULL,
  `Odds_idOdds` INT NOT NULL,
  PRIMARY KEY (`Aposta_idAposta`, `Jogo_idJogo`,`Odds_idOdds`),
  INDEX `fk_Aposta_has_Jogo_Jogo1_idx` (`Jogo_idJogo` ASC),
  INDEX `fk_Aposta_has_Jogo_Aposta1_idx` (`Aposta_idAposta` ASC),
  INDEX `fk_Aposta_has_Jogo_Odds1_idx` (`Odds_idOdds` ASC),
  CONSTRAINT `fk_Aposta_has_Jogo_Aposta1`
    FOREIGN KEY (`Aposta_idAposta`)
    REFERENCES `sql7580232`.`Aposta` (`idAposta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aposta_has_Jogo_Jogo1`
    FOREIGN KEY (`Jogo_idJogo`)
    REFERENCES `sql7580232`.`Jogo` (`idJogo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aposta_has_Jogo_Odds1`
    FOREIGN KEY (`Odds_idOdds`)
    REFERENCES `sql7580232`.`Odds` (`idOdds`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql7580232`.`Equipa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Equipa` (
  `nome` VARCHAR(128) NOT NULL,
  `desporto` VARCHAR(64) NULL DEFAULT NULL,
  `pais` VARCHAR(64) NULL DEFAULT NULL,
  `liga` VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (`nome`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql7580232`.`Movimento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Movimento` (
  `idMovimento` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(64) NULL DEFAULT NULL,
  `valor` FLOAT NULL DEFAULT NULL,
  `saldo` FLOAT NULL DEFAULT NULL,
  `data` DATETIME NULL DEFAULT NULL,
  `Apostador_idApostador` INT NOT NULL,
  `Moeda_idMoeda` INT NOT NULL,
  PRIMARY KEY (`idMovimento`),
  INDEX `fk_Movimento_Apostador1_idx` (`Apostador_idApostador` ASC),
  INDEX `fk_Movimento_Moeda1_idx` (`Moeda_idMoeda` ASC),
  CONSTRAINT `fk_Movimento_Apostador1`
    FOREIGN KEY (`Apostador_idApostador`)
    REFERENCES `sql7580232`.`Apostador` (`idApostador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Movimento_Moeda1`
    FOREIGN KEY (`Moeda_idMoeda`)
    REFERENCES `sql7580232`.`Moeda` (`idMoeda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql7580232`.`Jogo_has_Equipa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Jogo_has_Equipa` (
  `Jogo_idJogo` INT NOT NULL,
  `Equipa_nome` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`Jogo_idJogo`, `Equipa_nome`),
  INDEX `fk_Jogo_has_Equipa_Equipa1_idx` (`Equipa_nome` ASC),
  INDEX `fk_Jogo_has_Equipa_Jogo1_idx` (`Jogo_idJogo` ASC),
  CONSTRAINT `fk_Jogo_has_Equipa_Jogo1`
    FOREIGN KEY (`Jogo_idJogo`)
    REFERENCES `sql7580232`.`Jogo` (`idJogo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Jogo_has_Equipa_Equipa1`
    FOREIGN KEY (`Equipa_nome`)
    REFERENCES `sql7580232`.`Equipa` (`nome`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `sql7580232`.`Apostador_has_Moeda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Apostador_has_Moeda` (
  `Apostador_idApostador` INT NOT NULL,
  `Moeda_idMoeda` INT NOT NULL,
  PRIMARY KEY (`Apostador_idApostador`, `Moeda_idMoeda`),
  INDEX `fk_Apostador_has_Moeda_Moeda1_idx` (`Moeda_idMoeda` ASC),
  INDEX `fk_Apostador_has_Moeda_Apostador1_idx` (`Apostador_idApostador` ASC),
  CONSTRAINT `fk_Apostador_has_Moeda_Apostador1`
    FOREIGN KEY (`Apostador_idApostador`)
    REFERENCES `sql7580232`.`Apostador` (`idApostador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Apostador_has_Moeda_Moeda1`
    FOREIGN KEY (`Moeda_idMoeda`)
    REFERENCES `sql7580232`.`Moeda` (`idMoeda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `sql7580232`.`Jogo_has_Odds`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sql7580232`.`Jogo_has_Odds` (
  `Jogo_idJogo` INT NOT NULL,
  `Odds_idOdds` INT NOT NULL,
  PRIMARY KEY (`Jogo_idJogo`, `Odds_idOdds`),
  INDEX `fk_Jogo_has_Odds_Odds1_idx` (`Odds_idOdds` ASC),
  INDEX `fk_Jogo_has_Odds_Jogo1_idx` (`Jogo_idJogo` ASC),
  CONSTRAINT `fk_Jogo_has_Odds_Jogo1`
    FOREIGN KEY (`Jogo_idJogo`)
    REFERENCES `sql7580232`.`Jogo` (`idJogo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Jogo_has_Odds_Odds1`
    FOREIGN KEY (`Odds_idOdds`)
    REFERENCES `sql7580232`.`Odds` (`idOdds`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

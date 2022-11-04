-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Apostador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Apostador` (
  `idApostador` INT NOT NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `dataN` DATETIME NULL,
  `nCC` VARCHAR(45) NULL,
  `nif` VARCHAR(45) NULL,
  `saldo` FLOAT NULL,
  PRIMARY KEY (`idApostador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Aposta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Aposta` (
  `idAposta` INT NOT NULL,
  `dataCriacao` VARCHAR(45) NULL,
  `valor` FLOAT NULL,
  `Apostador_idApostador` INT NOT NULL,
  `resultado` INT NULL,
  PRIMARY KEY (`idAposta`),
  INDEX `fk_Aposta_Apostador_idx` (`Apostador_idApostador` ASC) VISIBLE,
  CONSTRAINT `fk_Aposta_Apostador`
    FOREIGN KEY (`Apostador_idApostador`)
    REFERENCES `mydb`.`Apostador` (`idApostador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Equipa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Equipa` (
  `idEquipa` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `desporto` VARCHAR(45) NULL,
  `pais` VARCHAR(45) NULL,
  PRIMARY KEY (`idEquipa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Odds`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Odds` (
  `idOdds` INT NOT NULL,
  `oddC` FLOAT NULL,
  `oddE` FLOAT NULL,
  `oddF` FLOAT NULL,
  PRIMARY KEY (`idOdds`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Jogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Jogo` (
  `idJogo` INT NOT NULL,
  `data_inicio` DATETIME NULL,
  `Equipa_idEquipa2` INT NOT NULL,
  `Equipa_idEquipa1` INT NOT NULL,
  `Odds_idOdds` INT NOT NULL,
  `estado` INT NULL,
  `resultado` INT NULL,
  PRIMARY KEY (`idJogo`),
  INDEX `fk_Jogo_Equipa1_idx` (`Equipa_idEquipa2` ASC) VISIBLE,
  INDEX `fk_Jogo_Equipa2_idx` (`Equipa_idEquipa1` ASC) VISIBLE,
  INDEX `fk_Jogo_Odds1_idx` (`Odds_idOdds` ASC) VISIBLE,
  CONSTRAINT `fk_Jogo_Equipa1`
    FOREIGN KEY (`Equipa_idEquipa2`)
    REFERENCES `mydb`.`Equipa` (`idEquipa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Jogo_Equipa2`
    FOREIGN KEY (`Equipa_idEquipa1`)
    REFERENCES `mydb`.`Equipa` (`idEquipa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Jogo_Odds1`
    FOREIGN KEY (`Odds_idOdds`)
    REFERENCES `mydb`.`Odds` (`idOdds`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Aposta_has_Jogo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Aposta_has_Jogo` (
  `Aposta_idAposta` INT NOT NULL,
  `Jogo_idJogo` INT NOT NULL,
  `resultado_Previsto` INT NULL,
  PRIMARY KEY (`Aposta_idAposta`, `Jogo_idJogo`),
  INDEX `fk_Aposta_has_Jogo_Jogo1_idx` (`Jogo_idJogo` ASC) VISIBLE,
  INDEX `fk_Aposta_has_Jogo_Aposta1_idx` (`Aposta_idAposta` ASC) VISIBLE,
  CONSTRAINT `fk_Aposta_has_Jogo_Aposta1`
    FOREIGN KEY (`Aposta_idAposta`)
    REFERENCES `mydb`.`Aposta` (`idAposta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Aposta_has_Jogo_Jogo1`
    FOREIGN KEY (`Jogo_idJogo`)
    REFERENCES `mydb`.`Jogo` (`idJogo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Movimento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Movimento` (
  `idTransacao` INT NOT NULL,
  `valor` FLOAT NULL,
  `saldo` FLOAT NULL,
  `data` DATETIME NULL,
  `Apostador_idApostador` INT NOT NULL,
  PRIMARY KEY (`idTransacao`),
  INDEX `fk_Movimento_Apostador1_idx` (`Apostador_idApostador` ASC) VISIBLE,
  CONSTRAINT `fk_Movimento_Apostador1`
    FOREIGN KEY (`Apostador_idApostador`)
    REFERENCES `mydb`.`Apostador` (`idApostador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

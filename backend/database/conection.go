package database

import (
	"backend/models"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// const (
// 	dsn= "host=localhost user=postgres password=postgres dbname=appwebvs port=5432 sslmode=disable"
// )

func Init(url string)*gorm.DB{
	db,err := gorm.Open(postgres.Open(url),&gorm.Config{})
	if err != nil {
		log.Fatalln(err)
	}
	db.AutoMigrate(&models.User{})
	return db
}


package models

import (
	"gorm.io/gorm"
)


type User struct{
	gorm.Model
	Name string `gorm:"not null;unique"`
	Email string `gorm:"not null;unique"`
	Password string `gorm:"not null"`
	// BirthDate int64 `gorm:"not null"`
}


package users

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type handler struct{
	DB *gorm.DB
}



func RegisterRoutes(router *gin.Engine,db *gorm.DB){
	h := new(handler)
	h.DB = db
	routes := router.Group("/users")
	routes.GET("/",h.getAllUser)
	routes.POST("/",h.AddUser)
	routes.POST("/validation",h.getUserValidation)
	
}
package main

import (
	"backend/database"
	"backend/pkg/users"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)
const (
	dsn= "host=localhost user=postgres password=postgres dbname=appwebvs port=5432 sslmode=disable"
)

func main() {
	router := gin.Default()
	// gin.SetMode(gin.ReleaseMode)
	router.Use(cors.Default())
	dbHandler := database.Init(dsn)
	users.RegisterRoutes(router,dbHandler)
	router.GET("/",func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK,gin.H{
			"message":"succes",
		})
	})
	router.Run()
}
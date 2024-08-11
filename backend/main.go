package main

import (
	"backend/database"
	"backend/middleware"
	"backend/pkg/users"
	"log"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

// const (
// 	dsn= "host=localhost user=postgres password=postgres dbname=appwebvs port=5432 sslmode=disable"
// )

func main() {
	err := godotenv.Load()
	if err != nil{
		log.Fatalln("Error env")
	}
	router := gin.Default()
	dbUrl := os.Getenv("DATABASE_URL")
	// gin.SetMode(gin.ReleaseMode)
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:5173"},
		AllowMethods: []string{"GET","POST"},
		AllowHeaders: []string{"Origin","Content-Type","Authorization"},
		AllowCredentials: true,

	}))
	dbHandler := database.Init(dbUrl)
	users.RegisterRoutes(router,dbHandler)
	router.GET("/",func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK,gin.H{
			"message":"succes",
		})
	})
	router.Use(middleware.CookieAuth())
	router.GET("/get-user",func(ctx *gin.Context) {
		name,_ := ctx.Get("name")
		email, _  := ctx.Get("email")
		ctx.JSON(http.StatusOK,gin.H{
			"name" : name,
			"email":email,
		})

	})
	router.POST("/logout",func(ctx *gin.Context) {
		ctx.SetCookie("auth","",-1,"/","localhost",false,true)
		ctx.JSON(http.StatusOK,gin.H{"message":"Logged out successfully"})
	})
	router.Run()
}
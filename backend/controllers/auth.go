package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)


func Register(ctx *gin.Context){
	ctx.JSON(http.StatusOK,gin.H{
		"data":"!Hello Controllers",
	})
}
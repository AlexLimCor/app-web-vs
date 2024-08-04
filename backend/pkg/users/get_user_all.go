package users

import (
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)


func(h handler)getAllUser(ctx *gin.Context){
	var userList []models.User
	if result := h.DB.Find(&userList) ; result.Error != nil{
		ctx.AbortWithError(http.StatusNotFound,result.Error)
		return;
	}
	ctx.JSON(http.StatusOK,&userList)
}
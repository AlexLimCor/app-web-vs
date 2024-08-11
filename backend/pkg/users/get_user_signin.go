package users

import (
	"backend/models"
	"backend/utils/token"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)



type userData struct{
	Email string `json:"email"`
	Password string `json:"password"`
}


func(h handler)getUserValidation(ctx *gin.Context){
	var user models.User
	body := new(userData)
	if err := ctx.BindJSON(&body) ; err != nil{
		ctx.AbortWithError(http.StatusBadRequest,err)
		return
	}
	result := h.DB.Where("email = ?", body.Email).First(&user)
	if result.Error != nil{
		ctx.AbortWithStatusJSON(http.StatusUnauthorized,gin.H{
			"message":"Invalid email or password",
		})
		return
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password),[]byte(body.Password)) ; err != nil{
		ctx.JSON(http.StatusBadRequest,gin.H{
			"message":"Email or Password invalid",
		})
		return
	}
	myToken , err := token.GenerateToken(user)
	if err != nil {
		ctx.JSON(http.StatusBadRequest,err)
		return;
	}
	ctx.SetCookie("auth",myToken,3600,"/","localhost",false,true)
	ctx.JSON(http.StatusOK,gin.H{
		"message":"generate cookie",
	})
}
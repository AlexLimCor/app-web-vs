package users

import (
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
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

	if user.Password != body.Password{
		ctx.AbortWithStatusJSON(http.StatusUnauthorized,gin.H{
			"message":"Invalid email or password",
		})
		return
	}
	
	ctx.JSON(http.StatusOK,&user)


}
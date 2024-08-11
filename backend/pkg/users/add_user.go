package users

import (
	"backend/models"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)



type AddUserRequestBody struct{
		Name string `json:"name"`
		Email string `json:"email"`
		Clave string `json:"clave"`
		RepeatClave string `json:"repeat-clave"`
		State bool `json:"state"`
}


func(h handler) AddUser(ctx *gin.Context){
	body := new(AddUserRequestBody)
	if err := ctx.BindJSON(&body) ; err != nil{
		ctx.AbortWithError(http.StatusBadRequest,err)
		return
	}
	
	newPassword, err := bcrypt.GenerateFromPassword([]byte(body.Clave),bcrypt.DefaultCost)
	if err != nil{
		log.Fatalf("Error al decifrar la contrasenia: %s",err)
	}
	var user models.User
	user.Name = body.Name
	user.Email = body.Email
	user.Password = string(newPassword)
	if result := h.DB.Create(&user) ; result.Error!= nil{
		ctx.AbortWithError(http.StatusNotFound,result.Error)
		return
	}
	ctx.JSON(http.StatusOK,&user)

}
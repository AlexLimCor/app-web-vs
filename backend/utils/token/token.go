package token

import (
	"backend/models"
	"fmt"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func GenerateToken(data models.User) (string,error){
	claim := jwt.MapClaims{}

	claim["authorized"] =true
	claim["id"] = data.ID
	claim["name"] = data.Name
	claim["email"] = data.Email
	claim["exp"] = time.Now().Add(time.Hour * 2).Unix()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256,claim)

	return token.SignedString([]byte(os.Getenv("API_KEY")))
}


func extractToken(ctx *gin.Context) string{
	token := ctx.Query("token")
	if token != ""{
		return token
	}
	bearerToken := ctx.Request.Header.Get("Authorization")
	if len(strings.Split(bearerToken," ")) == 2{
		return strings.Split(bearerToken," ")[1]
	}
	return ""

}

func TokenValid(ctx *gin.Context) error{
	tokenString := extractToken(ctx)
	_ , err := jwt.Parse(tokenString,func(t *jwt.Token) (interface{}, error) {
		if _ , ok := t.Method.(*jwt.SigningMethodHMAC); !ok{
			return nil,fmt.Errorf("Unexpected signing method: %v", t.Header["alg"])
		}
		return []byte(os.Getenv("API_KEY")),nil
	})
	if err != nil{
		return err
	}
	return nil
}

func ExtractTokenID(ctx *gin.Context) (uint,error){
	tokenString := extractToken(ctx)
	token,err := jwt.Parse(tokenString,func(t *jwt.Token) (interface{}, error) {
		if _ ,ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil,fmt.Errorf("Unexpected signing method: %v", t.Header["alg"])
		}
		return []byte(os.Getenv("API_KEY")),nil
	})
	if err != nil{
		return 0,err
	}
	claim , ok := token.Claims.(jwt.MapClaims)
	if ok && token.Valid {
		uid , err := strconv.ParseUint(fmt.Sprintf("%.0f",claim["id"]),10,32)
		if err != nil {
			return 0 , err
		}
		return uint(uid),nil
	}
	return 0,nil
}
package middleware

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)



func CookieAuth() gin.HandlerFunc{
	return func(ctx *gin.Context) {
		cookie , err := ctx.Cookie("auth")
		if err != nil{
			ctx.JSON(http.StatusNotFound,"Unauthorized")
			ctx.Abort()
			return
		}
		token , err := jwt.Parse(cookie,func(t *jwt.Token) (interface{}, error) {
			if _ , ok := t.Method.(*jwt.SigningMethodHMAC);!ok{
				return nil,jwt.ErrInvalidKey
			}
			return []byte(os.Getenv("API_KEY")),nil
		})
		if err != nil || !token.Valid{
			ctx.JSON(http.StatusUnauthorized,"Unauthorized")
			ctx.Abort()
			return
		}
		// extraer los datos del token
		claims , ok := token.Claims.(jwt.MapClaims)
		if !ok && !token.Valid{
			ctx.JSON(http.StatusUnauthorized,gin.H{"error":"Invalid Claims"})
			ctx.Abort()
			return
		}
		ctx.Set("userID",claims["id"])
		ctx.Set("name",claims["name"])
		ctx.Set("email",claims["email"])
		ctx.Next()

	}
}
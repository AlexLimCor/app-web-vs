import { useEffect, useMemo } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const response = await fetch("http://localhost:8080/get-user", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUser({
            name: data.name,
            email: data.email,
          });
          setLoading(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAuth();
  }, []);
  const login = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/users/validation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (response.ok) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:8080/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        setUser(null);
        setLoading(false);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

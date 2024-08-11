import { useEffect, useState } from "react";

export const useFetchUser = async (form) => {
  const [state, setState] = useState({
    data: null,
    error: "",
  });
  const fetchDataUser = async () => {
    try {
      const response = await fetch(`http://localhost:8080/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        const data = await response.json();

        setState({
          data,
          error: "",
        });
      }
    } catch (error) {
      setState({
        data: null,
        error: error,
      });
    }
  };
  useEffect(() => {
    fetchDataUser();
  }, []);
  return state;
};

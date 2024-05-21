import { useState } from "react";

function useDeleteUser() {
  const [error, setError] = useState();
  const urlInicial = "http://localhost:3000/api/user/deleteUser";

  const fetchDelete = async id => {
    try {
      const response = await fetch(`${urlInicial}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.status);
      if (response.ok) {
        const data = await response.json();
        console.log("success", data);
        return true;
      } else {
        console.error("Error", response.statusText);
      }
    } catch (error) {
      setError(error);
      return false;
    }
  };
  return { fetchDelete, error };
}

export default useDeleteUser;

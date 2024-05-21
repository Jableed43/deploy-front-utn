import { useState } from "react";

function useCreateUser() {
  const [error, setError] = useState();
  const urlInicial = "http://localhost:3000/api/user/create";

  const createUser = async formData => {
    try {
      const response = await fetch(`${urlInicial}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
  return { createUser, error };
}

export default useCreateUser;

import { useState } from "react";

function useGetAllUser() {
  const [error, setError] = useState();
  const urlInicial = "http://localhost:3000/api/user/getAll";

  const getAllUser = async () => {
    try {
      const response = await fetch(`${urlInicial}`);
      console.log(response.status);
      if (response.ok) {
        const users = await response.json();
        console.log("success");
        return users;
      } else {
        console.error("Error", response.statusText);
        return false;
      }
    } catch (error) {
      setError(error);
      return false;
    }
  };
  return { getAllUser, error };
}

export default useGetAllUser;

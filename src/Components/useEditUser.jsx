import { useState } from "react";

function useEditUser() {
  const [error, setError] = useState();
  const urlInicial = "http://localhost:3000/api/user/update";

  const editUser = async (formData, id) => {
    try {
      const response = await fetch(`${urlInicial}/${id}`, {
        method: "PUT",
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
  return { editUser, error };
}

export default useEditUser;

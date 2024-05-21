import { useState } from "react";
import useCreateUser from "./useCreateUser";
import PropTypes from "prop-types";

CreateUser.propTypes = {
  refetch: PropTypes.func,
};

function CreateUser({ refetch }) {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const { createUser } = useCreateUser();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await createUser(formData);
    if (response) {
      refetch(true);
    }
  }

  return (
    <>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="apellido">apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          value={formData.apellido}
          onChange={handleChange}
        />

        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="carrera">carrera</label>
        <input
          type="text"
          name="carrera"
          id="carrera"
          value={formData.carrera}
          onChange={handleChange}
        />

        <label htmlFor="edad">edad</label>
        <input
          type="number"
          name="edad"
          id="edad"
          value={formData.edad}
          onChange={handleChange}
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default CreateUser;

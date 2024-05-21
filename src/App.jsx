import { useEffect, useState } from "react";
import "./App.css";
import CreateUser from "./Components/CreateUser.jsx";
import EditUser from "./Components/EditUser.jsx";
import useDeleteUser from "./Components/useDeleteUser.jsx";
import { useNavigate } from "react-router-dom";

let imageStyle = {
  width: "200px",
};

function App() {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState();
  const [create, setCreate] = useState(false);
  const navigate = useNavigate();

  const refetch = done => {
    if (done) {
      fetchCharacter(urlInicial);
    }
  };

  const urlInicial = "http://localhost:3000/api/user/getAll";

  function fetchCharacter(url) {
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(datos => {
        setUsers(datos);
      });
  }

  useEffect(() => {
    fetchCharacter(urlInicial);
  }, []);

  function handleEditUser(user) {
    console.log(user);
    if (user) {
      setUser(user);
    }
    setEdit(true);
  }
  const { fetchDelete } = useDeleteUser();
  async function handleDeleteUser(user) {
    console.log(user._id);
    await fetchDelete(user._id);
    fetchCharacter(urlInicial);
  }

  return (
    <>
      <div className="padre">
        <button onClick={() => navigate("/create")}>Crear usuario nuevo</button>
        {users.map((user, indice) => (
          <div key={indice} className="cuadrado">
            <p> {user.nombre} </p>
            {/* <img className="img" src={user.Imagen} style={imageStyle} /> */}
            <p>Email: {user.email}</p>
            <p>Carrera: {user.carrera}</p>
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user)}>Delete</button>
          </div>
        ))}
        {edit ? <EditUser user={user} refetch={refetch} /> : <></>}
        {create ? <CreateUser refetch={refetch} /> : <></>}
      </div>
    </>
  );
}

export default App;

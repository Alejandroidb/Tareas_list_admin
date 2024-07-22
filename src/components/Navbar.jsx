import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode' // import dependency


const Navbar = () => {
  const [decodedToken, setDecodedToken] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const loguear = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://codigo-alfa.cl/bootcamp-socius2024/Api/loginUser",
        {
          method: "POST",
          body: JSON.stringify({ 'user':user, 'password':password }),
        }
      );
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      console.log(data);

      if (data.success) {
        console.log(data)
        const token = data.jwt; 
        if (token) {
          try {
            const decoded = jwtDecode(token);
            console.log('Decodificado:', decoded.data.token);
            localStorage.setItem("token", decoded.data.token);
            setDecodedToken(decoded.data.token);
            setUser("");
            setPassword("");
            navigate("/Curriculum");
          } catch (error) {
            console.error('Error al decodificar el token', error);
          }
        }

        // return 0;
        // localStorage.setItem("authToken", data.token);
        
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema con la autenticación");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/">
            TareaAdmin
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/Curriculum"
                >
                  Cv
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/Tasks"
                >
                  Tareas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/DoneTasks">
                  Tareas Realizadas
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={loguear}>
              <input
                className="form-control me-2"
                type="user"
                placeholder="Ingrese su correo"
                aria-label="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
              <input
                className="form-control me-2"
                type="password"
                placeholder="Ingrese su contraseña"
                aria-label="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className="btn btn-outline-success bg-success text-light"
                type="submit"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

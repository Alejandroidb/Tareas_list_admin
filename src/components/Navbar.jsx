import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to='/'>
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
                 to='/Curriculum'
                >
                  Cv
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Tareas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Tareas Realizadas
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="email"
                placeholder="Ingrese su correo"
                aria-label="email"
              />
              <input
                className="form-control me-2"
                type="password"
                placeholder="Ingrese su contraseña"
                aria-label="contraseña"
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

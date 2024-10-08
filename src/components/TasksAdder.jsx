import React, { useState } from "react";

const TasksAdder = ({ agregarTarea }) => {
  const [tituloTarea, setTituloTarea] = useState("");
  const [descripcionTarea, setDescripcionTarea] = useState("");

  const manejarTareas = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No se encontró el token de autenticación");
      return;
    }
    await agregarTarea(tituloTarea, descripcionTarea, token);
    setTituloTarea("");
    setDescripcionTarea("");
  };

  return (
    <div className="container-fluid">
      <h2>Agregar Tarea</h2>
      <form onSubmit={manejarTareas} className="form-control me-2">
        <input
          type="text"
          placeholder="Título de la tarea"
          value={tituloTarea}
          onChange={(e) => setTituloTarea(e.target.value)}
          required
        />
        <input
          placeholder="Descripción de la tarea"
          value={descripcionTarea}
          onChange={(e) => setDescripcionTarea(e.target.value)}
          required
        />
        <button
          className="btn btn-info bg-info-subtle text-center ms-2"
          type="submit"
        >
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};

export default TasksAdder;

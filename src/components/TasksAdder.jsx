import React from "react";
import { useState } from "react";
import Tasks from "../views/Tasks";

const TasksAdder = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const agregarTarea = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://codigo-alfa.cl/bootcamp-socius2024/Api/insertarTarea",
        {
          method: "POST",
          body: JSON.stringify({ titulo, descripcion }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al agregar la tarea");
      }

      const data = await response.json();
      if (data.success) {
        alert("Tarea agregada exitosamente");
        setTitulo("");
        setDescripcion("");
      } else {
        alert("Error al agregar la tarea");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-fluid">
      <h2>Agregar Tarea</h2>
      <form onSubmit={agregarTarea} className="form-control me-2">
        <input
          type="text"
          placeholder="Título de la tarea"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <input
          placeholder="Descripción de la tarea"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></input>
        <button type="submit">Agregar Tarea</button>
      </form>

      <Tasks/>
    </div>
  );
};

export default TasksAdder;

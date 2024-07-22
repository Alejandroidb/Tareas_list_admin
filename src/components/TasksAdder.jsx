import React, { useState, useEffect } from "react";
import Tasks from "../components/Tasks";
import TasksAdder from "../components/TasksAdder";

const TaskManager = () => {
  const [tareas, setTareas] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    // const storedToken = localStorage.getItem("token");
    if (token) {
      fetchTareas(token);
    }
  }, [token]);

  const fetchTareas = async (token) => {
    try {
      const response = await fetch(
        "https://codigo-alfa.cl/bootcamp-socius2024/Api/listTareasUsuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );
      if (!response.ok) {
        throw new Error("Error al cargar las tareas");
      }
      const data = await response.json();
      setTareas(data.getTareas || []);
    } catch (error) {
      console.error("Error:", error);
      alert("Error al cargar las tareas");
    }
  };

  const agregarTarea = async (tituloTarea, descripcionTarea, token) => {
    // const token = localStorage.getItem("token");
    if (!token) {
      alert("No se encontró el token de autenticación");
      return;
    }

    try {
      const response = await fetch(
        "https://codigo-alfa.cl/bootcamp-socius2024/Api/insertarTarea",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            TituloTarea: tituloTarea,
            DescripcionTarea: descripcionTarea,
            token: token,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error al agregar la tarea");
      }

      const data = await response.json();
      if (data.success) {
        alert("Tarea agregada exitosamente");

        fetchTareas(token);
      } else {
        alert("Error al agregar la tarea");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-fluid">
      <TasksAdder agregarTarea={agregarTarea} />
      <Tasks tareas={tareas} />
    </div>
  );
};

export default TaskManager;

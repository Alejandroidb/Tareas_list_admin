import React, { useState, useEffect } from "react";
import Tasks from "../components/Tasks";
import TasksAdder from "../components/TasksAdder";

const TaskManager = ({token}) => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const traerTareas = async () => {
    //   const token = localStorage.getItem("authToken");

      try {
        const response = await fetch(
          "https://codigo-alfa.cl/bootcamp-socius2024/Api/listTareasUsuario",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
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
if (token){
    traerTareas();}
  }, [token]);

  const agregarTarea = async (tituloTarea, descripcionTarea) => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      alert("No se encoentró el token de autenticación");
      return;
    }

    try {
      const response = await fetch(
        "https://codigo-alfa.cl/bootcamp-socius2024/Api/insertarTarea",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ tituloTarea, descripcionTarea }),
        }
      );
      if (!response.ok) {
        throw new Error("Error al agregar la tarea");
      }

      const data = await response.json();
      if (data.success) {
        alert("Tarea agregada exitosamente");

        setTareas((prevTareas) => [
          ...prevTareas,
          {
            TituloTarea: tituloTarea,
            DescripcionTarea: descripcionTarea,
            FechaIngreso: new Date().toISOString(),
            FechaTermino: "0000-00-00 00:00:00",
            ComentarioFinal: "",
            RandomTarea: data.randomTarea, // Asume que este valor se devuelve del backend
            EstadoTarea: "Tarea activa",
          },
        ]);
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

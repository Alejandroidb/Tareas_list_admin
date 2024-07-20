import React, { useEffect, useState } from "react";

const Tasks = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const listaTareas = async () => {
      const token = localStorage.getItem("authToken");
      console.log(token)

      try {
        const response = await fetch(
          "https://codigo-alfa.cl/bootcamp-socius2024/Api/listTareasUsuario",
          {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Agrega el encabezado de Content-Type
                "Authorization": `Bearer ${token}`
              },
            body: JSON.stringify({ token }),
          }
          
        );
        if (!response.ok) {
          throw new Error("Error al cargar las tareas");
        }
        const data = await response.json();
        console.log(data);
        setTareas(data.getTareas || [])
        
      } catch (error) {
        console.error("Error:", error);
        alert("Error al cargar las tareas");
      }
    };

    listaTareas();
  }, []);

  return (
    <>
      <div>
        <h2>Lista de Tareas</h2>
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}> {/* Cambia task a tarea */}
              <h3>{tarea.titulo}</h3> {/* Cambia task a tarea */}
              <p>{tarea.descripcion}</p> {/* Cambia task a tarea */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tasks;
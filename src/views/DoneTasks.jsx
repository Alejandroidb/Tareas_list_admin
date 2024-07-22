import React, { useEffect, useState } from "react";

const DoneTasks = () => {
  const [tareas, setTareas] = useState([]);
  const token = localStorage.getItem("token");

  // Función para formatear fechas
  function formatDateToDDMMYYYY(date) {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Fecha inválida");
    }
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const year = parsedDate.getFullYear();
    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    const obtenerTareas = async () => {
      if (!token) {
        console.error("No se encontró el token de autenticación");
        return;
      }

      console.log("Token:", token); // Verificar el token

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
        console.log("Datos de la API:", data); // Verificar la respuesta de la API

        // Verificar si data.getTareas existe y es un array
        if (Array.isArray(data.getTareas)) {
          console.log("Todas las tareas:", data.getTareas); // Verificar todas las tareas

          // Filtrar las tareas que están terminadas
          const tareasTerminadas = data.getTareas.filter((tarea) => {
            console.log("Estado de la tarea:", tarea.EstadoTarea); // Verificar el estado de cada tarea
            return tarea.EstadoTarea === "Tarea Terminada";
          });
          console.log("Tareas terminadas:", tareasTerminadas); // Verificar las tareas filtradas
          setTareas(tareasTerminadas);
        } else {
          console.error("El formato de respuesta de la API no es el esperado");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error al cargar las tareas");
      }
    };

    obtenerTareas();
  }, [token]);

  return (
    <div>
      <h2 className="mb-4">Tareas Terminadas</h2>
      <div className="container-fluid">
        <div className="row">
          {tareas.length > 0 ? (
            tareas.map((tarea) => (
              <div className="col-md-4 mb-3" key={tarea.RandomTarea}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{tarea.TituloTarea}</h5>
                    <p className="card-text">{tarea.DescripcionTarea}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Creada: {formatDateToDDMMYYYY(tarea.FechaIngreso)}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Comentario Final: {tarea.ComentarioFinal || "No hay comentario"}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Estado: {tarea.EstadoTarea}</small>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No hay tareas terminadas.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoneTasks;

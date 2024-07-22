import React, { useEffect, useState } from "react";

const Tasks = ({ fetchTareas }) => {
  const [tareas, setTareas] = useState([]);
  const [comentarios, setComentarios] = useState({});
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
    const listaTareas = async () => {
      if (!token) return;

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
        console.log(data);
        setTareas(data.getTareas || []);
      } catch (error) {
        console.error("Error:", error);
        alert("Error al cargar las tareas");
      }
    };

    listaTareas();
  }, [token]);

  useEffect(() => {
    if (fetchTareas) {
      fetchTareas(token); // Actualiza la lista de tareas si fetchTareas cambia
    }
  }, [fetchTareas, token]);

  const manejarCambioComentario = (e, randomTarea) => {
    setComentarios({
      ...comentarios,
      [randomTarea]: e.target.value,
    });
  };

  const manejarMarcarComoFinalizada = async (randomTarea) => {
    const comentarioFinal = comentarios[randomTarea] || "";

    try {
      const response = await fetch(
        "https://codigo-alfa.cl/bootcamp-socius2024/Api/marcarTareaFinal",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            RandomTarea: randomTarea,
            token: token,
            ComentarioFinal: comentarioFinal,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error al marcar la tarea como finalizada");
      }
      const data = await response.json();
      if (data.success) {
        alert("Tarea marcada como finalizada");
        // Remover la tarea marcada como finalizada de la lista de tareas
        setTareas((prevTareas) =>
          prevTareas.filter((tarea) => tarea.RandomTarea !== randomTarea)
        );
      } else {
        alert("Error al marcar la tarea como finalizada");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2 className="mb-4">Lista de Tareas</h2>
      <div className="container-fluid">
        <div className="row">
          {tareas
            .filter((tarea) => tarea.EstadoTarea === "Tarea activa") // Filtrar tareas activas
            .map((tarea) => (
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
                      <small className="text-muted">Estado: {tarea.EstadoTarea}</small>
                    </p>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder="Comentario final"
                        value={comentarios[tarea.RandomTarea] || ""}
                        onChange={(e) => manejarCambioComentario(e, tarea.RandomTarea)}
                      />
                      <button
                        className="btn btn-success mt-2"
                        onClick={() => manejarMarcarComoFinalizada(tarea.RandomTarea)}
                      >
                        Marcar como finalizada
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;

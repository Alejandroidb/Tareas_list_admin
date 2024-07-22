import React from "react";

const Tasks = ({ tareas }) => {
  return (
    <>
      <div>
      <h2>Lista de Tareas</h2>
      {tareas && tareas.length > 0 ? (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.RandomTarea}>
              <h3>{tarea.TituloTarea}</h3>
              <p>{tarea.DescripcionTarea}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </div>
    </>
  );
};

export default Tasks;

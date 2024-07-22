import React, { useEffect, useState } from "react";


const Tasks = () => {

  function formatDateToDDMMYYYY(date) {
    // Verificar si date es una cadena o número y convertir a Date si es necesario
    const parsedDate = new Date(date);
  
    // Validar si parsedDate es una fecha válida
    if (isNaN(parsedDate.getTime())) {
      throw new Error('Fecha inválida');
    }
  
    // Obtener los componentes de la fecha
    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const year = parsedDate.getFullYear();
  
    // Formatear la fecha como 'dd-MM-yyyy'
    return `${day}-${month}-${year}`;
  }
  
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
            body: JSON.stringify({ token:localStorage.getItem("token") }),
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
            <li key={tarea.RandomTarea}> {/* Cambia task a tarea */}
              <h3>{tarea.TituloTarea}</h3> {/* Cambia task a tarea */}
              <p>{tarea.DescripcionTarea}</p> {/* Cambia task a tarea */}
              <p>Creada:{formatDateToDDMMYYYY(tarea.FechaIngreso)}</p>
              <hr></hr>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tasks;
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const traer = async () => {
      const response = await fetch(
        "https://codigo-alfa.cl/bootcamp-socius2024/Api/ping"
      );
      const data = await response.json();
      // console.log(data);
    };

    traer();
  }, []);

  return (
    <>
      <h1 className="text-center mt-1">Bienvenido a TareasAdmin!</h1>
      <img
        className="img-fluid"
        src="https://miro.medium.com/v2/resize:fit:1400/1*ds-Es2HGAfINReap4nKEGg.jpeg"
        alt="Task_list"
      />
    </>
  );
};

export default Home;

import React from "react";

const PersView = () => {
  return (
    <>
      <div className="container text-center mt-1">
        <h2 className="">Alejandro Díaz</h2>
      </div>
      <div className="container-fluid d-flex justify-content-center pt-2 pb-2 mb-2">
        <img
          src="https://avatars.githubusercontent.com/u/148168482?v=4"
          alt="Alejandro Diaz"
        />
      </div>
      <section className="container mb-2 mt-2 pb-2">
        <h2 className="text-center">Resumen</h2>
        <p className="text-center">
          Alejandro Díaz Berrios, Licenciado en Educación de la Universidad
          Central de Chile y Profesor de Inglés. He desarollado mi profesión en
          distintos establecimientos educacionales, tanto públicos como
          privados, al mismo tiempo he trabajado con niños, adolescentes y
          adultos en instituciones de educación superior.
        </p>

        <div>
          <h3 className="text-center">
            <i className="fa-solid fa-user"></i>Datos Personales
          </h3>
          <ul>
            <li>Nombre: Alejandro Ignacio Díaz Berrios</li>
            <li>Lugar de nacimiento: Santiago, Chile</li>
            <li>Fecha de nacimiento: 09 octubre 1986</li>
            <li>Lugar de Residencia: La Pintana, Santiago, Chile</li>
          </ul>
        </div>
      </section>
      <section className="mb-3">
        <h2 className="text-center">
          <i className="fa-solid fa-graduation-cap"></i>Educación
        </h2>
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2">
              <div className="card ms-1">
                <div className="card-body">
                  <h5 className="card-title">Experiencia Académica</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Pedagogía en Inglés
                  </h6>
                  <p className="card-text">
                    Licencia en Lengua y cultura inglesa y titulo de Profesor de
                    inglés.
                  </p>
                  <p>Otorgado por la Universidad central de Chile</p>
                  <p>2007 - 2011</p>
                  <a href="https://www.ucentral.cl/" className="card-link">
                    U. Central
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2">
              <div className="card ms-1">
                <div className="card-body">
                  <h5 className="card-title">Experiencia Académica</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Desarrollo Full Stack JavaScript
                  </h6>
                  <p className="card-text">
                    Desarrollo de habilidades en desarrollo Fullstack y
                    JavaScript.
                  </p>
                  <p>Bootcamp desarrollado por Desafio Latam</p>
                  <p>Cursando actualmente</p>
                  <a href="https://desafiolatam.com/" className="card-link">
                    Desafio Latam
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center">
          <i className="fa-solid fa-briefcase"></i>Experiencia Laboral
        </h2>
        <div className="container mb-2">
          <div className="row d-flex justify-content-around">
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-2">
              <div className="card">
                <img
                  src="https://heinrich.cl/ggh1/wp-content/uploads/banner_directoriogrupo.jpg"
                  className="card-img-top"
                  alt="Heinrich"
                />
                <div className="card-body">
                  <p className="card-text">Profesor de Inglés.</p>
                  <p className="card-text">
                    Colegio Guillermo González Heinrich,
                    <br />
                    <i className="fa-solid fa-location-dot"></i> Providencia
                  </p>
                  <hr />
                  <p className="card-text">2010</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-2">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9Kaefq9bk_vueOV03Pw02fyA2Ojh5Fg1uQ&s"
                  className="card-img-top"
                  alt="Contempora"
                />
                <div className="card-body">
                  <p className="card-text">Profesor de Inglés.</p>
                  <p className="card-text">
                    Colegio Contempora,
                    <br />
                    <i className="fa-solid fa-location-dot"></i> La Florida
                  </p>
                  <hr />
                  <p className="card-text">2011 - 2012</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-2">
              <div className="card">
                <img
                  src="https://i.ytimg.com/vi/cIFW3BPvEz0/hqdefault.jpg"
                  className="card-img-top"
                  alt="Blest Gana"
                />
                <div className="card-body">
                  <p className="card-text">Profesor de Inglés.</p>
                  <p className="card-text">
                    Colegio Alberto Blest Gana,
                    <br />
                    <i className="fa-solid fa-location-dot"></i> San Ramon
                  </p>
                  <hr />
                  <p className="card-text">2013</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-2">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6euTTgpU-4fREBEZHIhBlrbm1PBk1AQvqNA&s"
                  className="card-img-top"
                  alt="Extremadura"
                />
                <div className="card-body">
                  <p className="card-text">Profesor de Inglés.</p>
                  <p className="card-text">
                    Colegio Extremadura,
                    <br />
                    <i className="fa-solid fa-location-dot"></i> Puente Alto
                  </p>
                  <hr />
                  <p className="card-text">2013</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-2">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEebzkDsdtwnmyW0F7gS4qOvSNJcZvycXpVA&s"
                  className="card-img-top"
                  alt="Duoc"
                />
                <div className="card-body">
                  <p className="card-text">Profesor de Inglés.</p>
                  <p className="card-text">
                    Instituto Duoc UC, Plaza Norte,
                    <br />
                    <i className="fa-solid fa-location-dot"></i> Huechuraba
                  </p>
                  <hr />
                  <p className="card-text">2014 - 2018</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-2">
              <div className="card">
                <img
                  src="https://colegioapostolsanpedro.cl/wp-content/uploads/2021/12/IMG-1346-768x1024.jpg"
                  className="card-img-top"
                  alt="Apostol San Pedro"
                />
                <div className="card-body">
                  <p className="card-text">Profesor de Inglés.</p>
                  <p className="card-text">
                    Colegio Apostol San Pedro,
                    <br />
                    <i className="fa-solid fa-location-dot"></i> Ñuñoa
                  </p>
                  <hr />
                  <p className="card-text">2019 - 2020</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-2">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dhMjFHBMylsiSa1cQ-Uw9ZKppMftxdd62g&s"
                  className="card-img-top"
                  alt="Alejandro"
                />
                <div className="card-body">
                  <p className="card-text">Profesor de Inglés.</p>
                  <p className="card-text">
                    Freelance - Independiente,
                    <br />
                    <i className="fa-solid fa-location-dot"></i> Santiago
                  </p>
                  <hr />
                  <p className="card-text">2020 - actualmente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersView;

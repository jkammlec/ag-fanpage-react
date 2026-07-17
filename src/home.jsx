import React, { useState } from 'react';

export default function Home() {
  // Estado para controlar si mostrar el texto adicional o no
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <>
      <div className="container my-4">
        <div className="mx-auto" style={{ maxWidth: '75%' }}>
          
          <div className="card mb-3 border-0 bg-dark text-white overflow-hidden">
            <div className="position-relative d-flex flex-column d-md-block">
              
              <img src="./img/AGCallingPlane.jpg" className="card-img" alt="Atarashi Gakko" />            
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 d-none d-md-block"></div>
              
              <div id="contenedor-texto"
                className="position-relative position-md-absolute bottom-md-0 start-md-50 translate-middle-x-md text-center px-3 py-4 pb-md-4 w-100 d-flex flex-column justify-content-center align-items-center lh-sm bg-dark bg-md-transparent mx-auto">

                <p className="card-text fs-6 fs-sm-4 fw-bold m-0">
                  Atarashi Gakko, el grupo japonés que viene a refrescar tus oídos. <br className="d-none d-sm-inline" />
                  Chile lo sabe, por eso es el segundo país que más las escucha.
                </p>

                {/* El botón cambia su texto y alterna el estado al hacer clic */}
                <button 
                  type="button" 
                  className="btn btn-sm btn-outline-light mt-2 px-3 py-1" 
                  onClick={() => setMostrarMas(!mostrarMas)}
                >
                  {mostrarMas ? "Leer menos" : "Leer más"}
                </button>

                {/* Si 'mostrarMas' es verdadero, renderiza el texto adicional */}
                {mostrarMas && (
                  <p 
                    className="card-text mt-2 fw-normal text-light" 
                    style={{ fontSize: '0.85rem', maxWidth: '550px' }}
                  >
                    Atarashii Gakkō no Leaders adopta una filosofía de desafíar las normas de la sociedad japonesa. Posicionándose como las representantes de la juventud japonesa, el principio fundamental del grupo afirma: «En una época en la que solamente se reconoce a los ciudadanos ejemplares, nos esforzamos por desafiar a una sociedad de mente estrecha abrazando la individualidad y la libertad».
                  </p>
                )}

              </div>

            </div>
          </div>

          {/* CARDS INFERIORES */}
          <div className="row g-3">
            <div className="col-md-6 d-flex">
              <div className="card mb-3 h-100 w-100">
                <div className="row g-0 h-100">
                  <div className="col-md-4">
                    <img src="./img/spot.png" className="img-fluid h-100 object-fit-cover" alt="Spotify" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Spotify</h5>
                      <p className="card-text">En Spotify, Chile es el top 2 de oyentes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card mb-3 h-100 w-100">
                <div className="row g-0 h-100">
                  <div className="col-md-4">
                    <img src="./img/yt.png" className="img-fluid h-100 object-fit-cover" alt="YouTube" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">YouTube</h5>
                      <p className="card-text">
                        En YouTube, donde superan los 5 millones de vistas, Chile es el top 6 de oyentes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> 
      </div>

      {/* SECCIÓN DE VIDEO */}
      <div className="container my-4 text-center">
        <h4 className="mb-3">Canción más escuchada <i className="bi bi-caret-right-square-fill ms-2 fs-5"></i></h4>

        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/l446hUqQ7GY" title="YouTube video player" allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}
import React, { useState, useEffect } from 'react';

// 1er COMPONENTE HIJO: TarjetaCancion
function TarjetaCancion({ id, titulo, alHacerClic }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div 
        className="card shadow-lg border-0 rounded-4" 
        style={{ cursor: 'pointer' }}
        onClick={() => alHacerClic(id)}
        data-bs-toggle="modal" 
        data-bs-target="#playerModal"
      >
        <img 
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} 
          className="card-img-top" 
          alt={titulo} 
        />
        <div className="card-body text-center">
          <h6 className="fw-bold">{titulo}</h6>
        </div>
      </div>
    </div>
  );
}

// 2do COMPONENTE HIJO: ElementoComentario
function ElementoComentario({ nombre, texto }) {
  return (
    <div className="card bg-light p-3 mb-2 rounded-3 border-0 shadow-sm">
      <p className="mb-1">
        <strong>{nombre}</strong> <span className="text-muted small">hace un momento</span>
      </p>
      <p className="mb-0 text-muted small">{texto}</p>
    </div>
  );
}

// COMPONENTE PRINCIPAL
export default function Musica() {
  //Estados para el reproductor de video
  const [videoId, setVideoId] = useState('');

  // Estados para los comentarios
  const [comentarios, setComentarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [texto, setTexto] = useState('');

  // Lista de canciones centralizada en un Array
  const listaCanciones = [
    { id: 'l446hUqQ7GY', titulo: 'Otonablue' },
    { id: 'vU06uPjvFGo', titulo: 'Free Your Mind' },
    { id: 'e0SZ28FP3RI', titulo: 'Suki Lie' },
    { id: 'ye5v9mOkDh8', titulo: '恋ゲバ' },
    { id: 'd3v0QqZlCes', titulo: 'Change' }
  ];

  //Efecto para inicializar el carrusel de Bootstrap al cargar la página
  useEffect(() => {
    if (window.bootstrap) {
      const carouselElement = document.getElementById('carouselExampleSlidesOnly');
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 2500,
          ride: 'carousel'
        });
      }
    }
  }, []); 

  // Función para cambiar el video del modal
  const reproducir = (id) => {
    setVideoId(id);
  };

  // Función para manejar el formulario de comentarios
  const agregarComentario = (e) => {
    e.preventDefault(); 
    if (nombre.trim() && texto.trim()) {
      const nuevoComentario = { nombre, texto };
      setComentarios([nuevoComentario, ...comentarios]); // Agrega el nuevo comentario arriba
      setNombre('');
      setTexto('');
    }
  };

  return (
    <main className="flex-grow-1">
      
      {/* SECCIÓN 1: Carrusel de fotos de Atarashi Gakko */}
      <div className="d-flex justify-content-center mt-2">
        <div style={{ maxWidth: '500px', width: '100%' }}>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active"><img src="./img/AG1.jpg" className="d-block w-100" alt="AG1" /></div>
              <div className="carousel-item"><img src="./img/AG2.jpg" className="d-block w-100" alt="AG2" /></div>
              <div className="carousel-item"><img src="./img/AG3.jpg" className="d-block w-100" alt="AG3" /></div>
              <div className="carousel-item"><img src="./img/AG4.jpg" className="d-block w-100" alt="AG4" /></div>
              <div className="carousel-item"><img src="./img/AG5.jpg" className="d-block w-100" alt="AG5" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: Rejilla de canciones dinámicas */}
      <div className="container py-5">
        <h2 className="text-center mb-4">5 canciones para conocer Atarashi Gakko</h2>
        <div className="row g-4 justify-content-center">
          
          {/* Mapear el array para renderizar el 1er componente*/}
          {listaCanciones.map((cancion) => (
            <TarjetaCancion 
              key={cancion.id}
              id={cancion.id}
              titulo={cancion.titulo}
              alHacerClic={reproducir} // Pasamos la función del padre al hijo
            />
          ))}

        </div>
      </div>

      {/* SECCIÓN 3: Formulario e historial de comentarios */}
      <div className="container pb-5">
        <div className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="card shadow border-0 rounded-4">
            <div className="card-body">
              <h5 className="card-title fw-bold text-center mb-3">
                ¿Qué canción te gustó más? Deja tu comentario aquí:
              </h5>
              
              <form onSubmit={agregarComentario}>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Tu nombre o apodo" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required 
                  />
                  <textarea 
                    className="form-control" 
                    rows="3" 
                    placeholder="Escribe tu opinión sobre las canciones..." 
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    required 
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-custom">Publicar Comentario</button>
                </div>
              </form>

              {/* Lista dinámica que utiliza el 2do componente hijo */}
              <div className="mt-4">
                <hr />
                <h6 className="fw-bold text-muted mb-3">Comentarios de los fans:</h6>
                <div>
                  {comentarios.length === 0 ? (
                    <p className="text-muted small text-center fst-italic">
                      Aún no hay comentarios. ¡Comenta primero!
                    </p>
                  ) : (
                    comentarios.map((comentario, index) => (
                      <ElementoComentario 
                        key={index} 
                        nombre={comentario.nombre} 
                        texto={comentario.texto} 
                      />
                    ))
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 4: Modal del reproductor de video de YouTube */}
      <div className="modal fade" id="playerModal" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-dark">
            <div className="modal-body p-0">
              <div className="ratio ratio-16x9">
                <iframe 
                  src={videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : ""} 
                  allow="autoplay; fullscreen" 
                  title="YouTube Player">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
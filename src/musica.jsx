import React, { useState, useEffect } from 'react';

export default function Musica() {
  // 1. Estados para el reproductor de video
  const [videoId, setVideoId] = useState('');

  // 2. Estados para los comentarios
  const [comentarios, setComentarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [texto, setTexto] = useState('');

  // 3. Este efecto despierta el carrusel de Bootstrap al entrar a la página
  useEffect(() => {
    // Verificamos si Bootstrap está cargado en la página
    if (window.bootstrap) {
      const carouselElement = document.getElementById('carouselExampleSlidesOnly');
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 2500,
          ride: 'carousel'
        });
      }
    }
  }, []); // Los corchetes vacíos indican que esto se ejecuta solo una vez al cargar el componente

  // Función para manejar el clic en las tarjetas de video
  const reproducir = (id) => {
    setVideoId(id);
  };

  // Función para manejar el formulario de comentarios
  const agregarComentario = (e) => {
    e.preventDefault(); 
    if (nombre.trim() && texto.trim()) {
      const nuevoComentario = { nombre, texto };
      setComentarios([nuevoComentario, ...comentarios]); // Ponemos el nuevo primero
      setNombre('');
      setTexto('');
    }
  };

  return (
    <main className="flex-grow-1">
      {/* Carrusel */}
      <div className="d-flex justify-content-center mt-2">
        <div style={{ maxWidth: '500px', width: '100%' }}>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./img/AG1.jpg" className="d-block w-100" alt="AG1" />
              </div>
              <div className="carousel-item">
                <img src="./img/AG2.jpg" className="d-block w-100" alt="AG2" />
              </div>
              <div className="carousel-item">
                <img src="./img/AG3.jpg" className="d-block w-100" alt="AG3" />
              </div>
              <div className="carousel-item">
                <img src="./img/AG4.jpg" className="d-block w-100" alt="AG4" />
              </div>
              <div className="carousel-item">
                <img src="./img/AG5.jpg" className="d-block w-100" alt="AG5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Canciones */}
      <div className="container py-5">
        <h2 className="text-center mb-4">5 canciones para conocer Atarashi Gakko</h2>
        <div className="row g-4 justify-content-center">
          
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card shadow-lg border-0 rounded-4" 
              style={{ cursor: 'pointer' }}
              onClick={() => reproducir('l446hUqQ7GY')}
              data-bs-toggle="modal" 
              data-bs-target="#playerModal"
            >
              <img src="https://img.youtube.com/vi/l446hUqQ7GY/hqdefault.jpg" className="card-img-top" alt="Otonablue" />
              <div className="card-body text-center">
                <h6 className="fw-bold">Otonablue</h6>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card shadow-lg border-0 rounded-4" 
              style={{ cursor: 'pointer' }}
              onClick={() => reproducir('vU06uPjvFGo')}
              data-bs-toggle="modal" 
              data-bs-target="#playerModal"
            >
              <img src="https://img.youtube.com/vi/vU06uPjvFGo/hqdefault.jpg" className="card-img-top" alt="Free Your Mind" />
              <div className="card-body text-center">
                <h6 className="fw-bold">Free Your Mind</h6>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card shadow-lg border-0 rounded-4" 
              style={{ cursor: 'pointer' }}
              onClick={() => reproducir('e0SZ28FP3RI')}
              data-bs-toggle="modal" 
              data-bs-target="#playerModal"
            >
              <img src="https://img.youtube.com/vi/e0SZ28FP3RI/hqdefault.jpg" className="card-img-top" alt="Suki Lie" />
              <div className="card-body text-center">
                <h6 className="fw-bold">Suki Lie</h6>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card shadow-lg border-0 rounded-4" 
              style={{ cursor: 'pointer' }}
              onClick={() => reproducir('ye5v9mOkDh8')}
              data-bs-toggle="modal" 
              data-bs-target="#playerModal"
            >
              <img src="https://img.youtube.com/vi/ye5v9mOkDh8/hqdefault.jpg" className="card-img-top" alt="恋ゲバ" />
              <div className="card-body text-center">
                <h6 className="fw-bold">恋ゲバ</h6>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div 
              className="card shadow-lg border-0 rounded-4" 
              style={{ cursor: 'pointer' }}
              onClick={() => reproducir('d3v0QqZlCes')}
              data-bs-toggle="modal" 
              data-bs-target="#playerModal"
            >
              <img src="https://img.youtube.com/vi/d3v0QqZlCes/hqdefault.jpg" className="card-img-top" alt="Change" />
              <div className="card-body text-center">
                <h6 className="fw-bold">Change</h6>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Comentarios */}
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

              {/* Lista dinámica de comentarios */}
              <div className="mt-4">
                <hr />
                <h6 className="fw-bold text-muted mb-3">Comentarios de los fans:</h6>
                <div>
                  {comentarios.length === 0 ? (
                    <p className="text-muted small text-center fst-italic">Aún no hay comentarios. ¡Comenta primero!</p>
                  ) : (
                    comentarios.map((comentario, index) => (
                      <div key={index} className="card bg-light p-3 mb-2 rounded-3 border-0 shadow-sm">
                        <p className="mb-1"><strong>{comentario.nombre}</strong> <span className="text-muted small">hace un momento</span></p>
                        <p className="mb-0 text-muted small">{comentario.texto}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal del reproductor */}
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
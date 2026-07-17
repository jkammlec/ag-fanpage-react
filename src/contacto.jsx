import React, { useState } from 'react';

export default function Contacto() {
  // 1. Creamos estados para cada campo del formulario en lugar de usar getElementById
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [genero, setGenero] = useState('');
  const [mensaje, setMensaje] = useState('');

  // 2. Estado para manejar la alerta (tipo success o danger, y el texto)
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });
  
  // Estado para saber si ya pasamos la validación final
  const [enviado, setEnviado] = useState(false);

  // Funciones de validación con tus expresiones regulares originales
  const validarNombre = (nombre) => {
    const expresionNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
    return expresionNombre.test(nombre);
  };

  const validarCorreo = (correo) => {
    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionCorreo.test(correo);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página recargue al enviar[cite: 7, 8]
    
    // Limpiamos los espacios en blanco de los extremos como en tu código original[cite: 7]
    const nombreVal = nombre.trim();
    const correoVal = correo.trim();
    const mensajeVal = mensaje.trim();
    
    // Limpiamos cualquier alerta previa[cite: 7]
    setAlerta({ mensaje: '', tipo: '' });

    // Validamos que los campos obligatorios no estén vacíos[cite: 7]
    if (nombreVal === '' || correoVal === '' || mensajeVal === '') {
      setAlerta({ mensaje: 'Por favor, completa todos los campos requeridos.', tipo: 'danger' });
      return;
    }

    // 1. Validar nombre[cite: 7]
    if (!validarNombre(nombreVal)) {
      setAlerta({ mensaje: 'El nombre solo debe contener letras y espacios (mínimo 2 caracteres).', tipo: 'danger' });
      return;
    }

    // 2. Validar correo electrónico[cite: 7]
    if (!validarCorreo(correoVal)) {
      setAlerta({ mensaje: 'Por favor, ingresa un correo electrónico válido.', tipo: 'danger' });
      return;
    }

    // 3. Validar selección de género[cite: 7]
    if (genero === '') {
      setAlerta({ mensaje: 'Por favor, selecciona una opción de género.', tipo: 'danger' });
      return;
    }

    // Si todo pasa con éxito[cite: 7]
    setAlerta({ mensaje: '¡Formulario validado con éxito! Enviando tu mensaje...', tipo: 'success' });
    
    // Opcional: Ocultar el formulario después de un par de segundos
    setTimeout(() => {
      setEnviado(true);
    }, 2000);
  };

  return (
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: '500px' }}>

        <div className="card shadow rounded-4 border-0">
          <div className="card-header bg-custom text-white text-center fw-bold">
            Formulario de contacto
          </div>

          <div className="card-body">
            <p className="text-center text-muted mb-4">
              Envíanos tus ideas o sugerencias como fan de AG!
            </p>
            
            {enviado ? (
              <div className="alert alert-success text-center">
                ¡Gracias por tu mensaje! Lo leeremos pronto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  {/* Agregamos value y onChange para conectar el input con el estado */}
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Tu nombre" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="correo@email.com" 
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required 
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Género</label>

                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="genero" 
                      id="m" 
                      value="Masculino"
                      checked={genero === 'Masculino'}
                      onChange={(e) => setGenero(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="m">Masculino</label>
                  </div>

                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="genero" 
                      id="f" 
                      value="Femenino"
                      checked={genero === 'Femenino'}
                      onChange={(e) => setGenero(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="f">Femenino</label>
                  </div>

                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="genero" 
                      id="n" 
                      value="Prefiero no decirlo"
                      checked={genero === 'Prefiero no decirlo'}
                      onChange={(e) => setGenero(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="n">Prefiero no decirlo</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Deja tu mensaje acá</label>
                  <textarea 
                    className="form-control" 
                    rows="4" 
                    placeholder="Escribe tu mensaje..."
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Mostrar alerta dinámica si existe */}
                {alerta.mensaje && (
                  <div className={`alert alert-${alerta.tipo} alert-dismissible fade show`} role="alert">
                    {alerta.mensaje}
                    <button type="button" className="btn-close" onClick={() => setAlerta({mensaje: '', tipo: ''})} aria-label="Close"></button>
                  </div>
                )}

                <div className="d-grid">
                  <button type="submit" className="btn btn-custom">
                    Enviar
                  </button>
                </div>
                
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 

import Home from './home';
import Musica from './musica';
import Contacto from './contacto';

export default function App() {
  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        
        <nav className="navbar navbar-expand-lg bg-custom text-white">
          <div className="container-fluid d-flex justify-content-center">
            <div className="d-flex align-items-center gap-4">
              <Link className="nav-link fw-bold" to="/musica">Música</Link>
              
              <Link className="navbar-brand m-0 logo-nav" to="/">
                <img src="/img/ag-logo.png" alt="Atarashi Gakko" className="logo-nav" />
              </Link>
              
              <Link className="nav-link fw-bold" to="/contacto">Contacto</Link>
            </div>
          </div>
        </nav>

        {/* RUTAS*/}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/musica" element={<Musica />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-custom text-white py-4">
          <div className="container-fluid d-flex justify-content-center">
            <div className="d-flex flex-column flex-lg-row align-items-center gap-3 text-center">
              <p className="fw-bold m-0">
                De una fan para otr@s fans
              </p>
            </div>
          </div>
          <div className="text-center mt-3 small">
            © 2026 Atarashi Gakko
          </div>
        </footer>

      </div>
    </HashRouter>
  );
}
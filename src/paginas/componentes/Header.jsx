import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <nav style={{ backgroundColor: '#880101', color: '#fff', padding: '10px', textAlign: 'left' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" className="navbar-brand">
          <img src="/logo.png" alt="Logo SJ-SPORT" style={{ width: '70px' }} />
        </a>
        <ul className="navbar-nav" style={{ display: 'flex', listStyle: 'none' }}>
          <li className="nav-item">
            <a href="/About" className="nav-link" style={{ color: '#fff', margin: '0 10px' }}>Quienes somos</a>
          </li>
          <li className="nav-item">
            <a href="/Login" className="nav-link" style={{ color: '#fff', margin: '0 10px' }}>Iniciar sesión</a>
          </li>
          <li className="nav-item">
            <a href="/Comprar" className="nav-link" style={{ color: '#fff', margin: '0 10px' }}>
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default App;


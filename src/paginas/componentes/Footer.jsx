import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#880101', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <ul className="redes-sociales">
        <a href="https://www.facebook.com/camisasS.Jsport/"><i className="fab fa-facebook-f fa-2x" style={{ color: '#fff' }}></i></a>
        <a href="https://www.instagram.com/s.jsport1/"><i className="fab fa-instagram fa-2x" style={{ color: '#fff' }}></i></a>
      </ul>
      <p>Fabrica de camisas S.J SPORT &copy;</p>
      <div>2023 S.J SPORT.</div>
    </footer>
  );
};

export default Footer;

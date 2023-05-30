import React from 'react';
import Footer from './componentes/Footer.jsx';
import Header from './componentes/Header.jsx';


function About() {
  return (
    <>
    <Header />
      <section id="quienes-somos">
        <h2>Quienes Somos</h2>
        <section style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ textAlign: 'left' }}>
            Somos una empresa especializada en la fabricación de camisería.
            Nos ubicamos en el sector textil e industrial y nos dedicamos a la confección de camisas
            formales e informales. Nuestro producto está especialmente dirigido a hombres de la ciudad de Bogotá.
          </p>
          <img src="/WhatsApp Image 2023-05-17 at 5.43.59 PM (1).jpeg" width="250" height="200" alt="Descripción de la imagen" />
        </section>
      </section>
      <hr />
      <section id="productos-servicios">
        <h2>Productos/Servicios</h2>
      

        <section style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ textAlign: 'left' }}>
            Nuestra marca se encarga de diseñar, producir, comercializar y distribuir camisas formales e informales,
            agrupadas en dos líneas de producto: camisas de manga larga y camisas de manga corta.
            Buscamos brindar a nuestros clientes una forma elegante de vestirse y hacerlos sentir que están usando
            diseños exclusivos y cómodos.
          </p>
          <img src="/2.jpeg" width="250" height="200" alt="Descripción de la imagen" />
        </section>
      </section>

      <hr />
      <section id="Encuentranos" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Encuéntranos</h2>
        <img src="/5.jpg" style={{ maxWidth: '100%', height: 'auto' }} />
      </section>

      <hr />
      <section id="Tarjeta" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Tarjeta</h2>
        <img src="/tarjeta.jpeg" style={{ maxWidth: '100%', height: 'auto' }} />
      </section>
      <Footer />
    </>
  );
}

export default About;

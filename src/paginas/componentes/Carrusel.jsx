import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import estilos from './estilos/estilos.css';

class Carrusel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  goToSlide = (index) => {
    this.setState({
      currentIndex: index
    });
  };

  render() {
    const images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];
    const { currentIndex } = this.state;

    return (
      <div className="carousel-container">
        <div className="carousel">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            style={{ width: '500px', height: '300px' }} // Cambia los valores según el tamaño deseado
          />
        </div>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => this.goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Carrusel;


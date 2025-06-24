import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Asegúrate de que estos CSS estén importados
import "slick-carousel/slick/slick-theme.css"; // En un archivo de alto nivel como App.js o index.js

import cerdonImg from '../img/cerdon.jpeg';
import clinicaImg from '../img/clinica.jpeg';
import codiam from '../img/codiam.jpeg';
import dialcaImfg from '../img/dialca.PNG';
import serviciosImg from '../img/serviciog.PNG';

function Carrusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    // Hemos eliminado maxWidth y ajustado el padding
    <div className="carousel-container" style={{ width: '100%', margin: '0 auto', padding: '0px' }}>
      <Slider {...settings}>
        <div>
          <img
            src={cerdonImg}
            alt="Proyecto Cerdon"
            // ¡Nuevas propiedades para el tamaño uniforme!
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src={clinicaImg}
            alt="Proyecto Clínica"
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src={codiam}
            alt="Proyecto Codiam"
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src={dialcaImfg}
            alt="Proyecto Dialca"
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src={serviciosImg}
            alt="Proyecto Servicios"
            style={{ width: '100%', height: '250px', objectFit: 'cover' }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carrusel;
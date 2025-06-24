import "./App.css";
import React from "react";
import prostartImg from "./img/prostart.png"; // Importa la imagen
import Carrusel from "./components/Carrusel"; // Importa el CSS del carrusel
import Img from "./components/Imagen"; // Importa el componente Img
// In your App.js or index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Img
          src={prostartImg} // Usa la imagen importada
          alt="Prostart Logo"
          className="prostart-logo img"
          width="150px"
          height="150px"
          marginLeft="20px"
          marginTop=""
        />
        {/* menutop con el mensaje */}
        <div
          className="menutop"
          style={{ color: "#ffff", fontSize: "20px", fontWeight: "bold" }}
        >
          <p style={{ fontStyle: "italic", marginLeft: "250px" }}>
            Prostart brindando soluciones de software a la medida
          </p>
        </div>
      </div>
      {/* Contenido Principal: Mensaje diciendo lo que hace la empresa */}
      <div className="main-content">
        <h1>Bienvenido a Prostart</h1>
        <p>
          En Prostart, nos especializamos en el desarrollo de software a la
          medida, ofreciendo soluciones innovadoras y personalizadas para
          satisfacer las necesidades de nuestros clientes.
        </p>
        <p>
          Nuestro equipo de expertos está comprometido en brindar un servicio
          excepcional, asegurando que cada proyecto se entregue a tiempo y con
          la más alta calidad.
        </p>
      </div>
      {/* Carrusel de Imagenes */}
      <div className="carousel">
        <h2>Proyectos Realizados:</h2>
        <Carrusel />
      </div>
      {/* Nuestro Sitio de Trabajo */}
      <div className="work-site">
        <h2>Nuestro Sitio de Trabajo</h2>
        <p>
          En Prostart, trabajamos en un ambiente colaborativo y dinámico, donde
          cada miembro del equipo aporta su experiencia y creatividad para
          desarrollar soluciones efectivas.
        </p>
        <p>
          Nuestro sitio de trabajo está diseñado para fomentar la innovación y
          la productividad, asegurando que podamos cumplir con los plazos y
          expectativas de nuestros clientes.
        </p>
        {/* Imagenes de nuestro sitio de trabajo */}
      <div className="work-site-sections-wrapper"> {/* Contenedor general si lo necesitas */}

  {/* Sección 1: Texto a la Izquierda, Imagen a la Derecha */}
  <div style={{
    display: 'flex',            // Habilita Flexbox
    alignItems: 'center',       // Centra verticalmente los elementos (texto e imagen)
    gap: '40px',                // Espacio entre el texto y la imagen
    padding: '60px 20px',       // Padding para la sección
    maxWidth: '1200px',         // Limita el ancho máximo para legibilidad
    margin: '0 auto',           // Centra la sección en la página
    flexWrap: 'wrap',           // Permite que los elementos se apilen en pantallas pequeñas
    justifyContent: 'center'    // Centra el contenido si se envuelve en pantallas pequeñas
  }}>
    {/* Contenido de Texto (Izquierda) */}
    <div style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}> {/* flex:1 para que ocupe espacio, minWidth para responsividad */}
      <h2>Nuestro Sitio de Trabajo</h2>
      <p style={{ lineHeight: '1.6', fontSize: '1.1em', color: '#555' }}>
        En Prostart, trabajamos en un ambiente colaborativo y dinámico, donde
        cada miembro del equipo aporta su experiencia y creatividad para
        desarrollar soluciones efectivas.
      </p>
    </div>

    {/* Contenido de Imagen (Derecha) */}
    <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
      <Img
        src="https://via.placeholder.com/500x350" // **¡Reemplaza con la URL/import de tu primera imagen!**
        alt="Imagen del sitio de trabajo 1"
        className="work-image"
        // Estilos para la imagen, para que sea responsiva y bonita
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
      />
    </div>
  </div>

  {/* Sección 2: Imagen a la Izquierda, Texto a la Derecha (Viceversa) */}
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    flexDirection: 'row-reverse', // ¡Aquí está la magia para invertir el orden!
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {/* Contenido de Texto (Izquierda en esta sección) */}
    <div style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
      <p style={{ lineHeight: '1.6', fontSize: '1.1em', color: '#555' }}>
        Nuestro sitio de trabajo está diseñado para fomentar la innovación y
        la productividad, asegurando que podamos cumplir con los plazos y
        expectativas de nuestros clientes.
      </p>
    </div>
    {/* Contenido de Imagen (Izquierda en esta sección) */}
    <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
      <Img
        src="https://via.placeholder.com/500x350" // **¡Reemplaza con la URL/import de tu segunda imagen!**
        alt="Otra imagen del sitio de trabajo 2"
        className="work-image"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
      />
    </div>

    
  </div>

</div>
      </div>
    </div>
  );
}

export default App;

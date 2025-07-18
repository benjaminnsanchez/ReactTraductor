function About() {
  return (
    <section className="about-container">
      <h2>📘 Sobre la aplicación</h2>
      <ul className="about-details">
        <li><strong> Proyecto:</strong> React Traductor</li>
        <li><strong> Autor:</strong> Benjamin Sanchez</li>
        <li><strong> Tecnologías:</strong> React y JavaScript</li>
        <li><strong> Materia:</strong> Proyecto y diseño de software para plataformas móviles</li>
      </ul>
      <h3> Descripción</h3>
      <p>
        React Traductor es una aplicación que traduce texto del español a varios idiomas seleccionados. Utiliza la API de Google para procesar y devolver traducciones. Además, incorpora conceptos vistos en clase como <code>useState</code> para manejar estados, <code>useEffect</code> para realizar peticiones a la API, y <code>useParams</code> para rutas dinámicas. También cuenta con un sistema de navegación basado en rutas.
      </p>
    </section>
  );
}

export default About;

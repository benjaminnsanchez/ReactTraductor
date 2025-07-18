function About(){
    return(
        <>
        <div className="cont-about">
            <h2>Sobre la aplicación:</h2>
            <div>
                <ul>
                    <li>Nombre del proyecto: React Traductor</li>
                    <li>Autor: Benjamin Sanchez</li>
                    <li>Tecnologías: React y JavaScript</li>
                    <li>Materia: Proyecto y diseño de software para plataformas móviles</li>
                </ul>
                <h3>Descripción:</h3>
                <p>React Traductor es una aplicación para traducir texto del español a otros idiomas de nuestra selección, utiliza una api de google que se encarga de recibir el texto y devolver la traducción del mismo, tambien incluye temas vistos en clase como el uso de hooks como useState para el manejo de estados,useEffect para el fetch a la api  o useParams para el manejo de rutas dinámicas ademas de poseer un sistema de rutas</p>
            </div>
        </div>

        </>
    )
}
export default About
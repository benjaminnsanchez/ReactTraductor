import { useState } from "react"
import { useParams } from 'react-router-dom';

function  Ingles(){
const [textOr,setTextOr]=useState('')
const [idioma,setIdioma]=useState('EN')
const [idiomaOrigen,setIdiomaOrigen]=useState('ES')
const [traduccion,setTtraduccion]=useState('')
const [idiomaTexto ,setIdiomaTexto]=useState("Español")
const [idiomaTextoTraduciodo ,setIdiomaTextoTraducido]=useState("Ingles")
let { Idioma } = useParams();
const handleCambiarIdioma =()=>{
    if(idioma===Idioma && idiomaTextoTraduciodo==='Ingles'){
        setIdioma('ES')
        setIdiomaTextoTraducido('Español')
        setIdiomaOrigen(Idioma)
        setIdiomaTexto('Ingles')
    }else if(idioma==='ES' && idiomaTextoTraduciodo==='Español'){
        setIdioma(Idioma)
        setIdiomaTextoTraducido('Ingles')
        setIdiomaOrigen('ES')
        setIdiomaTexto('Español')
    }



}
const traducirTexto = async () => {
  try {
    const response = await fetch('https://react-traductor-back-1.onrender.com/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idiomaOrigen,text: textOr, idioma }),
    });

    const data = await response.json();
    console.log('Respuesta del backend:', data);

    if (data.translations && data.translations.length > 0) {
      setTtraduccion(data.translations[0].text);
    } else {
      setTtraduccion('Error: No se recibió traducción.');
    }
  } catch (error) {
    console.error('Error al traducir:', error);
    setTtraduccion('Error en la traducción.');
  }
};



const handleChange= (event)=>{
    setTextOr(event.target.value); 
}

  
    return(
        <>
        <div>

  
        <div className="cont-inputs">
            <div className="input">
                        <div className="input-content">
                <div className="cont-text">
                    <p>Original</p>
                    <p>{idiomaTexto}</p>
                </div>
                <textarea maxLength={300} placeholder="Ingrese su texto aqui..." id="contenido" type="text" value={textOr} onChange={handleChange} ></textarea>
               
            </div>
            <div className="input-content">
                <div className="cont-text">
                    <p >Traduccion</p>
                    <p>{idiomaTextoTraduciodo}</p>
                </div>
                <textarea id="contenido" value={traduccion} type="text" readOnly ></textarea>
                
            </div>       
            </div>
            <div className="buttons">
                      <i onClick={handleCambiarIdioma} className="fa-solid fa-repeat"></i> 
                <button onClick={traducirTexto}>traducir</button>   
             
             
            </div>


        </div>

      </div>

        </>
    )
}
export default Ingles
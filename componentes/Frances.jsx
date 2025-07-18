import { useState } from "react"
import { useParams } from 'react-router-dom';

function  Frances(){
const [textOr,setTextOr]=useState('')
const [idioma,setIdioma]=useState('FR')
const [idiomaOrigen,setIdiomaOrigen]=useState('ES')
const [traduccion,setTtraduccion]=useState('')
const [idiomaTexto ,setIdiomaTexto]=useState("Español")
const [idiomaTextoTraduciodo ,setIdiomaTextoTraducido]=useState("Frances")
let { Idioma } = useParams();
const handleCambiarIdioma =()=>{
    if(idioma===Idioma && idiomaTextoTraduciodo==='Frances'){
        setIdioma('ES')
        setIdiomaTextoTraducido('Español')
        setIdiomaOrigen(Idioma)
        setIdiomaTexto('Frances')
    }else if(idioma==='ES' && idiomaTextoTraduciodo==='Español'){
        setIdioma(Idioma)
        setIdiomaTextoTraducido('Frances')
        setIdiomaOrigen('ES')
        setIdiomaTexto('Español')
    }



}
const traducirTexto = async () => {
  try {
    const response = await fetch('http://localhost:3002/translate', {
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
export default Frances
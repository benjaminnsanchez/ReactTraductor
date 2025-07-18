import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
const app = express()
const puerto = 3002
app.use(cors())
app.use(express.json());
app.post('/translate', async (req, res) => {
  const { idiomaOrigen,text, idioma } = req.body;
    console.log('Idioma Origen:', idiomaOrigen);
  console.log('Texto recibido:', text);
  console.log('Idioma destino:', idioma);

  if (!text || !idioma) {
    return res.status(400).json({ error: 'Faltan parámetros: texto o idioma' });
  }

  const params = new URLSearchParams();
  params.append('auth_key', '61cbcf00-1106-4840-822c-457a7b6e600b:fx');
  params.append('source_lang', idiomaOrigen);
  params.append('text', text);
  params.append('target_lang', idioma);

  try {
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await response.json();
    console.log('Respuesta de DeepL:', data);
    res.json(data);
  } catch (error) {
    console.error('Error en el backend:', error);
    res.status(500).json({ error: 'Error al traducir' });
  }
});

app.listen(puerto,()=>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`)
})
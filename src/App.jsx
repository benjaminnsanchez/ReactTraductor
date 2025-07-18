import { BrowserRouter,Route,Routes,Link } from 'react-router'
import './App.css'
import Layout from '../componentes/Layout'
import Header from './sections/header'
import About from '../componentes/about'
import Ingles from '../componentes/Ingles'
import Frances from '../componentes/Frances'
import Portugues from '../componentes/Portugues'
function App() {

  return (
    <BrowserRouter>

 <Header></Header> 
      <Routes>
        <Route path='/'element={<About/>}></Route>
        <Route path='/About'element={<About/>}></Route> 
          <Route path='/Ingles/:Idioma'element={<Ingles/>}></Route> 
            <Route path='/Portugues/:Idioma'element={<Portugues/>}></Route> 
              <Route path='/Frances/:Idioma'element={<Frances/>}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App

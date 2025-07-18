import {Link } from 'react-router'
function Header() {

  return (
    <>
    <header className='header'>
        <i className="fa-solid fa-language"></i>
        <h1>React Traductor</h1>
        <nav>
            <Link className="link" to={"/About"}>About</Link>  
            <Link className="link" to={"/Ingles/EN"}>Ingles</Link>  
            <Link className="link" to={"/Portugues/PT"}>Portugues</Link>  
            <Link className="link" to={"/Frances/FR"}>Frances</Link>  

        </nav>
    </header>
    </>

  )
}

export default Header

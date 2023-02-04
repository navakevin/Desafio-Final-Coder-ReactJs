import React from 'react'
import './styles.css'
import NavWidget from '../NavWidget/NavWidget';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <Link className="logo"  to={"/"}>Mining Store</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navSupp"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navSupp">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="item">
          <Link className="item"  to={"/"}>Inicio</Link>
          </li>
          <li className="item" >
            <a className="item" href="/#">Productos</a>
          </li>

          <li className="item">
            <a className="item" href="/#">Contacto</a>
          </li>

        </ul>


        <Link to={"/cart"} className="cart"><NavWidget></NavWidget></Link>

      </div>
    </div>

  </nav>


  );
}

export default NavBar
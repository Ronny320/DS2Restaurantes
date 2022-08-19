import React, { useState } from 'react'
import Logo from '../assets/lunchlogo4.png';
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder'; 

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false) 

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Inicio </Link>
          <Link to="/menu"> menu </Link>
          <Link to="/about"> information </Link>
          <Link to="/clientes"> Clientes </Link>
          <Link to="/provedores"> Provedores </Link>
          <Link to="/admin"> Administracion </Link>
          <Link to="/contacto"> Contacto </Link>
          <Link to="/seguridad"> Seguridad </Link>
          <Link to="/provedores"> Provedores </Link>
          <Link to="/reportes"> Reportes </Link>
          <Link to="/Ayuda"> Ayuda </Link>

        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Inicio </Link>
        <Link to="/menu"> menu </Link>
        <Link to="/about"> information </Link>
        <Link to="/clientes"> Clientes </Link>
        <Link to="/provedores"> Provedores </Link>
        <Link to="/admin"> Administracion </Link>
        <Link to="/contacto"> Contacto </Link>  
        <Link to="/seguridad"> Seguridad </Link>
        <Link to="/provedores"> Provedores </Link>
        <Link to="/reportes"> Reportes </Link>
        <Link to="/Ayuda"> Ayuda </Link>


        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;


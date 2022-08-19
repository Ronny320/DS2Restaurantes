import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/homelunch.jpg"
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${ BannerImage })` }}>
      <div className="headerContainer" >
        <h1> Tiquicia Restaurant </h1>
        <p>El mejor sabor del pais</p>
        <Link to= "/Contacto">
          <button> Ordene Ahora</button>
        </Link>
      </div>
    </div>
  );
}

export default Home
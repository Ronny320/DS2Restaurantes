import React from 'react'
import ContactoImage from "../assets/contacto.jpg"
import "../styles/Contacto.css"

function Contacto() {
  return (
    <div className="contacto">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactoImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Reserva</h1>

        <form id="contacto-form" method="POST">
          <label htmlfor="name"> Nombre completo</label>
          <input name="name" placeholder="Ingrese el Nombre" type="text" />
          <label htmlfor="email"> Correo</label>
          <input name="email" placeholder="Ingrese el correo" type="email" />
          <label htmlfor="message"> Mensaje</label>
          <textarea
            rows="6"
            placeholder="Ingresar mensaje"
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto
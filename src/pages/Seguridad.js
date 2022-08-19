import React from 'react'
import { SeguridadList } from "../helpers/SeguridadList"; //De esta forma se toma una variable de otro JS
import SeguridadItem from '../components/SeguridadItem';
import "../styles/Seguridad.css"

function Seguridad() {
  return (
    <div className="seguridad">
      <h1 className="seguridadTitle">Seguridad</h1>
      <div className="seguridadList">
        {SeguridadList.map((seguridadItem, key) => {
          return (
            <SeguridadItem
              key={key}
              image={seguridadItem.image}
              name={seguridadItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Seguridad
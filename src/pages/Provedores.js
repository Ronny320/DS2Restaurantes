import React from 'react'
import { ProvedoresList } from "../helpers/ProvedoresList"; //De esta forma se toma una variable de otro JS
import ProvedoresItem from '../components/ProvedoresItem';
import "../styles/Provedores.css"

function Provedores() {
  return (
    <div className="provedores">
      <h1 className="provedoresTitle">Proveedores</h1>
      <div className="provedoresList">
        {ProvedoresList.map((provedoresItem, key) => {
          return (
            <ProvedoresItem
              key={key}
              image={provedoresItem.image}
              name={provedoresItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Provedores
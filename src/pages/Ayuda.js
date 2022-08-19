import React from 'react'
import { AyudaList } from "../helpers/AyudaList"; //De esta forma se toma una variable de otro JS
import AyudaItem from '../components/AyudaItem';
import "../styles/Ayuda.css"

function Ayuda() {
  return (
    <div className="ayuda">
      <h1 className="ayudaTitle">Seguridad</h1>
      <div className="ayudaList">
        {AyudaList.map((ayudaItem, key) => {
          return (
            <AyudaItem
              key={key}
              image={ayudaItem.image}
              name={ayudaItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Ayuda
import React from 'react'
import { ReportesList } from "../helpers/ReportesList"; //De esta forma se toma una variable de otro JS
import ReportesItem from '../components/ReportesItem';
import "../styles/Reportes.css"

function Reportes() {
  return (
    <div className="reportes">
      <h1 className="reportesTitle">Reportes</h1>
      <div className="reportesList">
        {ReportesList.map((reportesItem, key) => {
          return (
            <ReportesItem
              key={key}
              image={reportesItem.image}
              name={reportesItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Reportes
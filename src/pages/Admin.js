import React from 'react'
import { AdminList } from "../helpers/AdminList"; //De esta forma se toma una variable de otro JS
import AdminItem from '../components/AdminItem';
import "../styles/Admin.css"

function Admin() {
  return (
    <div className="admin">
      <h1 className="adminTitle">Administracion</h1>
      <div className="adminList">
        {AdminList.map((adminItem, key) => {
          return (
            <AdminItem
              key={key}
              image={adminItem.image}
              name={adminItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Admin
import React from 'react'
import { MenuList } from "../helpers/MenuList"; //De esta forma se toma una variable de otro JS
import MenuItem from '../components/MenuItem';
import "../styles/Menu.css"

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Nuestro menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu
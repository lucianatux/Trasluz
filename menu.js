import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/observaciones">Observaciones</Link>
      <Link to="/memoria">Memoria</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/respuesta">Respuesta</Link>
    </div>
  );
};

export default Menu;

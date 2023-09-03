const { useState } = React;

const PantallaObservaciones = () => {
  return <div>Pantalla de Observaciones</div>;
};

const PantallaMemoria = () => {
  return <div>Pantalla de Memoria</div>;
};

const PantallaContacto = () => {
  return <div>Pantalla de Contacto</div>;
};

const PantallaRespuesta = () => {
  return <div>Pantalla de Respuesta</div>;
};

const Menu = () => {
  return (
    <div className="menu">
      <a href="#observaciones">Observaciones</a>
      <a href="#memoria">Memoria</a>
      <a href="#contacto">Contacto</a>
      <a href="#respuesta">Respuesta</a>
    </div>
  );
};

ReactDOM.render(<Menu />, document.getElementById('menu'));

// También puedes hacer lo mismo con los otros componentes, renderizándolos en sus respectivos elementos.

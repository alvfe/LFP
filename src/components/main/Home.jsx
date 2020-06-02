import React from "react";

function Home() {
  return (
    <div className="row">
      <div className="col-12 text-left">
        <h2 id="prueba-t-cnica-lfp">Prueba técnica LFP</h2>
        <p>Autor: Rafael Álvarez</p>
        <h3 id="instalaci-n">Instalación</h3>
        <p>
          Un vez descargado el .zip del proyecto debes descomprimir el
          directorio e ingresar a el desde el terminal. Se deben instalar los
          paquetes de NPM antes de ejecutar el proyecto con los siguientes
          comandos.
        </p>
        <pre>
          <code>
            <span>cd</span> demo npm install
          </code>
        </pre>
        <p>Una vez instalados ejecuta el comando:</p>
        <pre>
          <code>
            <span>npm</span> start
          </code>
        </pre>
        <h3 id="paquetes-y-frameworks-principales">
          Paquetes y frameworks principales
        </h3>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Redux</li>
          <li>Redux Thunk</li>
          <li>Eslint</li>
          <li>Prettier</li>
        </ul>
        <h3 id="paquetes-adicionales">Paquetes adicionales</h3>
        <ul>
          <li>Bootstrap / react-bootstrap</li>
          <li>Axios</li>
        </ul>
        <h3 id="sobre-el-proyecto">Sobre el proyecto</h3>
        <p>
          Se ha realizado la impletmentación de una API de usuarios utilizando
          React. Las funciones disponibles son las siguientes:
        </p>
        <ul>
          <li>Consulta de usuarios.</li>
          <li>Consulta de información de cada usuario.</li>
          <li>Editar la información del usuario.</li>
          <li>
            Eliminar un usuario y el manejo de sesión en el cliente ( usuario,
            contraseña y token de sesión).
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

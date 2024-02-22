// import React, { useState } from 'react';
import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/contador';

function App() {
  //Declarar nuevo estado de contador
  //const  [contador, setContador]= useState(0);

  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis Cantantes de reggaeton favoritos son</h1>
      <Perfil 
        nombre='Don Omar'
        pais='Puerto RICO'
        imagen='don'
        cargo='Compositor y cantante'
        empresa=''
        perfil='Cantante y compositor del genero "Reggaeton"'
        instagran='https://www.instagram.com/donomar?'
        youtube='https://www.youtube.com/@OficialDonOmar'
        twitter='https://twitter.com/DONOMAR'
      />
      <Perfil 
        nombre='Daddy Yankee'
        pais='Puerto RICO'
        imagen='daddy'
        cargo='Compositor y cantante'
        empresa=''
        perfil='Cantante y compositor del genero "Reggaeton"'
        instagran='https://instagram.com/daddyyankee'
        youtube='https://www.youtube.com/@DaddyYankee'
        twitter='https://twitter.com/daddy_yankee'
      />
      <Perfil 
        nombre='Arcangel'
        pais='Puerto RICO'
        imagen='arcangel'
        cargo='Compositor y cantante'
        empresa=''
        perfil='Cantante y compositor del genero "Reggaeton"'
        instagran='https://instagram.com/arcangel'
        youtube='https://www.youtube.com/@Arcangel'
        twitter='https://twitter.com/arcangelprrra'
      />
      <Contador />

     </div>
    </div>
  );
}

export default App;
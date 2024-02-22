import React, { useState } from 'react';
import '../hojas-de-estilo/Perfil.css';
import Contador from './contador';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.jpg`)}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
               <strong>{props.nombre}</strong> en {props.pais}
            </p>        
        <p className='cargo-perfil'>
            {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>"{props.perfil}" </p>
        </div>
        { /* Botones para seguir en redes sociales */}
        <button className='button' onClick={() => window.open(props.instagran, '_blank')}>
        Seguir en Instagran
        <Contador />
        </button>
        <button className='button' onClick={() => window.open(props.youtube, '_blank')}>
        Seguir en youtube
        <Contador />
        </button>
        <button className='button' onClick={() => window.open(props.twitter, '_blank')}>
        Seguir en X (anteriormente twitter)
        <Contador />
        </button>
    </div>
    );
}
export default Perfil;
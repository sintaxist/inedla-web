import React from 'react';
import {Content} from '../utils/UseElements';

const Admisiones = () => {
  return (
    <>
      <img src="https://www.xochimaco.com/img-inedla/banner-admisiones.png" alt="banner" />
      <Content>
      <h1 className='blue-title-left'>Admisiones</h1>
      <p>A día de hoy, se busca gente que este dentro de el area de Podología. Deseamos ser parte de tu desarrollo dandote más herramientas para que continúes superándote.</p>
      <p>Nuestro proceso de admisión tiene como objetivo conocerte y ver las habilidades que desarrollaste durante tu trancurso en la preparatoria.</p>
      <h2 className='green-title-left'>Pasos a seguir</h2>
      <div>

      </div>
      <h2 className='green-title-left'>Preguntas frecuenteszz</h2>
      <div>
        <strong>Si aún tienes dudas comunicate por cualquiera de estos medios</strong>
        <span>Correo electrónico: correo@mail.com</span>
        <span>Teléfono: 999 999 9099 Ext. 9999, 0000, 9999 y 0000z</span>
      </div>
      {/* https://mui.com/components/accordion/ */}
    </Content>
    </>
  );
};

export default Admisiones;
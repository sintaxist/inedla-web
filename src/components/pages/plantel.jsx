import React from 'react';
import {Content} from '../utils/UseElements';
import Iframe from '../utils/iframe';
import GalleryPlantel from '../Gallery/GalleryPlantel';

const Plantel = () => {
  return (
    <Content className='widthBreak marginCorrection'>
      <h1 className='blue-title firstTitle'>Plantel</h1>
      <p>Estudia en un plantel con la mejor tecnología e instalaciones adecuadas para la práctica de la Podología, contamos con el equipo y materiales necesarios para que pongas en práctica lo aprendido en los cursos.</p>
      <h2 className='margin30 titleBold'>Galería</h2>
      <GalleryPlantel/>
      <h2 className='margin30 titleBold'>Nos ubicamos en...</h2>
      <p>Av. Miguel Hidalgo 800 Ote, Segundo de Cobián Centro, Torreón, Coahuila</p>
      <Iframe/>
    </Content>
  );
};

export default Plantel;
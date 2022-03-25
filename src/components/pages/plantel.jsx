import React from 'react';
import {Content} from '../utils/UseElements';
import '../../styles/grid.scss'
import Iframe from '../utils/iframe';

const Plantel = () => {
  const url = 'https://inedla.mx/sitio-revision/img-web/';
  return (
    <Content className='widthBreak marginCorrection'>
      <h1 className='blue-title firstTitle'>Plantel</h1>
      <p>Estudia en un plantel con la mejor tecnología e instalaciones adecuadas para la práctica de la Podología, contamos con el equipo y materiales necesarios para que pongas en práctica lo aprendido en los cursos.</p>
      <h2 className='margin30 titleBold'>Galería</h2>
      <div className='galleryGrid margin60'>
        <img className='imgItem item1' src={url + 'DSC_1977.jpg'} alt="img1" />
        <img className='imgItem item2' src={url + 'DSC_1988.jpg'} alt="img2" />
        <img className='imgItem item3' src={url + 'DSC_1601.jpg'} alt="img3" />
        <img className='imgItem item4' src={url + 'DSC_1581.jpg'} alt="img4" />
        <img className='imgItem item5' src={url + 'DSC_2006.jpg'} alt="img5" />
        <img className='imgItem item6' src={url + 'DSC_1974.jpg'} alt="img6" />
        <img className='imgItem item7' src={url + 'DSC_2011.jpg'} alt="img7" />
        <img className='imgItem item8' src={url + 'DSC_1730.jpg'} alt="img8" />
        <img className='imgItem item9' src={url + 'DSC_1532.jpg'} alt="img9" />
        <img className='imgItem item10' src={url + 'DSC_1576.jpg'} alt="img10" />
        <img className='imgItem item11' src={url + 'DSC_1603.jpg'} alt="img11" />
        <img className='imgItem item12' src={url + 'DSC_1992.jpg'} alt="img12" />
        <img className='imgItem item13' src={url + 'DSC_2146.jpg'} alt="img13" />
        <img className='imgItem item14' src={url + 'DSC_1559.jpg'} alt="img14" />
        <img className='imgItem item15' src={url + 'DSC_2146.jpg'} alt="img15" />
      </div>
      <h2 className='margin30 titleBold'>Nos ubicamos en...</h2>
      <p>Av. Miguel Hidalgo 800 Ote, Segundo de Cobián Centro, Torreón, Coahuila</p>
      <Iframe/>
    </Content>
  );
};

export default Plantel;
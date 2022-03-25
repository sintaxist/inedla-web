import React from 'react';
// import Testimonials from '../carousel/TestiMonials';
import {
  Button, 
  Content, 
  FlechaButton, 
  FlexRow, 
  // Grid2Items,
} from '../utils/UseElements';
// import { NoticiasDataHome } from '../../data/NoticiasData';
// import NoticiaCard from '../utils/noticiaCard';

import styles from '../../styles/Home.module.scss';
import Docentes from '../../images/docentes.svg';
import XP from '../../images/experiencia.svg';
import Clinica from '../../images/clinica.svg';
import Form from '../utils/form';

const Home = () => {
  const url = 'https://inedla.mx/sitio-revision/img-web/';
  return (
    <>
      <div className={styles.bannerHome}>
        <div className={styles.copyButton}>
          <h1>Avanza a paso firme en tu vida profesional</h1>
          <Button className='whiteButton' to='/estudia-podologia'>
            Conoce más
            <FlechaButton/>
          </Button>
        </div>
      </div>
      <Content className={styles.numeralia}>
        <div className='widthBreak'>
          <div className='white-back-shadow'>
            <h3>Conviértete en profesional de la rama médica en 3 años, ¡Certificate en podología y cumple tus metas!</h3>
            <Button className='blueButton' to='plan-de-estudios'>
              Seguir Leyendo
              <FlechaButton/>
            </Button>
          </div>
          <FlexRow  className={styles.datos}>
            <div className={styles.dato + ' bgGradient'}>
                <img src={Docentes} alt="docentes"/>
                <div>
                  <h3>100%</h3>
                  <p>Nuestro equipo docente está integrado por médicos y especialistas con práctica clínica vigente.</p>
                </div>
            </div>
            <div className={styles.dato + ' bgGradient'}>
                <img src={XP} alt="docentes"/>
                <div>
                  <h3>55</h3>
                  <p>Años de experiencia en el área de Podología</p>
                </div>
            </div>
            <div className={styles.dato + ' bgGradient'}>
                <img src={Clinica} alt="docentes"/>
                <div>
                  <h3>100%</h3>
                  <p>De práctica clínica en nuestros plan de estudios</p>
                </div>
            </div>
          </FlexRow>
        </div>
      </Content>
      {/* <Testimonials/> */}
      <Content className='widthBreak'>
        <h2 className='blue-title bottom30'>galería</h2>
        <div className={styles.galleryHome + ' margin60'}>
          <img className='imgItem item1' src={url+'DSC_1823.jpg'} alt="img1" />
          <img className='imgItem item2' src={url+'DSC_1709.jpg'} alt="img2" />
          <img className='imgItem item3' src={url+'DSC_1679.jpg'} alt="img3" />
          <img className='imgItem item4' src={url+'DSC_2024.jpg'} alt="img4" />
          <img className='imgItem item5' src={url+'DSC_1905.jpg'} alt="img5" />
        </div>
          <Button className='blueButton' to='/plantel'>
            Ver más
            <FlechaButton/>
          </Button>
      </Content>
      {/* <Content className='bgGradient'>
        <div className='widthBreak'>
          <h2 className='white-title bottom30'>Noticias</h2>
          <Grid2Items className='padding30'>
            {
              NoticiasDataHome.map((noticia) =>{
                return(
                  <NoticiaCard key={noticia.id} noticia={noticia} />
                )
              })
            }
          </Grid2Items>
          <Button className='whiteButton' to='/noticias'>
            Ver más
            <FlechaButton/>
          </Button>
        </div>
      </Content> */}
      <Content className='widthBreak'>
        <Form/>
      </Content>
    </>
  );
};

export default Home;
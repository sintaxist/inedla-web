import React from 'react';
import {Content, FlexRow, Grid2Items} from '../utils/UseElements';
import styles from '../../styles/inedlaPage.module.scss';
import card from  '../../styles/cardImgCopy.module.scss'
import Points from '../carousel/Points';
import { Button, FlechaButton } from '../utils/UseElements';

const conoceInedla = () => {
  return (
    <>
    <Content className='widthBreak'>
      <h1 className='blue-title fixWidth firstTitle'>¿por qué estudiar en <strong>inedla</strong>?</h1>
      <FlexRow className={styles.first + ' breakWidth firstmargin30'}>
        <img src="https://xochimaco.com/img-inedla/DSC_1869%201.png" alt="img" />
        <p>Somos un proyecto familiar iniciado hace más de 15 años con la finalidad de construir un legado para la sociedad lagunera que durante más de 50 años apoyó y reconoció la labor de los podólogos Juan Manuel García Macías y su esposa María Estela Álvarez Camacho en la ciudad de Torreón, Coahuila, fundadores de GAMA Podología Médica.</p>
      </FlexRow>
      <Grid2Items className={styles.second + ' margin60'}>
        <div className=' white-back-shadow'>
          <h4>Misión</h4>
          <p>Formar profesionales competentes para la vida, capaces de innovar y transformar su entorno social.</p>
        </div>
        <div className='white-back-shadow item-b'>
          <h4>Visión</h4>
          <p>Nuestra institución es reconocida por su alto compromiso social y ético, así como un espíritu de servicio, una cultura que favorece la innovación en diversas áreas del conocimiento, que le permiten posicionarse en el ámbito estatal, nacional e internacional.</p>
        </div>
      </Grid2Items>
      <h2 className='blue-title bottom30'>¿qué nos  distingue?</h2>
      <Points/>
      <h3 className='blue-title-left fixWidth left'>valores institucionales</h3>
      <div className='margin60'>
        <div className={card.cardValor + ' bottom30'}>
          <img src="https://xochimaco.com/img-inedla/DSC_2082.png" alt="img" />
          <div className={card.info}>
            <h3>Respeto</h3>
            <p>Sabemos reconocer, apreciar y valorar las cualiddes del prójiimoy sus derechos</p>
          </div>
        </div>
        <div className={card.cardValor + ' bottom30'}>
          <img src="https://xochimaco.com/img-inedla/DSC_2082.png" alt="img" />
          <div className={card.info}>
            <h3>Respeto</h3>
            <p>Sabemos reconocer, apreciar y valorar las cualiddes del prójiimoy sus derechos</p>
          </div>
        </div>
        <div className={card.cardValor + ' bottom30'}>
          <img src="https://xochimaco.com/img-inedla/DSC_2082.png" alt="img" />
          <div className={card.info}>
            <h3>Respeto</h3>
            <p>Sabemos reconocer, apreciar y valorar las cualiddes del prójiimoy sus derechos</p>
          </div>
        </div>
        <div className={card.cardValor + ' bottom30'}>
          <img src="https://xochimaco.com/img-inedla/DSC_2082.png" alt="img" />
          <div className={card.info}>
            <h3>Respeto</h3>
            <p>Sabemos reconocer, apreciar y valorar las cualiddes del prójiimoy sus derechos</p>
          </div>
        </div>
      </div>
      <h3 className='blue-title-left fixWidth left'>nuestro <strong>plan de estudios</strong></h3>
      <div className='margin60'>
        <p className='bottom30'>Nuestro plan de estudios incluye áreas como biomecánica, podopediatría, podolgeriatría, podología deportiva que permiten una atención integral de los padecimientos del pie.  También incluimos materias como comunicación y calidad en la práctica podológica y el emprendimiento de un consultorio podológico para fortalecer la gestión de un consultorio propio de nuestros egresados.</p>
        <strong className='bottom30'>Tenemos autorización de nuestro plan de estudios por prate de la Secretaría de Salud (CEFRHS) y la Secretaría de Educación del Estado de Coahuila (RVOE)</strong>
        <strong className='bottom30'>El TSU en Podología te da la posibilidad de tener tu propio consultorio en poco tiempo</strong>
        <Button className='blueButton buttonLeft' to='plan-de-estudios'>
          Conoce más
          <FlechaButton/>
        </Button>
      </div>
      <h3 className='blue-title-left bottom60'>campo laboral</h3>
      <FlexRow className={styles.third}>
        <div>
          <strong className='bottom30'>A diferencia de otras carreras técnicas y de nivel superior, la Podología tiene un campo laboral menos saturado.</strong>
          <p className='bottom30'>En el mundo, cada 30 segundos ocurre una amputación a causa de la diabetes mellitus. Estas amputaciones pueden prevenirse con el manejo adecuado de los pacientes con diabetes.</p>
          <p className='bottom30'>Las instituciones de salud actuales (públicas y privadas), no son suficientes para cubrir la demanda de prevención y atención primaria de las afecciones de los pies</p>
          <p className='bottom30'>Un mal manejo de padecimiento podológico y la falta de comprensión sobre el control integral de la diabetes puede retrasar la atención oportuna del pie diabético puede derivar en una amputación.</p>
          <strong className='bottom30'>La inversión total es mucho menor que las carreras de 3 o hasta 4 años que existen actualmente</strong>
        </div>
        <img src="https://xochimaco.com/img-inedla/DSC_1794.png" alt="img" />
      </FlexRow>
    </Content>
    <div className={styles.fourth + ' bgGradient'}>
      <FlexRow className='breakWidth'>
        <img src="https://xochimaco.com/img-inedla/img-noticia.png" alt="img" />
        <div>
          <h3 className='white-title-left'>Plantel</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.</p>
          <Button className='whiteButton buttonLeft' to='plantel'>
            Ver más
            <FlechaButton/>
          </Button>
          <h3 className='white-title-left'>conoce a tus profesores</h3>
          <Button className='whiteButton buttonLeft' to='equipo-docente'>
            Ver más
            <FlechaButton/>
          </Button>
        </div>
      </FlexRow>
    </div>
    </>
  );
};

export default conoceInedla;
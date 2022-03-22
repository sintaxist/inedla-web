import React from 'react';
import {Content, FlexRow, Grid2Items} from '../utils/UseElements';
import styles from '../../styles/inedlaPage.module.scss';
import card from  '../../styles/cardImgCopy.module.scss'
import Points from '../carousel/Points';
import { Button, FlechaButton } from '../utils/UseElements';

const conoceInedla = () => {
  return (
    <Content className='widthBreak'>
      <h1 className='blue-title fixWidth'>¿por qué estudiar en <strong>inedla</strong>?</h1>
      <FlexRow className={styles.first + ' breakWidth'}>
        <img src="https://xochimaco.com/img-inedla/DSC_1869%201.png" alt="img" />
        <p>Somo un proyecto familiar iniciado hac más de 15 años con la finalidad de construir un legado para la sociedad lagunera que durante más de 50 años apoyó y reconocióla labor de los podólogos Juan Manuel García Macías y si esposa María Estela Álvarez Camacho en la ciudad de Torreón, Coahuila, fundadores de GAMA Podología Médica</p>
      </FlexRow>
      <Grid2Items className={styles.second}>
        <div className='white-back-shadow'>
          <h4>Misión</h4>
          <p>Formar profesionales competentes para la vida, capaces de innovar y transformar su entorno social.</p>
        </div>
        <div className='white-back-shadow'>
          <h4>Visión</h4>
          <p>Nuestra institución es reconocida por su alto compromiso social y ético, así como un espirítu de servicio, una cultura que favorece la innovación enn diversas áreas del conocimiento, que le permiten posicionarse en el ámbito estatal, nacional e internacional.</p>
        </div>
      </Grid2Items>
      <h2 className='blue-title'>¿qué nos  distingue?</h2>
      <Points />
      <h3 className='blue-title-left'>valores institucionales</h3>
      <div>
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
      <div>
        <h3 className='blue-title-left'>nuestro <strong>plan de estudios</strong></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et ab in qui reiciendis, illum similique accusamus</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, adipisci.</p>
        <Button className='blueButton' to='plan-de-estudios'>
          Conoce más
          <FlechaButton/>
        </Button>
      </div>
      <h3 className='blue-title-left'>campo laboral</h3>
      <FlexRow className={styles.first}>
        <p>Somo un proyecto familiar iniciado hac más de 15 años con la finalidad de construir un legado para la sociedad lagunera que durante más de 50 años apoyó y reconocióla labor de los podólogos Juan Manuel García Macías y si esposa María Estela Álvarez Camacho en la ciudad de Torreón, Coahuila, fundadores de GAMA Podología Médica</p>
        <img src="https://xochimaco.com/img-inedla/DSC_1869%201.png" alt="img" />
      </FlexRow>
    </Content>
  );
};

export default conoceInedla;
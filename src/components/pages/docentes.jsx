import React from 'react';
import {Content, Grid2Items} from '../utils/UseElements';
import { DocentesDatos } from '../../data/DocentesData';
import { getNoticiaImg } from '../utils/getImg';

import styles from '../../styles/cardImgCopy.module.scss';

const Docentes = () => {
  return (
    <Content className='widthBreak marginCorrection'>
      <h1 className='blue-title firstTitle'>Equipo Docente</h1>
      <h3>Todos nuestros docentes cuentan con años de experiencia en la práctica de la Podología clínica.</h3>
      <Grid2Items className={styles.gridContain}>
        {
          DocentesDatos.map((docente) =>{
            const imgUrl = getNoticiaImg(docente.imgPath);
            return(
              <li className={styles.cardNew} key={docente.id}>
                <img src={imgUrl} alt={docente.name} />
                <div className={`${styles.docenteInfo} ${styles.info}`}>
                  <h3>{docente.name}</h3>
                  <span>{docente.age}</span>
                  <span>{docente.titulo}</span>
                  <p>{docente.description}</p>
                </div>
              </li>
            )
          })
        }
      </Grid2Items>
    </Content>
  );
};

export default Docentes;

// import { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import { Content } from '../utils/UseElements';
// import { NoticiasData } from '../../data/NoticiasData';
// import { Loader } from '../utils/Loader'

import styles from '../../styles/noticiaDetail.module.scss';
// import { getNoticiaImg } from '../utils/getImgNoticia';


export function NoticiaDetail (){
    const { movieId } = useParams();
    // console.log(movieId)
    return(
        <Content className={styles.detailContainer}>
            <h1 className='blue-title'>Titulo Noticia</h1>
            <div className={styles.details}>
                <p>Publicado el 19 de marzo de 2022</p>
                <p>Lic. Pedro Fuentes</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rezprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Content>
    )
}
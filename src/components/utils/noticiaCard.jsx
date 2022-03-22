import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getNoticiaImg } from './getImg';
// import { NoticiasData } from '../data/NoticiasData';

import styles from '../../styles/cardImgCopy.module.scss';

export default class NoticiaCard extends Component{
    render(){
        const {noticia} = this.props
        const imgUrl = getNoticiaImg(noticia.imgPath);
        return(
            <li className={styles.cardNew}>
                <img src={imgUrl} alt={noticia.title} />
                <div className={styles.info}>
                    <h3>{noticia.title}</h3>
                    <p>{noticia.descriptionThumb}</p>
                    <Link to={'/noticias/' + noticia.id}>
                        Seguir Leyendo
                    </Link>
                </div>
            </li>
        )
    }
}
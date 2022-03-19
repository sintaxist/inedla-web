import { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import { NoticiasData } from '../../data/NoticiasData';
// import { Loader } from '../loader'

import styles from '../../styles/noticiaDetail.module.scss';
import { getNoticiaImg } from '../utils/getImgNoticia';

// export function NoticiaDetail(){
//     const { noticiaId } = useParams();
//     const [isLoading, setIsLoading] = useState(true);
//     const [noticia, setNoticia] = useState(null);

//     useEffect(() => {
//         setIsLoading(true);
        
//         NoticiasData('/noticias/' + noticiaId).then((data) =>{
//             setIsLoading(false);
//             setNoticia(data);
//         })
        
//     }), [noticiaId];

//     if(isLoading){
//         return(
//             <div>Loading...</div>
//         )
//     }

//     if(!noticia){
//         return null;
//     }

//     const imgUrl = getNoticiaImg(noticia.pathImg);
//     return(
//         <div className={styles.detailContainer}>
//             <h2>{noticia.title}</h2>
//             <div>
//                 <p>{noticia.author}</p>
//                 <p>{noticia.date}</p>
//             </div>
//             <p>{noticia.description}</p>
//             <img src={imgUrl} alt={noticia.title} />
//         </div>
//     )
// }

export function NoticiaDetail (){
    return(
        <div>Details</div>
    )
}
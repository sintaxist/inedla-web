import { NoticiasData } from '../../data/NoticiasData';

export const getMovie = () => {
    console.log(NoticiasData);
    NoticiasData.map((noticia) =>{
        return(
          <NoticiaCard key={noticia.id} noticia={noticia} />
        )
    })
}
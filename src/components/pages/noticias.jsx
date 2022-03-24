import { NoticiasData } from '../../data/NoticiasData';
import { Content, Grid2Items } from '../utils/UseElements';
import NoticiaCard from '../utils/noticiaCard';
// import Loader from '../utils/Loader';

const Noticias = () => {
  return (
    <Content>
      <h1 className="blue-title bottom60">Noticias</h1>
      <Grid2Items>
        {NoticiasData.map((noticia) =>{
          return(
            <NoticiaCard key={noticia.id} noticia={noticia} />
          )
        })}
      </Grid2Items>
      {/* <Loader/> */}
    </Content>
  );
};

export default Noticias;
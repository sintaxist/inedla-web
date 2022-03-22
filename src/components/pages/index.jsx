import React from 'react';
import Testimonials from '../carousel/TestiMonials';
import {Button, Content, FlechaButton, Grid2Items} from '../utils/UseElements';
import { NoticiasData } from '../../data/NoticiasData';
import NoticiaCard from '../utils/noticiaCard';

const Home = () => {
  return (
    <>
      <Testimonials/>
      <Content className='bgGradient'>
        <h2 className='white-title'>Noticias</h2>
        <Grid2Items>
          {
            NoticiasData.map((noticia) =>{
              console.log(noticia);
              return(
                <NoticiaCard key={noticia.id} noticia={noticia} />
              )
            })
          }
        </Grid2Items>
        <Button className='whiteButton' to='/admisiones'>
          Ver más
          <FlechaButton/>
        </Button>
      </Content>
    </>
  );
};

export default Home;
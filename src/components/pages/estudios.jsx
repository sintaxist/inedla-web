import React from 'react';
import { Content, PContainer, LogoCopy, ImgBanner } from '../utils/UseElements';

const PlanEstudios = () => {
  return (
    <div>
      <ImgBanner src="https://www.xochimaco.com/img-inedla/banner-esudios.png" alt="banner" />
      <Content>
         <h1 className='blue-title firstTitle'>Plan de Estudios</h1>
         <PContainer>
           <p>Nosotros realizamos con convenios para las prácticas clínicas en sitios como: Hospital General y las Unidades de Especialidades Médicas de Enfermedades Crónicas (UNEMeS EC)</p>
           <p>Ofrecemos un formación de personal como parte de un equipo multidisciplinario de salud.</p>
           <p>A través de nuestros dos pilares que son el TSU y RVOE, que nos distingue como institución, nuestro objetivo es formar personas capaces de resolver problemas reales aprovechando al máximo los recursos e incorporando la ética, el sentido social y un espíritu de servicio a su quehacer es la visión de los egresados.</p>
         </PContainer>
         <h2 className='margin30 titleBold'><span>¿Qué es TSU y RVOE?</span></h2>
         <h3 className='green-title-left'>tsu</h3>
         <LogoCopy>
           <img src="https://www.xochimaco.com/img-inedla/tsu.svg" alt="tsu" />
           <p>El Técnico Superior Universitarios es una carrera de dos o tres años superiores a los programas universitarios, ya que se enfocan en impartir un aprendizaje práctico y técnico.</p>
         </LogoCopy>
         <h3 className='green-title-left'>rvoe</h3>
         <LogoCopy>
           <img src="https://www.xochimaco.com/img-inedla/rvoe.svg" alt="rvoe" />
           <p>Es un Reconocimiento de Validez Oficial de estudios que otorga la Secretaría de Educación Pública (SEP) y que obtienen las instituciones educativas más importantes del país. Su objetivo es garantizar que una institución educativa privada cumple con los requisitos para ofrecer programas educativos de calidad.</p>
         </LogoCopy>
      </Content>
    </div>
  );
};

export default PlanEstudios;
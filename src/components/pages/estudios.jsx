import React from 'react';
import { Content, PContainer, LogoCopy, ImgBanner } from '../utils/UseElements';

const PlanEstudios = () => {
  return (
    <div className='marginCorrection'>
      <ImgBanner src="https://inedla.mx/sitio-revision/img-web/banner-esudios.jpg" alt="banner" />
      <Content className='widthBreak'>
         <h1 className='blue-title firstTitle'>Plan de Estudios</h1>
         <PContainer>
           <p>Hemos desarrollado un plan de estudios completamente innovador que te permitirá ejercer de manera profesional y certificada la podología clínica.</p>
           <p>Obten una formación integral que te permita formar parte de un equipo multidisciplinario de salud.</p>
           <p>Realiza tus prácticas clínicas en sitios como: Hospital General y las Unidades de Especialidades Médicas de Enfermedades Crónicas (UNEMeS EC).</p>
         </PContainer>
         <h2 className='margin30 titleBold'>Fórmate como Técnico Superior Universitario con validez oficial</h2>
         <h3 className='green-title-left'>tsu</h3>
         <LogoCopy>
           <img src="https://inedla.mx/sitio-revision/img-web/tsu.svg" alt="tsu" />
           <p>Como Técnico Superior Universitario (TSU) podrás titularte en una carrera de dos o tres años de duaración con los conocimientos teóricos y prácticos necesarios para ejercer responsablemente como profesional de la rama médica.</p>
         </LogoCopy>
         
         <h3 className='green-title-left'>rvoe</h3>
         <LogoCopy>
           <img src="https://inedla.mx/sitio-revision/img-web/rvoe.svg" alt="rvoe" />
           <p>Nuestro programa está certificado por la Secretaría de Educación Pública, lo cual garantiza que podrás conseguir empleo en cualquier lugar con tu título profesional.</p>
         </LogoCopy>
      </Content>
    </div>
  );
};

export default PlanEstudios;
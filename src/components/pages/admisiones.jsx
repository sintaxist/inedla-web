import React from 'react';
import { Link } from 'react-router-dom';
import {Content, FlexRow, ImgBanner, LogoCopy, PContainer} from '../utils/UseElements';

const Admisiones = () => {
  return (
    <>
      <ImgBanner src="https://www.xochimaco.com/img-inedla/banner-admisiones.png" alt="banner" />
      <Content>
        <h1 className='blue-title-left'>Admisiones</h1>
        <PContainer className='margin60'>
          <p>Nosotros realizamos con convenios para las prácticas clínicas en sitios como: Hospital General y las Unidades de Especialidades Médicas de Enfermedades Crónicas (UNEMeS EC)</p>
          <p>Ofrecemos un formación de personal como parte de un equipo multidisciplinario de salud.</p>
          <p>A través de nuestros dos pilares que son el TSU y RVOE, que nos distingue como institución, nuestro objetivo es formar personas capaces de resolver problemas reales aprovechando al máximo los recursos e incorporando la ética, el sentido social y un espíritu de servicio a su quehacer es la visión de los egresados.</p>
        </PContainer>
        <h2 className='green-title-left bottom60'>Pasos a seguir</h2>
        <div>
          <LogoCopy className='steps'>
            <span className='NumberStep'>1.</span>
            <img src="https://www.xochimaco.com/img-inedla/solicitud.svg" alt="solicitud" />
            <div>
              <h3>Entrega tu solictud de admisión.</h3>
              <p>Acude a nuestras instalaciones para obterner tu solicitud, ponte en contacto <Link to='/inscribete'>aquí</Link>.</p>
            </div>
          </LogoCopy>

          <LogoCopy className='steps'>
            <span className='NumberStep'>2.</span>
            <img src="https://www.xochimaco.com/img-inedla/Documentos.svg" alt="documentos" />
            <div>
              <h3>Entrega tus Documentos.</h3>
              <p>Como parte de tu proceso de inscripción es fundamental que conozcas la documentación requerida y la entregues al mismo tiempo que la solicitud de admisión.</p>
              <p>Consulta los documentos <span>aqui</span></p>
            </div>
          </LogoCopy>

          <LogoCopy className='steps'>
            <span className='NumberStep'>3.</span>
            <img src="https://www.xochimaco.com/img-inedla/examen.svg" alt="examen" />
            <div>
              <h3>Presenta tu examen diagnóstico.</h3>
              <p>Agenda una cita para que puedas acudir a las instalaciones donde presentaras tu examen (Este examen es con el único fin de evaluar tus conocimientos en el área y no va a influir en tú proceso de inscripción).</p>
            </div>
          </LogoCopy>

          <LogoCopy className='steps'>
            <span className='NumberStep'>4.</span>
            <img src="https://www.xochimaco.com/img-inedla/Inscripcion.svg" alt="entrevista" />
            <div>
              <h3>Realiza la entrevista de contacto.</h3>
              <p>Dejanos conocerte a traves de un entrevista</p>
            </div>
          </LogoCopy>

          <LogoCopy className='steps'>
            <span className='NumberStep'>5.</span>
            <img src="https://www.xochimaco.com/img-inedla/cuota.svg" alt="cuota" />
            <div>
              <h3>Cubre la cuota de inscripción.</h3>
              <p>En el momento que cumplas con los requisitos anteriores nosotros te brindaremos la información necesaria para que puedas completar tu proceso de inscripción.</p>
            </div>
          </LogoCopy>

          <LogoCopy className='steps lastStep'>
            <span className='NumberStep'>6.</span>
            <img src="https://www.xochimaco.com/img-inedla/Listo.svg" alt="Listo!!!" />
            <div>
              <h3>¡Listo! ya eres parte de la comunidad de INEDLA.</h3>
            </div>
          </LogoCopy>
        </div>
        <h2 className='green-title-left firstTitle'>Preguntas frecuentes</h2>
        <PContainer>
          <strong>Si aún tienes dudas comunicate por cualquiera de estos medios</strong>
          <p>Correo electrónico: correo@mail.com</p>
          <p>Teléfono: 999 999 9099 Ext. 9999, 0000, 9999 y 0000z</p>
        </PContainer>
        {/* https://mui.com/components/accordion/ */}
      </Content>
    </>
  );
};

export default Admisiones;
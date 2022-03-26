import React from 'react';
import { Link } from 'react-router-dom';
import {Content, ImgBanner, LogoCopy, PContainer} from '../utils/UseElements';

import '../../styles/colapseItems.scss';
import Form from '../utils/form';

const Admisiones = () => {

  // const [selected, setSelected] = useState(null)
  
  // const toggle = (i) => {
  //   if(selected === i){
  //     return setSelected(null)
  //   }

  //   setSelected(i)
  // }

  return (
    <div className='marginCorrection'>
      <ImgBanner src="https://inedla.mx/sitio-revision/img-web/banner-admisiones.jpg" alt="banner" />
      <Content className='widthBreak'>
        <h1 className='blue-title-left'>Admisiones</h1>
        <PContainer className='margin60'>
          <p>Es muy fácil nuestro proceso de admisión, sólo debes seguir los siguientes pasos:</p>
        </PContainer>
        <h2 className='green-title-left bottom60'>Pasos a seguir</h2>
        <div>
          <LogoCopy className='steps'>
            <span className='NumberStep'>1.</span>
            <img src="https://inedla.mx/sitio-revision/img-web/solicitud.svg" alt="solicitud" />
            <div>
              <h3>Entrega tu solictud de admisión.</h3>
              <p>Acude a nuestras instalaciones para obterner tu solicitud, ponte en contacto <Link className="link" to='/inscribete'>aquí</Link>.</p>
            </div>
          </LogoCopy>

          <LogoCopy className='steps'>
            <span className='NumberStep'>2.</span>
            <img src="https://inedla.mx/sitio-revision/img-web/Documentos.svg" alt="documentos" />
            <div>
              <h3>Entrega tus Documentos.</h3>
              <p>Como parte de tu proceso de inscripción es fundamental que conozcas la documentación requerida y la entregues al mismo tiempo que la solicitud de admisión.</p>
              <span className='tootltipFather'>
                Consulta los documentos 
                <span className='link-green'> aquí
                <ul className='tooltip white-back-shadow'>
                  <li>Certificado de bachillerato</li>
                  <li>Carta de autenticidad emitida por la escuela donde se estudió el bachillerato</li>
                  <li>Acta de nacimiento actualizada</li>
                  <li>CURP</li>
                  <li>Identificación oficial vigente</li>
                  <li>Comprobante de domicilio</li>
                  <li>Referencia laboral (en caso de trabajar) o 2 referencias personales si eres estudiante de tiempo completo</li>
                  <li>2 fotografías tamaño infantil</li>
                  <li>Solicitud de admisión y aviso de privacidad</li>
                </ul>
                </span>.
              </span>
            </div>
          </LogoCopy>

          <LogoCopy className='steps'>
            <span className='NumberStep'>3.</span>
            <img src="https://inedla.mx/sitio-revision/img-web/examen.svg" alt="examen" />
            <div>
              <h3>Presenta tu examen diagnóstico.</h3>
              <p>Agenda una cita para que puedas acudir a las instalaciones donde presentarás tu examen (Este examen es con el único fin de evaluar tus conocimientos en el área y no va a influir en tú proceso de inscripción).</p>
            </div>
          </LogoCopy>

          <LogoCopy className='steps'>
            <span className='NumberStep'>4.</span>
            <img src="https://inedla.mx/sitio-revision/img-web/Inscripcion.svg" alt="entrevista" />
            <div>
              <h3>Realiza la entrevista de contacto.</h3>
              <p>Déjanos conocerte a traves de un entrevista</p>
            </div>
          </LogoCopy>

          <LogoCopy className='steps'>
            <span className='NumberStep'>5.</span>
            <img src="https://inedla.mx/sitio-revision/img-web/cuota.svg" alt="cuota" />
            <div>
              <h3>Cubre la cuota de inscripción.</h3>
              <p>En el momento que cumplas con los requisitos anteriores nosotros te brindaremos la información necesaria para que puedas completar tu proceso de inscripción.</p>
            </div>
          </LogoCopy>

          <LogoCopy className='steps lastStep'>
            <span className='NumberStep'>6.</span>
            <img src="https://inedla.mx/sitio-revision/img-web/Listo.svg" alt="Listo!!!" />
            <div>
              <h3>¡Felicidades! ya eres parte de la comunidad INEDLA.</h3>
            </div>
          </LogoCopy>
        </div>
        {/* <h2 className='green-title-left firstTitle'>Preguntas frecuentes</h2>

        <div className="accordion bottom60">
          {
            data.map((item, i)=>{
              return(
                <div className="item" key={item.id}>
                  <div className={selected === i ? 'title active' : 'title'} onClick={() => toggle(i)}>
                    <h2 className={selected === i ? 'titulo activo' : 'titulo'}>
                      {item.question}
                    </h2>
                    <span>{selected === i ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i ? 'content show' : 'content'}>
                    <p>
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div> */}
        <Form/>
      </Content>
    </div>
  );
};

export default Admisiones;

// const data = [
//   {
//     id: 1,
//     question: 'Question 1',
//     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus sapiente blanditiis mollitia quaerat error.'
//   },
//   {
//     id: 2,
//     question: 'Question 2',
//     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus sapiente blanditiis mollitia quaerat error.'
//   },
//   {
//     id: 3,
//     question: 'Question 3',
//     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus sapiente blanditiis mollitia quaerat error.'
//   },
//   {
//     id: 4,
//     question: 'Question 4',
//     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus sapiente blanditiis mollitia quaerat error.'
//   },
//   {
//     id: 5,
//     question: 'Question 5',
//     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus sapiente blanditiis mollitia quaerat error.'
//   },
//   {
//     id: 6,
//     question: 'Question 6',
//     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ducimus sapiente blanditiis mollitia quaerat error.'
//   },
// ] 
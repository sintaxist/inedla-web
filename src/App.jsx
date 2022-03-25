import React from 'react'
import './styles/App.scss';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages';
import Admisiones from './components/pages/admisiones';
import Inscribete from './components/pages/inscribete';
import WhyINEDLA from './components/pages/whyInedla';
import Docentes from './components/pages/docentes';
import Plantel from './components/pages/plantel';
import PlanEstudios from './components/pages/estudios';
import Noticias from './components/pages/noticias';
import { NoticiaDetail } from './components/pages/NoticiaDetail';
import { Footer } from './components/footer';
import ScrollToTop from './components/utils/ScrollToTop';

class App extends React.Component {
  componentDiMount(){
    document.title = "INEDLA"
  }
  render (){
    return (
      <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/admisiones" exact element={<Admisiones/>}></Route>
        <Route path="/inscribete" exact element={<Inscribete/>}></Route>
        <Route path="/estudia-podologia" exact element={<WhyINEDLA/>}></Route>
        <Route path="/equipo-docente" exact element={<Docentes/>}></Route>
        <Route path="/plantel" exact element={<Plantel/>}></Route>
        <Route path="/plan-de-estudios" exact element={<PlanEstudios/>}></Route>
        <Route path="/noticias" exact element={<Noticias/>}></Route>
        <Route path="/noticias/:movieId" exact element={<NoticiaDetail/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    )
  };
}

export default App;

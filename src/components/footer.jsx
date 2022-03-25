import { Link } from 'react-router-dom';
import logoWhite from '../images/white-logo.svg';
import {Content} from './utils/UseElements';

import '../styles/footer.scss'

export const Footer = () => {
    return(
        <footer>
            <Content>
                <Link to='/'>
                    <img src={logoWhite} alt='logo'/>
                </Link>
                <div>
                    {
                    FooterLinks.map((link) =>{
                        return (
                            <Link key={link.id} to={link.path}>{link.text}</Link>
                        )
                    })
                    }
                </div>
            </Content>
            <address>Derechos Reservados 2022©</address>
        </footer>
    )
}

const FooterLinks = [
    {
        id: 101,
        text: 'Equipo Docente',
        path: '/equipo-docente'
    },
    {
        id: 102,
        text: 'Plantel',
        path: '/plantel'
    },
    {
        id: 103,
        text: 'Plan de Estudios',
        path: '/plan-de-estudios'
    },
    {
        id: 104,
        text: 'Conoce INEDLA',
        path: '/estudia-podologia'
    },
    {
        id: 105,
        text: 'Admisiones',
        path: '/admisiones'
    },
    {
        id: 106,
        text: 'Noticias',
        path: '/noticias'
    },
    {
        id: 107,
        text: 'Contacto',
        path: '/inscribete'
    },
]
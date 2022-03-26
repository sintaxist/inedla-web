import './estilos.css';

export const ButtonWhatsapp = () => {
    return(
        <div>
            <a className="whatsapp-button" id="btn-web" href="https://web.whatsapp.com/send?phone=8715146349" target="_blank" rel="noreferrer">
                <img src="https://inedla.mx/img-web/whatsapp-logo.png" alt="whatsapp" width="" height=""/>
            </a>

            <a className="whatsapp-button" id="btn-mob" href="https://wa.me/8715146349" target="_blank" rel="noreferrer">
                <img src="https://inedla.mx/img-web/whatsapp-logo.png" alt="whatsapp" width="" height=""/>
            </a>
        </div>
    )
}
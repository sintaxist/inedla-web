import React, { Component } from 'react';
import { FlexRow, FlechaButton } from './UseElements';
import '../../styles/form-styles.scss';

export default class Form extends Component {
    componentDidMount() {
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");

        script1.src = "https://sibforms.com/forms/end-form/build/main.js";
        script1.async = true;

        script2.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
        script2.async = true;

        document.body.appendChild(script1, script2);
    }
    render() {
        window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
        window.LOCALE = 'en';
        window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

        window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

        window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

        window.translation = {
            common: {
                selectedList: '{quantity} list selected',
                selectedLists: '{quantity} lists selected'
            }
        };

        (function () { var ldk = document.createElement('script'); ldk.type = 'text/javascript'; ldk.async = true; ldk.src = 'https://s.cliengo.com/weboptimizer/623a86aac2e52d002ad510f0/623a89b5c2e52d002ad51152.js?platform=onboarding_modular'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ldk, s); })();
        var AUTOHIDE = Boolean(1);

        console.log(AUTOHIDE)

        return (
            <FlexRow className='white-back-shadow margin60 formContainer'>
                <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css"></link>
                <div id="sib-form-container" className="sib-form-container">
                    <div id="error-message" className="sib-form-message-panel">
                        <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                            <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                                <path
                                    d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                            </svg>
                            <span className="sib-form-message-panel__inner-text">
                                Revisa que los datos que ingresaste sean los correctos
                            </span>
                        </div>
                    </div>
                    <div>
                        <div id="success-message" className="sib-form-message-panel">
                            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                                    <path
                                        d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                                </svg>
                                <span className="sib-form-message-panel__inner-text">
                                    Tus datos se enviaron con exito, pronto mos pondremos en contacto
                                </span>
                            </div>
                        </div>
                        <div id="sib-container" className="sib-container--large sib-container--vertical">
                            <form id="sib-form" method="POST"
                                action="https://dc8b637e.sibforms.com/serve/MUIEAAD9FotPxjdyHgBUSa-4JXHRzbq91Yhx1QEzWhr21YK_UKbhw7qhrc4olgFJcGDiUYsm-TXDFbNsuo1Kx_yZqD3UMQGdhd7N4JAbppqtzphN5TsbEFRfRVH8Lq2JFSfErkOV4ekS_yIv_ewzSorsaQVNnTa0Fu0nsxq7nR3dFCie3wTfCHjBXrw6HFEpXvtteMOlRW7FbVzt"
                                data-type="subscription">
                                <h2 className='bottom60'>Agenda una visita a nuestras instalaciones y resuelve tus dudas</h2>
                                <div className='elementForm'>
                                    <input className="input" maxLength="200" type="text" id="NOMBRE" name="NOMBRE" autoComplete="off" required />

                                    <label className="entry__label labelInput" htmlFor="NOMBRE" data-required="*">
                                        Nombre
                                    </label>

                                </div>
                                <div className='elementForm'>

                                    <input className="input" maxLength="200" type="text" id="TELEFONO" name="TELEFONO" autoComplete="off" required />

                                    <label className="entry__label labelInput"
                                        htmlFor="TELEFONO" data-required="*">
                                        Teléfono
                                    </label>
                                </div>
                                <div className='elementForm'>

                                    <input className="input" type="text" id="EMAIL" name="EMAIL" autoComplete="off" required />

                                    <label className="entry__label labelInput" htmlFor="EMAIL" data-required="*">
                                        Correo electrónico
                                    </label>
                                </div>
                                <label className='checkInput'>
                                    <input type="checkbox" className="input_replaced" id="OPT_IN" name="OPT_IN" />
                                    <span className="checkbox checkbox_tick_positive"></span><span>
                                        <p>¿Cuentas con certificado de preparatoria?</p>
                                    </span>
                                </label>
                                <div className="sib-form-block">
                                    <button className="blueButton sib-form-block__button sib-form-block__button-with-loader"
                                        form="sib-form" type="submit">
                                        <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                                        </svg>
                                        Enviar
                                        <FlechaButton/>
                                    </button>
                                </div>

                                <input type="text" name="email_address_check" className="input--hidden" />
                                <input type="hidden" name="locale" value="en" />
                            </form>
                        </div>
                    </div>
                </div>
                <ul className='divForm'>
                    <li>
                        <h4>Visítanos</h4>
                        <p>Av. Lorem # 99, Colonia Vista Lorem, México, CDMX, C.P. 99999</p>
                        <p>Lunes a Viernes de 9:00 a 18:00 hrs. y Sábado de 9:00 a 14:00 hrs.</p>
                    </li>
                    <li>
                        <h4>Llámanos</h4>
                        <p>55 00 00 00 00</p>
                    </li>
                    <li>
                        <h4>Escríbenos</h4>
                        <p>info@inedla.mx</p>
                    </li>
                </ul>
            </FlexRow>
        )
    }
}
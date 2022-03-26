import React, { Component } from 'react';
import { FlexRow, FlechaButton } from './UseElements';
import '../../styles/form-styles.scss';

export default class Form extends Component {
    componentDidMount() {
        const fatherAppend  =  document.getElementById('formINEDLA');

        const script1 = document.createElement("script")

        script1.src = "https://sibforms.com/forms/end-form/build/main.js";
        script1.async = true;

        fatherAppend.appendChild(script1);
    }
    render() {
        window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
        window.LOCALE = 'en';
        window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Por favor verifica que tus datos sean los correctos.";

        window.REQUIRED_ERROR_MESSAGE = "Este campo es obligatorio.";

        window.GENERIC_INVALID_MESSAGE = "Por favor verifica que tus datos sean los correctos.";

        window.translation = {
            common: {
            selectedList: '{quantity} list selected',
            selectedLists: '{quantity} lists selected'
            }
        };
        var AUTOHIDE = Boolean(1);

        console.log(AUTOHIDE)

        return (
            <FlexRow id="formINEDLA" className='white-back-shadow margin60 formContainer'>
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
                                action="https://dc8b637e.sibforms.com/serve/MUIEAHw-cZL-e7_xFxlrBEmjAD-FE93ki491w5AH9UjjNjAaOE6oywiGmuPWKO3wLY0mgjedOxmx0zoWrq9A9td-cznd6wNNYqNjTqJxRCSjCsqKVV4rFIv4tG774uCmBD5mL-aT5aFqYTSiISjEPG8Wml_oe5ayrIlan0cAph1v0cDrUqShxozM7OGYkF4koKcRjivkHR9cakP7"
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
                                <div className="elementForm noRelative">
                                    <label className="entry__label" htmlFor="ESTADO" data-required="*">
                                    Selecciona tu estado
                                    </label>
                                    <div className="entry__field">
                                    <select defaultValue={'DEFAULT'} className="input" id="ESTADO" name="ESTADO" data-required="true" >

                                            <option value="DEFAULT" disabled>-- Estado --</option>

                                            <option className="sib-menu__item" value="4">
                                            Aguascalientes
                                            </option>
                                            <option className="sib-menu__item" value="5">
                                            Baja California
                                            </option>
                                            <option className="sib-menu__item" value="6">
                                            Baja California Sur
                                            </option>
                                            <option className="sib-menu__item" value="7">
                                            Campeche
                                            </option>
                                            <option className="sib-menu__item" value="8">
                                            Chiapas
                                            </option>
                                            <option className="sib-menu__item" value="9">
                                            Chihuahua
                                            </option>
                                            <option className="sib-menu__item" value="10">
                                            Ciudad de México
                                            </option>
                                            <option className="sib-menu__item" value="11">
                                            Coahuila
                                            </option>
                                            <option className="sib-menu__item" value="12">
                                            Colima
                                            </option>
                                            <option className="sib-menu__item" value="13">
                                            Durango
                                            </option>
                                            <option className="sib-menu__item" value="14">
                                            Guanajuato
                                            </option>
                                            <option className="sib-menu__item" value="15">
                                            Guerrero
                                            </option>
                                            <option className="sib-menu__item" value="16">
                                            Hidalgo
                                            </option>
                                            <option className="sib-menu__item" value="17">
                                            Jalisco
                                            </option>
                                            <option className="sib-menu__item" value="18">
                                            Estado de México
                                            </option>
                                            <option className="sib-menu__item" value="19">
                                            Michoacán
                                            </option>
                                            <option className="sib-menu__item" value="20">
                                            Nuevo León
                                            </option>
                                            <option className="sib-menu__item" value="21">
                                            Oaxaca
                                            </option>
                                            <option className="sib-menu__item" value="22">
                                            Puebla
                                            </option>
                                            <option className="sib-menu__item" value="23">
                                            Querétaro
                                            </option>
                                            <option className="sib-menu__item" value="24">
                                            Quintana Roo
                                            </option>
                                            <option className="sib-menu__item" value="25">
                                            San Luis Potosí
                                            </option>
                                            <option className="sib-menu__item" value="26">
                                            Sinaloa
                                            </option>
                                            <option className="sib-menu__item" value="27">
                                            Sonora
                                            </option>
                                            <option className="sib-menu__item" value="28">
                                            Tabasco
                                            </option>
                                            <option className="sib-menu__item" value="29">
                                            Tamaulipas
                                            </option>
                                            <option className="sib-menu__item" value="30">
                                            Tlaxcala
                                            </option>
                                            <option className="sib-menu__item" value="31">
                                            Veracruz
                                            </option>
                                            <option className="sib-menu__item" value="32">
                                            Yucatán
                                            </option>
                                            <option className="sib-menu__item" value="33">
                                            Zacatecas
                                            </option>
                                        </select>
                                    </div>
                                </div>
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
                        <p>Av. Miguel Hidalgo 800 Ote, Segundo de Cobián Centro, Torreón, Coahuila</p>
                        <p>Lunes a Viernes de 9:00 a 18:00 hrs. y Sábado de 9:00 a 14:00 hrs.</p>
                    </li>
                    <li>
                        <h4>Llámanos</h4>
                        <p>871 514 6349</p>
                    </li>
                    <li>
                        <h4>Escríbenos</h4>
                        <p>contacto@inedla.mx</p>
                    </li>
                </ul>
            </FlexRow>
        )
    }
}
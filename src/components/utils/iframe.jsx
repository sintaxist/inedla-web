import React, { Component } from 'react';

export default class Iframe extends Component {
    componentDidMount() {
        const contenedor = document.getElementById("iframeFather")
        const iframe = document.createElement("iframe");
      
        iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7199.9556774418115!2d-103.4397137!3d25.5391151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5163523ad078d00!2sGama%20Podolog%C3%ADa%20M%C3%A9dica!5e0!3m2!1ses-419!2smx!4v1648166246045!5m2!1ses-419!2smx";
        iframe.async = true;
      
        contenedor.appendChild(iframe);
      };
    render() {
        return (
        <div id='iframeFather'></div>
        )
    }
}

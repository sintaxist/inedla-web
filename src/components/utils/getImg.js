import placeholder from '../../images/placeholder.jpeg';

export function getNoticiaImg(path){
    return path ? `https://inedla.mx/sitio-revision/img-web/${path}` : placeholder;
}
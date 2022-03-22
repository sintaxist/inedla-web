import placeholder from '../../images/placeholder.jpeg';

export function getNoticiaImg(path){
    return path ? `https://xochimaco.com/img-inedla/${path}` : placeholder;
}
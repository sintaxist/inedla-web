import placeholder from '../../images/placeholder.jpeg';

export function getNoticiaImg(path){
    return path ? `http://localhost:3000/static/media/${path}` : placeholder;
}
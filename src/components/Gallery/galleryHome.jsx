import React, {useState} from 'react'
import './GalleryHomeStyles.scss';

import * as AiIcons from 'react-icons/ai';

const Gallery = () => {

    const url = 'https://inedla.mx/sitio-revision/img-web/';

    let data = [
        {
            id: 'img1',
            position: 'item1',
            path: 'DSC_1823.jpg',
        },
        {
            id: 'img2',
            position: 'item2',
            path: 'DSC_1709.jpg',
        },
        {
            id: 'img3',
            position: 'item3',
            path: 'DSC_1679.jpg',
        },
        {
            id: 'img4',
            position: 'item4',
            path: 'DSC_2024.jpg',
        },
        {
            id: 'img5',
            position: 'item5',
            path: 'DSC_1905.jpg',
        },
    ]

    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');


    const getImg = (path) =>{
        setTempImgSrc(path);
        setModal(true);
    }

    return ( 
        <>
            <div className={modal ? "modal open" : "modal"} onClick={()=> setModal(false)}>
                <img src={url+tempImgSrc} alt='imgModal'/>
                <AiIcons.AiOutlineClose className='cross' onClick={()=> setModal(false)} />
            </div>
            <div className='galleryHome margin60'>
                {
                data.map((img) =>{
                    return(
                        <div onClick={() => getImg(img.path)} className={'imgItem ' + img.position} key={img.id}>
                            <img src={url+img.path} alt={img.id} />
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default Gallery;
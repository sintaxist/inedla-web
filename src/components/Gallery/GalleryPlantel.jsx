import React, {useState} from 'react'
import './GalleryPlantel.scss';

import * as AiIcons from 'react-icons/ai';

const GalleryPlantel = () => {

    const url = 'https://inedla.mx/sitio-revision/img-web/';

    let data = [
        {
            id: 'img1',
            position: 'item1',
            path: 'DSC_1977.jpg',
        },
        {
            id: 'img2',
            position: 'item2',
            path: 'DSC_1988.jpg',
        },
        {
            id: 'img3',
            position: 'item3',
            path: 'DSC_1601.jpg',
        },
        {
            id: 'img4',
            position: 'item4',
            path: 'DSC_1581.jpg',
        },
        {
            id: 'img5',
            position: 'item5',
            path: 'DSC_2006.jpg',
        },
        {
            id: 'img6',
            position: 'item6',
            path: 'DSC_1974.jpg',
        },
        {
            id: 'img7',
            position: 'item7',
            path: 'DSC_2011.jpg',
        },
        {
            id: 'img8',
            position: 'item8',
            path: 'DSC_1730.jpg',
        },
        {
            id: 'img9',
            position: 'item9',
            path: 'DSC_1532.jpg',
        },
        {
            id: 'img10',
            position: 'item10',
            path: 'DSC_1576.jpg',
        },
        {
            id: 'img11',
            position: 'item11',
            path: 'DSC_1603.jpg',
        },
        {
            id: 'img12',
            position: 'item12',
            path: 'DSC_1992.jpg',
        },
        {
            id: 'img13',
            position: 'item13',
            path: 'DSC_2146.jpg',
        },
        {
            id: 'img14',
            position: 'item14',
            path: 'DSC_1559.jpg',
        },
        {
            id: 'img15',
            position: 'item15',
            path: 'DSC_2146.jpg',
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
            <div className='galleryGrid margin60'>
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

export default GalleryPlantel;
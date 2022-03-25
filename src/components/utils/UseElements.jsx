import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
    display: block;
    padding: 60px 6%;
`;

export const FlexRow = styled.ul`
    display: flex;
    justify-content: space-between;
`;

export const Grid2Items = styled.ul`
    display: grid;
    height: 100%;
    justify-content: center;
    grid-template-columns: repeat(2, minmax(100px, 700px));
    grid-auto-rows: 200px;
    grid-gap: 30px;

    @media screen and (max-width: 960px){
        justify-content: space-between;
        grid-template-columns: auto;
    }

    @media screen and (max-width: 550px){
       grid-auto-rows: 250px;
    }
`;

export const Button = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: max-content;
    margin: 30px auto 0px;
    padding: 3px 20px 3px 30px;
    border-radius: 50px;
    text-align:  center;
    text-decoration: none;
    cursor: pointer;
    transition: all .3s;
    border:  3px solid transparent;
`;

export const ImgBanner = styled.img`
    width: 100%;
    height: 30vh;
    object-fit: cover;

    @media screen and (max-width: 960px){
        height: 20vh;
    }
`;

export const FlechaButton = () => {
    return(
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='line' d="M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 8L17 12L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const PContainer = styled.div`
    display: block;
    p, strong{
        display: block;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 960px){
        p,strong{
            margin-bottom: 15px;
        }
    }
`

export const LogoCopy = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 250px;
    position: relative;
    img{
        width: 100px;
        margin-right: 30px
    }
    p{
        margin-left: 15px;
    }
    h3{
        text-align: left;
        font-weight: bold;
    }
    div{
        margin-left: 0px;
        position: relative;
        p{
            margin-left: 0px;
            margin-top: 15px;
        }
    }
    > span{
        position: absolute;
        font-weight: bold;
        font-size: 1.5rem;
        color: #F9FDFC;
        background: #51dcaa;
        padding: 15px 20px;
        border-radius: 50px;
        top: -20px;
        left: -100px;
    }

    @media screen and (max-width: 960px){
        height: 400px;
        p,strong{
            margin-bottom: 15px;
        }
        > span{
            padding: 10px 15px;
            left: -51px;
        }
    }

    @media screen and (max-width: 550px){
        flex-direction: column;
        img{
            margin-bottom: 30px;
            margin-right: 0px;
        }
        p, span{
            margin-left: 0px;
            text-align: center;
        }
        h3{
            text-align: center;
        }
    }
`
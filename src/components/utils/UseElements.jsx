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
    height: 50vh;
    object-fit: cover;
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
    p{
        margin-bottom: 30px;
    }

    @media screen and (max-width: 960px){
        p{
            margin-bottom: 15px;
        }
    }
`

export const LogoCopy = styled.div`
    display: flex;
    justify-content: space-between;
    height: 250px;
    padding: 3%;
`
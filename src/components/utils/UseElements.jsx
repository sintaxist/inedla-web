import styled from "styled-components";

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
    justify-content: center;
    grid-template-columns: repeat(2, minmax(100px, 700px));
    grid-template-rows: repeat(autofill, 250px);
    grid-gap: 40px;

    @media screen and (max-width: 960px){
        grid-template-columns: auto;
        justify-content: space-between;
    }
`;
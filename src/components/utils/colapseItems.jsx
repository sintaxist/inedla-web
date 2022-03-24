import React from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div `
    overflow: hidden;
    width: 18.75rem;
    background-color: #27262c;
    color: #f9f9f9;
`
const Inner = styled.div`
    position: absolute;
    padding: 1rem;
    color: #c3c1cb;
`
const Header = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    text-align: left;
    background: #212025;
    cursor: pointer;
    color: white;
`

const HeaderIcon = styled.span`
    transform: rotate(${(props) => (props.isActive ? -180 : 0)}deg);
    transition: all .3s;
`

const Content = styled.div`
    position: relative;
    overflow: hidden;
    hieght: ${(props)=>{
        const inner = document.getElementById(props.itemName);
        return `${props.isActive && inner ? inner.clientHeight : 0}px`;
    }};
    transition: height 0.35s;
`

const AccordionContent = ({onClick, itemName, itemContent, isActive})=>{
    return(
        <React.Fragment>
            <Header onClick={onClick}>
                {itemName}
                <HeaderIcon isActive={isActive} className="material-icons">
                    expand_more
                </HeaderIcon>
            </Header>
            <Content itemName={itemName} isActive={isActive}>
                <Inner id={itemName}>
                    {itemContent}
                </Inner>
            </Content>
        </React.Fragment>
    )
}

export {AccordionContainer, AccordionContent}
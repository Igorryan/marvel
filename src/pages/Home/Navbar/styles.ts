import styled, { css, keyframes } from "styled-components";

interface IItemProps {
    active?: boolean;
}

const widthMore = keyframes`
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
`

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 50px;

    background: #1F1F1F;
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    height: 100%;
    max-width: 1200px;

    list-style: none;
    color: #fff;

    h4 {
        font-weight: 700;
        color: #CFCFCF;
        cursor: pointer;
    }
`
export const Item = styled.li<IItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    cursor: pointer;

    position: relative;

    &::before {
        content: '';

        position: absolute;
        bottom: 0;

        width: 0%;
        height: 3px;

        background-color: red;

        ${(props) => props.active && css`
            animation: ${widthMore} 0.2s both;
        `}
    }


`
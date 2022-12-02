import styled, { css } from "styled-components";

interface IIndexProps {
    currentImage: boolean
}

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('https://images.alphacoders.com/621/621526.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    position: relative;

    &::after {
        content: '';

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: rgba(0,0,0,0.8);
    }
`

export const Carousel = styled.div`
    display: flex;

    gap: 10px;

    overflow: hidden;
    z-index: 1;

    position: relative;

`

export const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;

    overflow: hidden;

    scroll-behavior: smooth;

    width: 1200px;
    height: 500px;

    position: relative;
`

export const OptionIndexImageContainer = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column;

    gap: 2px;

    position: absolute;
    bottom: 0;
    right: 27px;
`

export const Index = styled.li<IIndexProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    font-size: 14px;
    font-weight: bold;
    color: #fff;

    background-color: #1F1F1F;

    cursor: pointer;

    ${props => props.currentImage && css`
        background-color: #F0141E;
    `}
`

export const Previous = styled.button`
    img {
        width: 30px;
        height: 30px;
    }
`

export const Next = styled.button`
    img {
        width: 30px;
        height: 30px;
    }
`

export const Image = styled.img`
    width: 100%;
    min-height: 500px;

    object-fit: cover;
    object-position: top;
`
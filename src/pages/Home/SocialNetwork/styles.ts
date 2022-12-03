import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

    width: 160px;
    height: 100%;

    margin-left: 14px;

    svg {
        cursor: pointer;
    }
`

export const FacebookSVG = styled.svg`
    &:hover {
        path {
            fill: #0052F0;
            transition: 0.2s ease;
        }
    }
`

export const YoutubeSVG = styled.svg`
    &:hover {
        path {
            fill: #E80000;
            transition: 0.2s ease;
        }
    }
`

export const TwitterSVG = styled.svg`
    &:hover {
        path {
            fill: #0094FF;
            transition: 0.2s ease;
        }
    }
`
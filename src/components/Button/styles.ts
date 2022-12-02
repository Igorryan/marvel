import styled from "styled-components";

export const Container = styled.button`
    display: inline-block;

    padding: 14px 28px;

    transform: skewX(-8deg);
    transition: .7s ease;

    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;

    color: #fff; 
    background-color: red;

    position: relative;

    &:hover {
        transform: skewX(-8deg) scale(1.05);

    &::after,
        &::before {
            opacity: 1;
        }
    }
`

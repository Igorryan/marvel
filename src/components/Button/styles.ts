import styled, { keyframes } from "styled-components";

const skBounce = keyframes`
    0%, 80%, 100% { 
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% { 
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
`

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

export const Spinner = styled.div`
    margin: 0 auto;
    text-align: center;
    position:relative;

    > div {
    width: 10px;
    height: 10px;
    background-color: #fff;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${skBounce} 1.4s infinite ease-in-out both;
    animation: ${skBounce} 1.4s infinite ease-in-out both;
    }

    .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
    }

    .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    }
`
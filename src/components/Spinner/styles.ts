import styled, { css, keyframes } from "styled-components";
import { IProps } from ".";

const BounceAnimation = keyframes`
    0%, 80%, 100% { 
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% { 
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
`

export const Container = styled.div<IProps>`
    margin: 0 auto;
    text-align: center;
    position:relative;

    > div {
    width: 10px;
    height: 10px;
    background-color: #fff;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${BounceAnimation} 1.4s infinite ease-in-out both;
    animation: ${BounceAnimation} 1.4s infinite ease-in-out both;

     &:first-of-type {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
     }

     &:nth-of-type(2) {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
     }
    }

    ${props => props.color && css`
        > div {
            background-color: ${props.color};
        }
    `}
`
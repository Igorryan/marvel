import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 950px;
    margin: -70px auto 0;
    padding: 42px 120px;

    z-index: 1;
    
    background-color: #ffffff;
    color: #1F1F1F;

    position: relative;

    h1 {
        font-size: 38px;
        font-weight: 800;

        text-align: center;
        text-transform: uppercase;
    }

    p {
        margin: 4px 0 24px;

        font-size: 19px;

        text-align: center;
        text-transform: uppercase;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        position: absolute;

        width: 100%;
        height: 1px;

        left: 0;

        background: #000000;

        z-index: -1;
    }
`
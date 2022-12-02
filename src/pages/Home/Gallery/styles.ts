import styled from "styled-components";

export const Container = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;

    margin: 0 auto;

    width: fit-content;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
`

export const Card = styled.div`
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: fit-content;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;

        width: 130px;
        height: 2px;

        background-color: #4B4B4B;
    }

    img {
        width: 276px;
        height: 414px;

        object-fit: cover;

        border: 1px solid grey;
    }

    strong {
        font-size: 22px;

        margin-top: 16px;
    }

    span {
        letter-spacing: 1px;
        text-transform: uppercase;

        margin-top: 8px;
        margin-bottom: 16px;

        font-size: 14px;
    }
`
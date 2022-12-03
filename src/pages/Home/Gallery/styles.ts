import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    width: fit-content;
    max-width: 1200px;

    margin: 0 auto;
    padding-bottom: 50px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 276px;
    position: relative;

    margin-bottom: 60px;

    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;

        width: 130px;
        height: 2px;

        background-color: #4B4B4B;
    }

    &:hover {
        &::after {
            background-color: red;
            transition: 0.2s ease;
        }
    }

    img {
        width: 276px;
        height: 414px;

        object-fit: cover;

        border: 1px solid grey;

        transition: all 0.2s ease;
        &:hover {
            transform: translateX(-5px) translateY(-5px);
        }
    }

    strong {
        width: 100%;

        overflow: hidden;

        font-size: 22px;
        text-overflow: ellipsis;
        text-align: center;

        white-space: nowrap;

        margin-top: 16px;
    }

    span {
        width: 100%;
        
        overflow: hidden;
        
        text-transform: uppercase;
        text-overflow: ellipsis;
        text-align: center;

        white-space: nowrap;
        letter-spacing: 1px;

        margin-top: 8px;
        margin-bottom: 16px;

        font-size: 14px;
    }
`

export const ButtomEndContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: -20px auto 10px;

    position: relative;

    width: 100%;

    &::after {
        content: '';
        position: absolute;

        width: 100%;
        max-width: 1200px;
        height: 1px;

        left: 0;

        background: #000000;

        z-index: -1;
    }
`

export const Shadow = styled.div`
    width: 276px;
    height: 414px;

    position: relative;

    &.dashed-shadow {
        color: #151515;
    }

    @keyframes dash-animation {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 100% 0;
        }
    }

    &.dashed-shadow:before {
        content: " ";
        z-index: -1;
        position: absolute;
        bottom: 0px;
        right: 0px;
        top: 0px;
        left: 0px;
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjEuMCIgeDI9IjEuMCIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIxMi41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIvPjxzdG9wIG9mZnNldD0iMTIuNSUiIHN0b3AtY29sb3I9IiNlOGUzYzciIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIzNy41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjM3LjUlIiBzdG9wLWNvbG9yPSIjZThlM2M3Ii8+PHN0b3Agb2Zmc2V0PSI2Mi41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIvPjxzdG9wIG9mZnNldD0iNjIuNSUiIHN0b3AtY29sb3I9IiNlOGUzYzciIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSI4Ny41JSIgc3RvcC1jb2xvcj0iI2U4ZTNjNyIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9Ijg3LjUlIiBzdG9wLWNvbG9yPSIjZThlM2M3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g');
        background-size: 100%;
        background-image: -moz-linear-gradient(45deg, #151515 12.5%, rgba(232, 227, 199, 0) 12.5%, rgba(232, 227, 199, 0) 37.5%, #151515 37.5%, #151515 62.5%, rgba(232, 227, 199, 0) 62.5%, rgba(232, 227, 199, 0) 87.5%, #151515 87.5%);
        background-image: -webkit-linear-gradient(45deg, #151515 12.5%, rgba(232, 227, 199, 0) 12.5%, rgba(232, 227, 199, 0) 37.5%, #151515 37.5%, #151515 62.5%, rgba(232, 227, 199, 0) 62.5%, rgba(232, 227, 199, 0) 87.5%, #151515 87.5%);
        background-image: linear-gradient(45deg, #151515 12.5%, rgba(232, 227, 199, 0) 12.5%, rgba(232, 227, 199, 0) 37.5%, #151515 37.5%, #151515 62.5%, rgba(232, 227, 199, 0) 62.5%, rgba(232, 227, 199, 0) 87.5%, #151515 87.5%);
        background-size: 6px 6px;
        transition: all 0.5s ease;
    }

    &.dashed-shadow:hover:before {
        animation: dash-animation 30s infinite linear;
    }

    &.dashed-shadow:after {
        z-index: -1;
        position: absolute;
        right: 0px;
        bottom: 0px;
        color: #151515;
        transition: all 0.5s ease;
    }

    &:hover {
        &.dashed-shadow:before {
            bottom: -5px;
            right: -5px;
            top: 0px;
            left: 0px;
        }

        &.dashed-shadow:after {
            right: -5px;
            bottom: -5px;
        }
    }

`
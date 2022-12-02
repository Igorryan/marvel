import styled from "styled-components";

export const Container = styled.footer`
    background-color: #1F1F1F;
`

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const ColumnsContainer = styled.section`
    display: flex;
    justify-content: space-around;

    padding: 50px 30px 30px;

    border-bottom: 1px solid grey;
`

export const Column = styled.ul`
    list-style: none;

    color: #fff;

    strong{
        text-transform: uppercase;
        display: block;
        margin-bottom: 10px;
    }

    li {
        font-size: 14px;
        margin-bottom: 8px;
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`

export const Logo = styled.img`
    width: 70px;
`

export const LinksContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    width: 100%;

    li {
        cursor: pointer;
    }
`

export const SocialNetworkingContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

    width: 160px;
    height: 100%;

    margin-left: 14px;
    padding-bottom: 12px;
`
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;

    margin: 0 auto;

    max-width: 1200px;
    height: 104px;
`

export const LogoContainer = styled.div`
    display: flex;
`

export const Logo = styled.img`
    height: 100%;
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

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

export const TopOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;

    margin-top: 10px;

    gap: 20px;

    a {
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: -0.5px;

        font-size: 14px;
        font-weight: medium;

        color: #515151;
    }
`

export const BottomOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 24px;

    margin-bottom: 10px;
`

export const SearchResultsContainer = styled.ul`
    list-style: none;

    width: 380px;
    max-height: 400px;

    display: flex;
    flex-direction: column;

    position: absolute;
    right: 5px;
    top: 100px;

    background-color: #fff;
    z-index: 2;
    
    overflow-x: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;


    border-radius: 8px;


    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #151515;
        border-radius: 50px;
        border: 4px solid #fff; 
    }

`

export const Item = styled.li`
    display: flex;
    align-items: center;
    
    width: 100%;
    padding: 10px;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    img {
        min-width: 30px;
        min-height: 40px;
        max-width: 30px;
        max-height: 40px;

        margin-right: 10px;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

        object-fit: cover;
    }

    h4 {
        margin-bottom: 4px;
    }
`

export const SearchingAlert = styled.div`
    text-align: center;
    font-size: 16px;
    padding: 20px 0;
`
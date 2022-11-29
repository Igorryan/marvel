import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;

    margin: 0 auto;

    max-width: 1200px;
    height: 124px;
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
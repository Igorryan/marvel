import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 70px;

    background: #EBEBEB;
    margin-bottom: 50px;

    ul{
        list-style: none;

        display: flex;
        align-items: center;
        gap: 150px;

        width: 100%;
        max-width: 950px;

        strong {
            color: #363636;
        }

        li {
            text-transform: uppercase;
            cursor: pointer;

        }

        span {
            position: relative;

            &::after {
                content: '';

                position: absolute;
                right: -22px;
                top: 6px;

                border-top: 5px solid #5F5F5F;
                border-right: 5px solid transparent;
                border-bottom: 5px solid transparent;
                border-left: 5px solid transparent;
            }

            &:hover {
                color: #161616;

                &::after {
                    border-top: 5px solid red;
                }
            }
        }
    }
`

import styled from "styled-components";

import bg from '../../images/bg.png';

export const Container = styled.div`
    background-color: #1D1D1D;
    background-image: url(${bg});
    background-size: cover cover;
    background-position: center center;
    color: #D2D2D2;
    height: 100vh;
    width: 100vw;

    @media (max-width: 500px) {
        height: 100%;
        max-width: 500px;
    }
`;

export const Main = styled.div`
    display: flex;
    
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const LeftMain = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-left: 120px;
    justify-content: center;
    align-items: start;

    h1 {
        font-family: 'Overpass', sans-serif;
        font-weight: 700;
        font-size: 40px;
        margin: 0;
    }

    p {
        font-family: 'Overpass', sans-serif;
        font-weight: 400;
        font-size: 20px;
    }

    button {
        height: 58px;
        width: 241px;
        border: none;
        border-radius: 55px;
        cursor: pointer;
        background-color: #27AE60;
        font-family: Overpass;
        font-size: 20px;
        font-weight: 400;
        color: #FFF;
    }

    button:hover {
        opacity: 0.7;
    }

    @media (max-width: 500px) {
        padding: 0px 20px;
        margin-top: 20px;

        h1 {
            font-size: 30px;
        }
    
        p {
            font-size: 16px;
            line-height: 30px;
        }
    
        button {
            height: 48px;
            width: 200px;
            font-size: 16px;
        }
    }
`;

export const RightMain = styled.div`
    flex: 1;
    padding-right: 120px;

    img {
        max-widht: 550px;
        max-height: 550px;
        margin: 0;
        margin-top: -20px;
    }

    @media (max-width: 500px) {
        padding-right: 20px;
        height: 100vh;

        img {
            max-widht: 250px;
            max-height: 250px;
            margin-top: 80px;
    }
`;
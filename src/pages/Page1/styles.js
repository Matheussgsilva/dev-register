import styled from "styled-components";

import bg from '../../images/bg.png';

export const Container = styled.div`
    background-color: #1D1D1D;
    background-image: url(${bg});
    background-size: cover auto;
    background-position: center center;
    color: #D2D2D2;
    height: 100vh;
    width: 100vw;
`;

export const Main = styled.div`
    display: flex;
    
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
`;

export const RightMain = styled.div`
    flex: 1;
    padding-right: 120px;

    img {
        widht: 550px;
        height: 550px;
        margin: 0;
        margin-top: -20px;
    }
`;
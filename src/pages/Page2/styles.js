import styled from "styled-components";

export const Container = styled.div`
    background-color: #1D1D1D;
    color: #D2D2D2;
    height: 100vh;
`;

export const Btn = styled.div`
    text-align: right;
    margin-right: 120px;
    margin-bottom: 40px;
    margin-top: 10px;

    button {
        width: 190px;
        height: 35px;
        background-color: #27AE60;
        border-radius: 30px;
        border: none;
        color: #FFF;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }

    @media (max-width: 500px) {
        text-align: center;
        margin: 0px;
        margin-top: 20px;
    }
`;

export const DevArea = styled.div`
    width: 90vw;
    height: 450px;
    margin: auto;
    display: flex;
    justify-content: ${props => props.justify.length < 4 ? 'center' : 'none'};
    overflow-x: auto;
    scroll-behavier: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 500px) {
        margin-top: 20px;
        justify-content: flex-start;
    }
`;

export const ArrowArea = styled.div`
    display: flex;
    justify-content: center;

    button {
        background: transparent;
        border: none;
        cursor: pointer;

        &:first-child img {
            transform: rotate(180deg);
        }
    }
`;
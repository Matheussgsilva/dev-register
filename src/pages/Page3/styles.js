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
`;

export const DevArea = styled.div`
    display: flex;
    justify-content: center;
`;
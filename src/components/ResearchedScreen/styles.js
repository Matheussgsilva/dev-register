import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba( 29, 29, 29, .6);
    margin-bottom: -100vh;   
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px solid #27AE60;
        margin: auto;
    }
`;

export const Form = styled.div`
    width: 400px;
    height: 510px;
    background-color: #343333;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 20px;
   

    h3 {
        font-family: 'Overpass', sans-serif;
        font-weight: 700;
        font-size: 30px;
        margin: 0;
        margin-bottom: 10px;
        margin-top: 10px;
        text-align: center;
    }
`;

export const Label = styled.label`
    display: block;
    margin-top: 20px;
    font-family: 'Overpass', sans-serif;
    font-size: 18px;
`;

export const Span = styled.span`
    font-family: 'Overpass', sans-serif;
    font-size: 18px;
    margin-top: 10px;
`;

export const BtnArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const Btn = styled.button`
    width: 150px;
    height: 40px;
    background-color: ${props => props.color ? '#A9A9A9' : '#27AE60'};
    cursor: pointer;
    border-radius: 30px;
    font-family: 'Overpass', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    border: none;


    &:hover {
        opacity: 0.8;
    }
`;
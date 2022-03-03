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
        margin-bottom: 20px;
    }
`;

export const Label = styled.label`
    display: block;
    margin-top: 20px;
    font-family: 'Overpass', sans-serif;
    font-size: 18px;
`;

export const Input = styled.input`
    font-family: 'Overpass', sans-serif;
    font-size: 18px;
    width: 98%;
    margin-top: 5px;
    border-radius: 20px;
    border: none;
    padding: 5px 10px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, .4);
`;

export const BtnArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
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
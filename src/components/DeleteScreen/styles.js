import styled from 'styled-components'

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

export const DeleteArea = styled.div`
    width: 400px;
    height: 250px;
    background-color: #343333;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h3 {
        font-family: 'Overpass', sans-serif;
        font-weight: 700;
        font-size: 25px;
        margin: 0;
        margin-bottom: 20px;
    }

    @media (max-width: 500px) {
        width: 350px;
        padding: 20px;

        h3 {
            font-size: 20px;
            margin-bottom: 15px;
        }
    }
`;

export const BtnArea = styled.div`
    margin-top: 25px;
`;

export const Btn = styled.button`
    color: #FFF;
    width: 150px;
    height: 40px;
    background-color: ${props => props.color ? '#DBB801' : '#F42626'};
    cursor: pointer;
    border-radius: 30px;
    font-family: 'Overpass', sans-serif;
    font-size: 18px;
    font-weight: 500;
    border: none;
    margin: 0px 10px;


    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 500px) {
        width: 100px;
        height: 35px;
        font-size: 16px;
    }
`;
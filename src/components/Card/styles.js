import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 400px;
    margin-right: 50px;

    @media (max-width: 500px) {
        width: 200px;
        height: 350px;
        margin-right: 30px;
        margin-top: 20px;
    }
`;

export const Card = styled.div`
    width: 300px;
    height: 330px;
    background-color: #3E3E3E;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px solid #27AE60;
    }

    hr {
        width: 125px;
        border: 1px solid #27AE60;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 25px;
        margin: 0;
    }

    spam {
        font-size: 15px;
    }

    @media (max-width: 500px) {
        width: 200px;
        height: 230px;
        padding-top: 20px;

        img {
            width: 100px;
            height: 100px;
        }

        h2 {
            font-size: 20px;
        }
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;

    img {
        width: 30px;
        height: 30px;
        cursor: pointer;
        border: none;
        margin-right: 10px;
    }

    button:hover {
        opacity: 0.8;
    }

    @media (max-width: 500px) {
        margin-top: 20px;
        margin-bottom: 30px

        img {
            width: 25px;
            height: 25px;
        }
    }
`;

export const BtnArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    @media (max-width: 500px) {
        margin-top: 25px;
    }
`;

export const Btn = styled.div`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color ? '#DBB801' : '#F42626'};
    cursor: pointer;
    border-radius: 30px;
    font-size: 18px;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 500px) {
        width: 85px;
        height: 35px;
        font-size: 15px;
    }
`;
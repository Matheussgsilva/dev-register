import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    height: 200px;
    padding: 30px 120px 0px;

    @media (max-width: 500px) {
        padding: 10px 30px 0px;
        flex-direction: column;
        align-items: center;
    }
`;

export const HeaderIcon = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 280px;
    
    img {
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-right: 20px;
    }

    @media (max-width: 500px) {
        width: 200px;
        margin-bottom: 20px;

        img {
            width: 15px;
            height: 15px;
            cursor: pointer;
            margin-right: 15px;
        }
    }
`;

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: center;
    padding-right: 120px;
    flex: 1;

    img {
        widht: 224px;
        height: 42px;
    }

    @media (max-width: 500px) {
        padding-right: 100px;
        margin-bottom: 20px;

        img {
            widht: 180px;
            height: 40px;
        }
    }
`;

export const HeaderSearch = styled.div`
    visibility: ${props => props.display};
    display: flex;
    align-items: center;
    margin-right: -12px;

    input {
        widht: 280px;
        height: 35px;
        border-radius: 10px 0px 0px 10px;
        outline: 0;
        border: none;
        padding: 0px 10px;
    }

    @media (max-width: 500px) {


        input {
            widht: 200px;
        }
    }
`;

export const HeaderSearchImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    height: 35px;
    width: 35px;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
`;
import * as C from './styles';

import github from '../../images/github.png';
import linkedin from '../../images/linkedin-logo.png';

export const Card = ({ item, onVisible }) => {
    
    return (
        <C.Container>
            <C.Card>
                <img src={`https://github.com/${item.github}.png`} alt="Foto de perfil do Github" />
                <hr></hr>
                <h2>{item.name}</h2>
                <span>{item.position}</span>
                <C.Icon>
                    <a href={`https://github.com/${item.github}`} target='_blank' rel='noreferrer'>
                        <img src={github} alt="Github logo" />
                    </a>
                    <a href={`https://linkedin.com/in/${item.linkedin}`} target='_blank' rel='noreferrer'>
                    <img src={linkedin} alt="Linkedin logo" />
                    </a>
                </C.Icon>
            </C.Card>
            <C.BtnArea>
                <C.Btn color='warning'>Editar</C.Btn>
                <C.Btn 
                    onClick={onVisible} 
                >Deletar</C.Btn>
            </C.BtnArea>
        </C.Container>
    );
}
import * as C from './styles';

import { useState } from 'react';

export const EditScreen = ({  onHidden, newAdd, text, data }) => {

    const [nameField, setNameField] = useState(data.name);
    const [positionField, setPositionField] = useState(data.position);
    const [githubField, setGithubField] = useState(data.github);
    const [linkedinField, setLinkedinField] = useState(data.linkedin);
    
    const newDev = {
        name: nameField,
        position: positionField,
        github: githubField,
        linkedin: linkedinField,
    };
       
    return (
        <C.Container>
            <C.Form>
                <h3>{text} Desenvolvedor</h3>
                <C.Label>Nome:</C.Label>
                <C.Input 
                    placeholder='Adicione o seu nome'
                    value={nameField} 
                    onChange={e => setNameField(e.target.value)}>
                </C.Input>
                <C.Label>Cargo:</C.Label>
                <C.Input 
                    placeholder='Adicione o seu cargo'
                    value={positionField} 
                    onChange={e => setPositionField(e.target.value)}>
                </C.Input>
                <C.Label>Github:</C.Label>
                <C.Input 
                    placeholder='Adicione o seu usuário'
                    value={githubField} 
                    onChange={e => setGithubField(e.target.value)}>
                </C.Input>
                <C.Label>Linkedin:</C.Label>
                <C.Input 
                    placeholder='Adicione o seu usuário'
                    value={linkedinField} 
                    onChange={e => setLinkedinField(e.target.value)}>
                </C.Input>
                <C.BtnArea>
                    <C.Btn color='color' onClick={onHidden} >Cancelar</C.Btn>
                    <C.Btn onClick={() => newAdd(newDev, onHidden())}>{text}</C.Btn>
                </C.BtnArea>
            </C.Form>
        </C.Container>
    );
}
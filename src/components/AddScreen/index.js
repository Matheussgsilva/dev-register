import * as C from './styles';

import { useState } from 'react';

export const AddScreen = ({ visibility, onHidden, newAdd, text }) => {

    const [nameField, setNameField] = useState('');
    const [positionField, setPositionField] = useState('');
    const [githubField, setGithubField] = useState('');
    const [linkedinField, setLinkedinField] = useState('');

    const newDev = {
        name: nameField,
        position: positionField,
        github: githubField,
        linkedin: linkedinField,
    };    
    
    const clearField = () => {
        setNameField('')
        setPositionField('')
        setGithubField('')
        setLinkedinField('')
    };
    
    return (
        <C.Container visibility={visibility}>
            <C.Form>
                <h3>{text} Desenvolvedor</h3>
                <C.Label>Nome:</C.Label>
                <C.Input 
                    placeholder='Adicione o seu nome'
                    value={nameField} 
                    onChange={e => setNameField(e.target.value)}
                    autoFocus>
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
                    <C.Btn onClick={() => newAdd(newDev, onHidden(), clearField())}>{text}</C.Btn>
                </C.BtnArea>
            </C.Form>
        </C.Container>
    );
}
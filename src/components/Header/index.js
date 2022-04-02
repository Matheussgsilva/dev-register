import * as C from './styles'
import { useState } from 'react';

import linkedinIcon from '../../images/linkedin.png';
import facebokIcon from '../../images/facebook.png';
import discordIcon from '../../images/discord.png';
import logo from '../../images/Logo.png';

export const Header = ({ display, onEnter }) => {

    const [name, setName] = useState('')

    const handleKeyUp = (e) => {
        if(e.code === 'Enter'  && name !== '') {
            onEnter(name);
        }
    }

    return (
        <C.Header>
                <C.HeaderIcon>
                    <img src={linkedinIcon} alt='Logo Linkedin' />
                    <img src={facebokIcon} alt='Logo Facebook' />
                    <img src={discordIcon} alt='Logo Discord' />
                </C.HeaderIcon>
                <C.HeaderLogo>
                    <img src={logo} alt='Logo Balle Dev' />
                </C.HeaderLogo>
                <C.HeaderSearch display={display} >
                    <input 
                        type='text' 
                        placeholder='Buscar'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onKeyUp={handleKeyUp}
                        />
                </C.HeaderSearch>             
            </C.Header>
    );
}
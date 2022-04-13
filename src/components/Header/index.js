import * as C from './styles'
import { useState } from 'react';

import linkedinIcon from '../../images/linkedin.png';
import facebokIcon from '../../images/facebook.png';
import discordIcon from '../../images/discord.png';
import logo from '../../images/Logo.png';
import searchIcon from '../../images/loupe.png';

export const Header = ({ display, devName, onSearch }) => {

    const [name, setName] = useState('');

    return (
        <C.Header>
                <C.HeaderIcon>
                    <a href='https://linkedin.com/in/matheus-sgsilva' target='_blank' rel='noreferrer'>
                        <img src={linkedinIcon} alt='Logo Linkedin' />
                    </a>
                    <a href='https://github.com/matheussgsilva' target='_blank' rel='noreferrer'>
                        <img src={facebokIcon} alt='Logo Facebook' />
                    </a>
                    <a href='https://matheussilva.dev.br' target='_blank' rel='noreferrer'>
                        <img src={discordIcon} alt='Logo Discord' />
                    </a>
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
                        />
                    <C.HeaderSearchImage>
                        {name !== '' && 
                            <img src={searchIcon} alt='Lupa' onClick={() => devName(name, onSearch(), setName(''))} />
                        }
                    </C.HeaderSearchImage>
                </C.HeaderSearch>             
            </C.Header>
    );
}
import * as C from './styles';
import { useState } from 'react'

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { PopUpScreen } from '../../components/PopUpScreen';

import { dev } from '../../data/dev';

export const Page2 = () => {
    const [popUp, setPopUp] = useState('hidden');
    const [newDev, setNewDev] = useState({})

    const handleClickAdd = () => {
        setPopUp('visible');
    }

    const handleHidden = () => {
        setPopUp('hidden')
    }

    console.log(newDev)

    return (
        <C.Container>
            <PopUpScreen visibility={popUp} onHidden={handleHidden} newDev={setNewDev} />
            <Header />
            <C.Btn >
                <button onClick={handleClickAdd} >Adicionar desenvolvedor</button>
            </C.Btn>
            <C.DevArea>
            {dev.map(( item, index ) => (
                <Card  key={index} item={item}/>))}
            </C.DevArea>
        </C.Container>
    );
}
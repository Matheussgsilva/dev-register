import * as C from './styles';
import { useState } from 'react'

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { PopUpScreen } from '../../components/PopUpScreen';

import { dev } from '../../data/dev';

export const Page2 = () => {
    const [popUp, setPopUp] = useState('hidden');
    const [newDev, setNewDev] = useState(dev);
    const [listDev, setListDev] = useState(dev);

    const handleClickAdd = () => {
        setPopUp('visible');
    }

    const handleHidden = () => {
        setPopUp('hidden');

        let newList = [...dev];
        newList.push({
            id: dev.length + 1,
            name: newDev.name,
            position: newDev.position,
            github: newDev.github,
            linkedin: newDev.linkedin,
        });
        setListDev(newList);
    }

    console.log(newDev)

    return (
        <C.Container>
            <PopUpScreen 
                visibility={popUp} onHidden={handleHidden} 
                newAdd={newDev => setNewDev(newDev)} 
            />
            <Header />
            <C.Btn >
                <button onClick={handleClickAdd} >Adicionar desenvolvedor</button>
            </C.Btn>
            <C.DevArea>
            {listDev.map(( item, index ) => (
                <Card  key={index} item={item}/>))}
            </C.DevArea>
        </C.Container>
    );
}
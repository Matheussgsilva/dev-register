import * as C from './styles';
import { useState } from 'react'

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { PopUpScreen } from '../../components/PopUpScreen';

import { dev } from '../../data/dev';

export const Page2 = () => {
    const [visible, setVisible] = useState('hidden');
    const [newDev, setNewDev] = useState({});
    const [listDev, setListDev] = useState(dev);

    const handleClickAdd = () => {
        setVisible('visible');
    }

    const handleHidden = () => {
        setVisible('hidden');

        let newList = [...listDev];
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
                visibility={visible} onHidden={handleHidden} 
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
import * as C from './styles';
import { useState, useEffect } from 'react'

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { PopUpScreen } from '../../components/PopUpScreen';
import { DeleteScreen } from '../../components/DeleteScreen';

import { dev } from '../../data/dev';

export const Page2 = () => {
    const [visible, setVisible] = useState(false);
    const [visibleDelete, setVisibleDelete] = useState(false)
    const [newDev, setNewDev] = useState(null);
    const [listDev, setListDev] = useState(dev);

    const handleClickAdd = () => {
        setVisible(true);
    }

    const handleHidden = () => {
        setVisible(false);
    }

    const handleHiddenDelete = () => {
        setVisibleDelete(false);
    }

    const handleVisibleDelete = () => {
        setVisibleDelete(true);
    }

    useEffect (() => {

        const setNewDev = () => {
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
         newDev &&  setNewDev()
      }, [newDev])

    return (
        <C.Container>
            {visible &&
                <PopUpScreen 
                    onHidden={handleHidden} 
                    newAdd={newDev => setNewDev(newDev)} 
                />
            }
            {visibleDelete &&
                <DeleteScreen 
                    onHidden={handleHiddenDelete}
                    devList={listDev}
                />
            }
            <Header />
            <C.Btn >
                <button onClick={handleClickAdd} >Adicionar desenvolvedor</button>
            </C.Btn>
            <C.DevArea>
            {listDev.map(( item, index ) => (
                <Card  
                    key={index} 
                    item={item} 
                    onVisible={handleVisibleDelete} 
                />))}
            </C.DevArea>
        </C.Container>
    );
}
import * as C from './styles';
import { useState, useEffect } from 'react'

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { AddScreen } from '../../components/AddScreen';
import { EditScreen } from '../../components/EditScreen';
import { ResearchedScreen } from '../../components/ResearchedScreen';
import { DeleteScreen } from '../../components/DeleteScreen';

import { dev } from '../../data/dev';

export const Page2 = () => {
    const [addVisible, setAddVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [researchedVisible, setResearchedVisible] = useState(false);
    const [newDev, setNewDev] = useState(null);
    const [listDev, setListDev] = useState(dev);
    const [user, setUser] = useState([]);
    const [popUpText, setPopUpText] = useState('');
    const [researchedDev, setResearchedDev] = useState([]);

    const handleSearch = (name) => {
        let dev = listDev.filter(item => (item.name.includes(name)));
        setResearchedDev(dev);
        setResearchedVisible(true);
    };

    const handleClickAdd = () => {
        setAddVisible(true);
        setPopUpText('Adicionar');
    };

    const handleHidden = () => {
        setAddVisible(false);
    };

    const handleHiddenDelete = () => {
        setVisibleDelete(false);
    };

    const handleVisibleDelete = () => {
        setVisibleDelete(true);
    };

    const handleEdit = () => {
        setEditVisible(true);
        setPopUpText('Editar');
    };

    const handleEditHidden = () => {
        setEditVisible(false);
    };

    const handleResearchedHidden = () => {
        setResearchedVisible(false);
    };

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
      }, [newDev]);

    return (
        <C.Container>
            {addVisible &&
                <AddScreen 
                    text={popUpText}
                    onHidden={handleHidden} 
                    newAdd={newDev => setNewDev(newDev)}
                />
            }
            {editVisible &&
                <EditScreen 
                    text={popUpText}
                    onHidden={handleEditHidden} 
                    newAdd={editedList => setListDev(editedList)}
                    data={user}
                    list={listDev}
                />
            }
            {researchedVisible &&
                <ResearchedScreen
                    onHidden={handleResearchedHidden}
                    data={researchedDev}
                />
            }
            {visibleDelete &&
                <DeleteScreen 
                    onHidden={handleHiddenDelete}
                    devList={listDev}
                    user={user.name}
                    deleteUser={deletedUser => setListDev(deletedUser)}
                />
            }
            <Header onEnter={handleSearch} />
            <C.Btn >
                <button onClick={handleClickAdd} >Adicionar desenvolvedor</button>
            </C.Btn>
            <C.DevArea>
                {listDev.map(( item, index ) => (
                    <Card  
                        key={index} 
                        item={item} 
                        onVisible={handleVisibleDelete}
                        onEdit={handleEdit}
                        handleUser={user => setUser(user)}
                    />
                ))}
                {listDev === 0 &&
                    <h1>Não há Devs cadastrados</h1>
                }
            </C.DevArea>
        </C.Container>
    );
}
import * as C from './styles';
import { useState, useEffect } from 'react';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { AddScreen } from '../../components/AddScreen';
import { EditScreen } from '../../components/EditScreen';
import { DeleteScreen } from '../../components/DeleteScreen';

import { dev } from '../../data/dev';

export const Page2 = () => {
    const [addVisible, setAddVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [newDev, setNewDev] = useState(null);
    const [listDev, setListDev] = useState(dev);
    const [user, setUser] = useState([]);
    const [popUpText, setPopUpText] = useState('');
    const [showDev, setShowDev] = useState('full');
    const [devSearch, setDevSearch] = useState('');

    const handleSearch = () => {
        setShowDev('search');
    };

    const handleShowAll = () => {
        setShowDev('full');
    }

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

      const filteredList = listDev.filter(item => (item.name.includes(devSearch)))
      console.log("Lista Filtrada: ", filteredList)

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
            {visibleDelete &&
                <DeleteScreen 
                    onHidden={handleHiddenDelete}
                    devList={listDev}
                    user={user.name}
                    deleteUser={deletedUser => setListDev(deletedUser)}
                />
            }
            <Header 
                onSearch={handleSearch} 
                devName={devName => setDevSearch(devName)}
            />
            {showDev === 'full' &&
                <C.Btn >
                    <button onClick={handleClickAdd} >Adicionar desenvolvedor</button>
                </C.Btn>}
            {showDev === 'search' &&
                <C.Btn >
                    <button onClick={handleShowAll} >Exibir todos</button>
                </C.Btn>}
            <C.DevArea>
                {showDev === 'full' &&
                listDev.map(( item, index ) => (
                    <Card  
                        key={index} 
                        item={item} 
                        onVisible={handleVisibleDelete}
                        onEdit={handleEdit}
                        handleUser={user => setUser(user)}
                    />
                ))}
                {showDev === 'search' && 
                    listDev.filter(item => (item.name.includes(devSearch))).map(( item, index ) => (
                    <Card  
                        key={index} 
                        item={item} 
                        onVisible={handleVisibleDelete}
                        onEdit={handleEdit}
                        handleUser={user => setUser(user)}
                    /> 
                ))}
                {showDev === 'search' && listDev.filter(item => (item.name.includes(devSearch))).length === 0 &&
                    <h1>Dev não encontrado</h1>
                }  
                {listDev.length === 0 &&
                    <h1>Não há Devs cadastrados</h1>
                }
            </C.DevArea>
        </C.Container>
    );
}
import * as C from './styles';
import { useState, useEffect, useRef } from 'react';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { AddScreen } from '../../components/AddScreen';
import { EditScreen } from '../../components/EditScreen';
import { DeleteScreen } from '../../components/DeleteScreen';

import { dev } from '../../data/dev';
import chevron from '../../images/chevron.png';
import developerIcon from '../../images/developer.png';

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

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRigthClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

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
            <C.DevArea ref={carousel} justify={listDev}>
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
                <C.FilteredCard>
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
                </C.FilteredCard>
                {showDev === 'search' && listDev.filter(item => (item.name.includes(devSearch))).length === 0 &&
                    <C.MesageArea>
                        <img src={developerIcon} alt="Ícone de pessoa"/>
                        <h1>Dev não encontrado</h1>
                    </C.MesageArea>
                }  
                {showDev === 'full' && listDev.length === 0 &&
                    <C.MesageArea>
                        <img src={developerIcon} alt="Ícone de pessoa"/>
                        <h1>Não há Devs cadastrados</h1>
                    </C.MesageArea>
                }
            </C.DevArea>
            {listDev.length > 3 &&
                <C.ArrowArea>
                    <button onClick={handleLeftClick}><img src={chevron} alt='left arrow' /></button>
                    <button onClick={handleRigthClick}><img src={chevron} alt='rigth arrow' /></button>
                </C.ArrowArea>
            }
        </C.Container>
    );
}
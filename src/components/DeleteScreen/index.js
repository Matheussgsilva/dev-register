import * as C from './styles';

import { useEffect, useState } from 'react';

export const DeleteScreen = ({ onHidden, deleteUser, devList, user }) => {
    const [listDev, setListDev] = useState(devList);
    
       
    useEffect (() => {
            let newList = listDev.filter(item => (item.name !== user));
            setListDev(newList);
    }, [])
    
    return (
        <C.Container>
            <C.DeleteArea>
                <h3>Deseja confirmar a operação?</h3>
                <C.BtnArea>
                        <C.Btn color='color' onClick={onHidden} >Cancelar</C.Btn>
                        <C.Btn onClick={() => deleteUser(listDev, onHidden())}>Deletar</C.Btn>
                    </C.BtnArea>
            </C.DeleteArea>
        </C.Container>
    );
}
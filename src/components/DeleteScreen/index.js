import * as C from './styles';

export const DeleteScreen = ({onHidden}) => {

    
    return (
        <C.Container>
            <C.DeleteArea>
                <h3>Deseja confirmar a operação?</h3>
                <C.BtnArea>
                        <C.Btn color='color' onClick={onHidden} >Cancelar</C.Btn>
                        <C.Btn>Deletar</C.Btn>
                    </C.BtnArea>
            </C.DeleteArea>
        </C.Container>
    );
}
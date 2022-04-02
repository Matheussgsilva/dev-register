import * as C from './styles';

export const ResearchedScreen = ({ visibility, onHidden, data }) => {
    
    return (
        <C.Container visibility={visibility}>
            <C.Form>
                <C.Image>
                    <img src={`https://github.com/${data[0].github}.png`} alt="Foto de perfil do Github" />
                </C.Image>
                <h3>{data[0].name}</h3>
                <C.Label>Cargo:</C.Label>
                <C.Span>{data[0].position}</C.Span>
                <C.Label>Github:</C.Label>
                <C.Span>github.com/{data[0].github}</C.Span>
                <C.Label>Linkedin:</C.Label>
                <C.Span>linkedin.com/in/{data[0].linkedin}</C.Span>
                <C.BtnArea>
                    <C.Btn color='color' onClick={onHidden} >Fechar</C.Btn>
                </C.BtnArea>
            </C.Form>
        </C.Container>
    );
}
import * as C from './styles';

import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import programer from '../../images/programer.png';

export const Page1 = () => {

    return (
        <C.Container>
            <Header display='hidden' />
            <C.Main>
                <C.LeftMain>
                    <h1>O maior banco de devs do Brasil</h1>
                    <p>Nao importa se front ou back end, fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
                    <Link to='/devs'>
                        <button>Entre agora</button>
                    </Link>
                </C.LeftMain>
                <C.RightMain>
                    <img src={programer} alt='Homem programando' />
                </C.RightMain>
            </C.Main>
        </C.Container>
    );
}
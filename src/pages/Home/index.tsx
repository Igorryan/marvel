import * as S from './styles'
import { Header } from './Header';
import { Navbar } from './Navbar';

export function Home() {
    return (
        <S.Container>
            <Header />
            <Navbar />
        </S.Container>
    )
}
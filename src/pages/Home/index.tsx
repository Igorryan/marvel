import * as S from './styles'
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Gallery } from './Gallery';

export function Home() {
    return (
        <S.Container>
            <Header />
            <Navbar />
            <Gallery />
        </S.Container>
    )
}
import * as S from './styles'
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Gallery } from './Gallery';
import { Button } from '../../components/Button';

export function Home() {
    return (
        <S.Container>
            <Header />
            <Navbar />
            <Gallery />
            <S.Banner>
                <h1>The hunt for wolverine kicks off this april</h1>
                <p>Charles Soule and David Marquez unravel the mystery</p>

                <S.ButtonContainer>
                    <Button>READ UP</Button>
                </S.ButtonContainer>

            </S.Banner>

        </S.Container>
    )
}
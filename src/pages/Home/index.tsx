import * as S from './styles'
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Carousel } from './Carousel';
import { Button } from '../../components/Button';
import { Filterbar } from './Filterbar';
import { Gallery } from './Gallery';
import { Footer } from './Footer';

export function Home() {
    return (
        <S.Container>
            <Header />
            <Navbar />
            <Carousel />

            <S.Banner>
                <h1>The hunt for wolverine kicks off this april</h1>
                <p>Charles Soule and David Marquez unravel the mystery</p>

                <S.ButtonContainer>
                    <Button>READ UP</Button>
                </S.ButtonContainer>
            </S.Banner>

            <Filterbar />
            <Gallery />

            <Footer />
        </S.Container>
    )
}
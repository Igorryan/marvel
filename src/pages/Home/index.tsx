import * as S from './styles'
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Carousel } from './Carousel';
import { Filterbar } from './Filterbar';
import { Gallery } from './Gallery';
import { Footer } from './Footer';
import { Banner } from './Banner';

export function Home() {
    return (
        <S.Container>
            <Header />
            <Navbar />
            <Carousel />
            <Banner/>
            <Filterbar />
            <Gallery />
            <Footer />
        </S.Container>
    )
}
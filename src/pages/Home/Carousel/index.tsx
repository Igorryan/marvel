import { useCallback, useEffect, useRef, useState } from 'react'
import * as S from './styles'

import PreviousIcon from '../../../assets/previous.svg'
import NextIcon from '../../../assets/next.svg'
import Cover from '../../../assets/cover.png'

const images = [
    Cover,
    'https://i.annihil.us/u/prod/marvel/i/mg/3/00/6385a4dc01192.jpg',
    'https://www.torredevigilancia.com/wp-content/uploads/2017/07/Doctor_Strange_Last_Days_of_Magic_Vol_1_1_Brase_Variant.jpg',
    'https://c4.wallpaperflare.com/wallpaper/670/235/603/deadpool-marvel-comics-wallpaper-preview.jpg',
    'https://lh3.googleusercontent.com/-1Xs0iaDgCno/YbZGO2-90tI/AAAAAAAAU6w/db_r6nrJkDsa2hEm6jAcCQuPniC_6hluwCNcBGAsYHQ/s1600/1639335439442044-0.png',
]

export function Carousel() {
    const [currentImage, setCurrentImage] = useState(0)
    const imagesContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        imagesContainerRef && imagesContainerRef.current?.scrollTo({top: currentImage * 500})
    }, [currentImage, imagesContainerRef])

    const handleNextImage = useCallback(() => {
        setCurrentImage(oldState => oldState === (images.length - 1) ? 0 : oldState + 1)
    }, [])

    const handlePreviousImage = useCallback(() => {
        setCurrentImage(oldState => oldState === 0 ? images.length - 1 : oldState - 1)
    }, [])

    return (
        <S.Container>
            <S.Carousel>
                <S.Previous onClick={handlePreviousImage}>
                    <img src={PreviousIcon} alt="Previous Button" />
                </S.Previous>

                <S.ImagesContainer ref={imagesContainerRef}>
                    {images.map(img => (
                        <S.Image key={img} src={img} alt="Cover"></S.Image>
                    ))}
                </S.ImagesContainer>

                <S.Next onClick={handleNextImage}>
                    <img src={NextIcon} alt="Next Button" />
                </S.Next>

                <S.OptionIndexImageContainer>
                    {images.map((img, i) => (
                        <S.Index key={i} onClick={() => setCurrentImage(i)} currentImage={currentImage === i}>{i + 1}</S.Index>
                    ))}
                </S.OptionIndexImageContainer>
            </S.Carousel>
        </S.Container>
    );
}

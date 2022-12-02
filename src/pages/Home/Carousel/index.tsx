import * as S from './styles'
import PreviousIcon from '../../../assets/previous.svg'
import NextIcon from '../../../assets/next.svg'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const images = [
    {
        url: 'https://scontent-gig2-1.xx.fbcdn.net/v/t31.18172-8/27624860_1568363376575952_2151740536442084432_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHVKGMiP28rJTX3P-D52m5-9_1722DV_R73_XvbYNX9HmtU1kFoC1pOHH_QISxHgnNP74SkqTDsNaN4VSZnWEdI&_nc_ohc=JzF_puJC60IAX_E0bCn&_nc_ht=scontent-gig2-1.xx&oh=00_AfDjyRLR8X_p_FTvaDu_IMBib1cdE8XYLTLg1IPvU2Ovug&oe=63AEF55F',
        description: 'Batman'
    },
    {
        url: 'http://st.gde-fon.com/wallpapers_original/339023_komiks_chelovek-pauk_super-geroj_2560x1985_www.Gde-Fon.com.jpg',
        description: 'Batman'
    },
    {
        url: 'http://farm2.static.flickr.com/1073/1464777562_afa7739532_o.jpg',
        description: 'Batman'
    },
    {
        url: 'https://images2.alphacoders.com/522/522619.jpg',
        description: 'Batman'
    },
    {
        url: 'https://p4.wallpaperbetter.com/wallpaper/157/270/428/comics-flash-dc-comics-wallpaper-preview.jpg',
        description: 'Batman'
    },
]

export function Carousel() {
    const [currentImage, setCurrentImage] = useState(0)
    const imagesContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        imagesContainerRef && imagesContainerRef.current?.scrollTo({top: currentImage * 500})
    }, [currentImage, imagesContainerRef])

    const handleNextImage = useCallback(() => {
        setCurrentImage(oldState => oldState === (images.length - 1) ? 0 : oldState + 1)
    }, [images.length, currentImage])

    const handlePreviousImage = useCallback(() => {
        setCurrentImage(oldState => oldState === 0 ? images.length - 1 : oldState - 1)
    }, [images.length, currentImage])

    useMemo(() => {
        setInterval(() => {
            handleNextImage()
        }, 7000)
    }, [])

    return (
        <S.Container>
            <S.Carousel>
                <S.Previous onClick={handlePreviousImage}>
                    <img src={PreviousIcon} alt="Previous Button" />
                </S.Previous>

                <S.ImagesContainer ref={imagesContainerRef}>
                    {images.map(img => (
                        <S.Image key={img.url} src={img.url} alt={img.description}></S.Image>
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

import * as S from './styles'
import Logo from '../../../assets/logo.svg'

import ShoppingIcon from '../../../assets/shopping.svg'
import DividerIcon from '../../../assets/divider.svg'
import { Input } from '../../../components/Input'
import { SocialNetwork } from '../SocialNetwork'
import { useCallback, useEffect, useRef, useState } from 'react'
import { IComic } from '../../../types/ComicType'
import { getResumeCreatorsByComics } from '../../../functions/getResumeCreatorsByComics'
import { debounce } from '../../../functions/debounce'
import api from '../../../services/api'
import { Spinner } from '../../../components/Spinner'

export function Header() {
    const [comics, setComics] = useState<IComic[]>([])
    const [searching, setSearching] = useState(false)
    const processChange = debounce((value: string) => handleSearch(value), 1000);
    const wrapperRef = useRef(null);
    useOutside(wrapperRef);

    const handleInputChange = useCallback((value: string) => {
        if (!value) {
            setComics([])
            setSearching(false)
        }

        processChange(value)
    }, [processChange])

    const handleSearch = useCallback(async (value: string) => {
        setSearching(true)

        if (!value) {
            setSearching(false)
            return
        }

        const titleStartsWith = value.replaceAll(' ', '%20')

        const response = await api.get(`comics?limit=100&titleStartsWith=${titleStartsWith}&orderBy=focDate&apikey=6035b9c71b11ed3af07be7e694b9e4e5`)
        const data: IComic[] = response.data.data.results

        const comicsWithResumeCreators = getResumeCreatorsByComics(data)

        setComics(comicsWithResumeCreators)
        setSearching(false)
    }, [])

    function useOutside(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setComics([])
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }


    return (
        <S.Container>
            <S.LogoContainer>
                <S.Logo src={Logo} alt="Marvel Logo" />

                <SocialNetwork style={{ paddingBottom: '12px' }} />
            </S.LogoContainer>

            <S.OptionsContainer>
                <S.TopOptions>
                    <a href="#welcome">Welcome</a>
                    <img src={DividerIcon} alt="Divider Icon"></img>
                    <a href="#account">My Account</a>
                </S.TopOptions>

                <S.BottomOptions>
                    <Input onFocus={(e) => handleInputChange(e.target.value)} onChange={(e) => handleInputChange(e.target.value)}></Input>
                    <img src={DividerIcon} alt="Divider Icon"></img>
                    <button>
                        <img src={ShoppingIcon} alt="Shopping Icon"></img>
                    </button>
                </S.BottomOptions>

                <S.SearchResultsContainer ref={wrapperRef}>
                    {searching ? (
                        <S.SearchingAlert><Spinner color="red"></Spinner></S.SearchingAlert>
                    ) : (
                        comics.length > 0 && comics.map((comic, i) => (
                            <S.Item key={`i-${comic.id}`}>
                                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Comic" />
                                <div>
                                    <h4>{comic.title}</h4>
                                    <h6>{comic.resumeCreators}</h6>
                                </div>
                            </S.Item>
                        ))
                    )}
                </S.SearchResultsContainer>
            </S.OptionsContainer>


        </S.Container>
    );
}

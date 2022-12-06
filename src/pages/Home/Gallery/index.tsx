import { useCallback, useMemo, useState } from 'react';
import * as S from './styles'

import api from '../../../services/api';
import { getResumeCreatorsByComics } from '../../../functions/getResumeCreatorsByComics';

import { IComic } from '../../../types/ComicType';

import { Button } from '../../../components/Button';

export function Gallery() {
    const [comics, setComics] = useState<IComic[]>([])
    const [loadMoreLoading, setLoadingMoreLoading] = useState(false)

    const getComics = useCallback(async ({ offset }: { offset: number }) => {
        setLoadingMoreLoading(true)
        const response = await api.get(`comics?orderBy=focDate&offset=${offset}&apikey=6035b9c71b11ed3af07be7e694b9e4e5`)
        const data: IComic[] = response.data.data.results

        const comicsWithResumeCreators = getResumeCreatorsByComics(data)

        setComics((oldState) => ([...oldState, ...comicsWithResumeCreators]))
        setLoadingMoreLoading(false)
    }, [setLoadingMoreLoading])

    useMemo(() => {
        getComics({ offset: 0 })
    }, [getComics])

    return (
        <S.Container>

            {comics.map((comic, i) => (
                <S.Card key={`${comic.id}-${i}`}>
                    <S.Shadow className="dashed-shadow">
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Card" />
                    </S.Shadow>
                    <strong>{comic.title}</strong>
                    <span>{comic.resumeCreators}</span>
                </S.Card>
            ))}

            <S.ButtomEndContainer>
                <Button loading={loadMoreLoading} disabled={loadMoreLoading} onClick={() => getComics({ offset: comics.length })}>LOAD MORE</Button>
            </S.ButtomEndContainer>
        </S.Container>
    );
}

import * as S from './styles'
import { useCallback, useMemo, useState } from 'react';
import api from '../../../services/api';
import { Button } from '../../../components/Button';

interface ICreatorsItems {
    name: string
}

interface IComics {
    id: number;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    }
    creators: {
        items: ICreatorsItems[]
    },
    series: {
        name: string
    }
    resumeCreators: string
}

export function Gallery() {
    const [comics, setComics] = useState<IComics[]>([])
    const [loadMoreLoading, setLoadingMoreLoading] = useState(false)

    function getResumeCreatorsByComics(comics: IComics[]) {
        return comics.map(comic => {
            let resumeCreators = ''

            comic.creators.items.forEach(item => {
                const [name] = item.name.split(' ')
                resumeCreators === '' ? resumeCreators = `${name}` : resumeCreators = `${resumeCreators}, ${name}`
            })

            return ({
                ...comic,
                resumeCreators
            })
        })
    }

    const getComics = useCallback(async ({ offset }: { offset: number }) => {
        setLoadingMoreLoading(true)
        const response = await api.get(`comics?orderBy=focDate&offset=${offset}&apikey=6035b9c71b11ed3af07be7e694b9e4e5`)
        const data: IComics[] = response.data.data.results

        const comicsWithResumeCreators = getResumeCreatorsByComics(data)

        console.log(data)

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
                <Button loading={loadMoreLoading} onClick={() => getComics({ offset: comics.length })}>LOAD MORE</Button>
            </S.ButtomEndContainer>
        </S.Container>
    );
}

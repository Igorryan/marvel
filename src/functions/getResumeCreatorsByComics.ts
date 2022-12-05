import { IComic } from "../types/ComicType"

export function getResumeCreatorsByComics(comics: IComic[]) {
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
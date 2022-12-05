interface ICreatorItems {
    name: string
}

export interface IComic {
    id: number;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    }
    creators: {
        items: ICreatorItems[]
    },
    series: {
        name: string
    }
    resumeCreators: string
}
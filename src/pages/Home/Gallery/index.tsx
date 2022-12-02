import * as S from './styles'
import CardPhoto from '../../../assets/card-photo-example.png'

const cards = [
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
    {
        img: CardPhoto,
        title: 'X-Men: Blue #23',
        description: 'Bunn, Molina'
    },
]

export function Gallery() {
    return (
        <S.Container>
            {cards.map(card => (
                <S.Card key={card.img}>
                    <img src={card.img} alt="Card Photo" />
                    <strong>{card.title}</strong>
                    <span>{card.description}</span>
                </S.Card>
            ))}
        </S.Container>
    );
}

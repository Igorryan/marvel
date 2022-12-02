import * as S from './styles'

export function Filterbar() {
    return (
        <S.Container>
            <ul>
                <li><strong>Browse By</strong></li>
                <li><span>Series</span></li>
                <li><span>Characters</span></li>
                <li><span>Creators</span></li>
            </ul>
        </S.Container>
    );
}

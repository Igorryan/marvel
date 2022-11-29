import * as S from './styles'
import SearchIcon from '../../assets/search.svg'

export function Input() {
    return (
        <S.Container>
            <input placeholder='SEARCH MARVEL SHOP' type="text" />
            <img src={SearchIcon} alt="Search"></img>
        </S.Container>
    );
}

import { InputHTMLAttributes } from 'react';
import * as S from './styles'
import SearchIcon from '../../assets/search.svg'

export function Input({...props}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <S.Container {...props}>
            <input placeholder='SEARCH MARVEL SHOP' type="text" />
            <img src={SearchIcon} alt="Search"></img>
        </S.Container>
    );
}

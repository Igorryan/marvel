import * as S from './styles'
import { InputHTMLAttributes } from 'react';
import SearchIcon from '../../assets/search.svg'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input({...props}: IInputProps) {
    return (
        <S.Container {...props}>
            <input placeholder='SEARCH MARVEL SHOP' type="text" />
            <img src={SearchIcon} alt="Search"></img>
        </S.Container>
    );
}

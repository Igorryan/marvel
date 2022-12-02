import { ButtonHTMLAttributes } from 'react';
import * as S from './styles'

export function Button({children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <S.Container {...props}>
            {children}
        </S.Container>
    );
}

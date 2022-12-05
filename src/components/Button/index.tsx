import { ButtonHTMLAttributes } from 'react';
import { Spinner } from '../Spinner';
import * as S from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean
}

export function Button({ loading, children, ...props }: IButtonProps) {
    return (
        <S.Container {...props}>
            {loading ? (
                <Spinner color='#ffffff' />
            ) : (
                children
            )}

        </S.Container>
    );
}

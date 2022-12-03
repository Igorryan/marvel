import { ButtonHTMLAttributes } from 'react';
import * as S from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean
}

export function Button({ loading, children, ...props }: IButtonProps) {
    return (
        <S.Container {...props}>
            {loading ? (
                <S.Spinner>
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </S.Spinner>
            ) : (
                children
            )}

        </S.Container>
    );
}

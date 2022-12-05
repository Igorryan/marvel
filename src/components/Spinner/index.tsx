import * as S from './styles'

export interface IProps {
    color?: string
}

export function Spinner({color}: IProps) {
    return (
        <S.Container color={color}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </S.Container>
    );
}

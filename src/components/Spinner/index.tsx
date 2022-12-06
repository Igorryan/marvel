import * as S from './styles'

export interface IProps {
    color?: string
}

export function Spinner({color}: IProps) {
    return (
        <S.Container color={color}>
            <div></div>
            <div></div>
            <div></div>
        </S.Container>
    );
}

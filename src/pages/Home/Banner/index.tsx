import { Button } from '../../../components/Button';
import * as S from './styles'

export function Banner() {
    return (
        <S.Container>
            <h1>The hunt for wolverine kicks off this april</h1>
            <p>Charles Soule and David Marquez unravel the mystery</p>

            <S.ButtonContainer>
                <Button>READ UP</Button>
            </S.ButtonContainer>
        </S.Container>
    );
}

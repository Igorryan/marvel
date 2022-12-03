import * as S from './styles'
import Logo from '../../../assets/logo.svg'

import ShoppingIcon from '../../../assets/shopping.svg'
import DividerIcon from '../../../assets/divider.svg'
import { Input } from '../../../components/Input'
import { SocialNetwork } from '../SocialNetwork'

export function Header() {
    return (
        <S.Container>
            <S.LogoContainer>
                <S.Logo src={Logo} alt="Marvel Logo" />

                <SocialNetwork style={{paddingBottom: '12px'}} />
            </S.LogoContainer>

            <S.OptionsContainer>
                <S.TopOptions>
                    <a href="#welcome">Welcome</a>
                    <img src={DividerIcon} alt="Divider Icon"></img>
                    <a href="#account">My Account</a>
                </S.TopOptions>

                <S.BottomOptions>
                    <Input></Input>
                    <img src={DividerIcon} alt="Divider Icon"></img>
                    <button>
                        <img src={ShoppingIcon} alt="Shopping Icon"></img>
                    </button>
                </S.BottomOptions>
            </S.OptionsContainer>
        </S.Container>
    );
}

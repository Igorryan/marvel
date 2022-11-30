import * as S from './styles'
import Logo from '../../../assets/logo.svg'
import FacebookIcon from '../../../assets/facebook.svg'
import YoutubeIcon from '../../../assets/youtube.svg'
import TwitterIcon from '../../../assets/twitter.svg'
import ShoppingIcon from '../../../assets/shopping.svg'
import DividerIcon from '../../../assets/divider.svg'
import { Input } from '../../../components/Input'

export function Header() {
    return (
        <S.Container>
            <S.LogoContainer>
                <S.Logo src={Logo} alt="Marvel Logo" />

                <S.SocialNetworkingContainer>
                    <img src={FacebookIcon} alt="Facebook Icon"></img>
                    <img src={YoutubeIcon} alt="Youtube Icon"></img>
                    <img src={TwitterIcon} alt="Twitter Icon"></img>
                </S.SocialNetworkingContainer>
            </S.LogoContainer>

            <S.OptionsContainer>
                <S.TopOptions>
                    <a href="#">Welcome</a>
                    <img src={DividerIcon} alt="Divider Icon"></img>
                    <a href="#">My Account</a>
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

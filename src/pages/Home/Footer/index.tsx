import * as S from './styles'
import Logo from '../../../assets/logo.svg'
import FacebookIcon from '../../../assets/facebook.svg'
import YoutubeIcon from '../../../assets/youtube.svg'
import TwitterIcon from '../../../assets/twitter.svg'

const columnsInformations = [
    {
        title: 'Comics',
        items: [
            'Release calendar',
            'Marvel Unlimited',
            'Redeem Digital Copy',
            'Shop Digital Comics',
            'Print Subscriptions',
            'Developer portal'
        ],
    },
    {
        title: 'Characters',
        items: [
            'Spider-man',
            'Avengers',
            'Iron Man',
            'Doctor Strange',
            'Captain America',
        ],
    },
    {
        title: 'Kids',
        items: [
            'Marvel HQ',
            'Kids Games',
            'Kides Videos',
            'Kids Activities',
        ],
    },
    {
        title: 'Marvel',
        items: [
            'Sign Up',
            'Marvel Mastercard',
            'Marvel Insider',
            'Help / FAQs',
            'Email Preferences',
            'About Marvel',
            'Advertising',
            'Internships',
            'Careers',
        ],
    },
    {
        title: 'Insider',
        items: [
            'Join Today',
            'Home',
            'Activities',
            'Rewards',
            'Member Profile',
            'FAQs',
            'Marvel Insider Terms of Use',
        ],
    }
]

const footerInformations = [
    'Terms of Use',
    'Privacy Policy',
    'Your California Privacy Policy',
    'License Agreement',
    'Interest-Based ADS',
    '© 2018 Marvel'
]

export function Footer() {
    return (
        <S.Container>
            <S.Content>
                <S.ColumnsContainer>
                    {columnsInformations.map((info, i) => (
                        <S.Column key={info.title}>
                            <strong>{info.title}</strong>
                            {info.items.map((item, i) => (
                                <li key={item}>{item}</li>
                            ))}
                        </S.Column>
                    ))}
                </S.ColumnsContainer>

                <S.Footer>
                    <S.Logo src={Logo} />
                    <S.LinksContainer>
                        {footerInformations.map(link => (
                            <li>{link}</li>
                        ))}
                    </S.LinksContainer>
                    <S.SocialNetworkingContainer>
                        <img src={FacebookIcon} alt="Facebook Icon"></img>
                        <img src={YoutubeIcon} alt="Youtube Icon"></img>
                        <img src={TwitterIcon} alt="Twitter Icon"></img>
                    </S.SocialNetworkingContainer>
                </S.Footer>
            </S.Content>
        </S.Container>
    );
}

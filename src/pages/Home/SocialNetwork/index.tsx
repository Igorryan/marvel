import * as S from './styles'

export function SocialNetwork({...props}) {
    return (
        <S.Container {...props}>
            <S.FacebookSVG width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0909 0H1.90909C0.854318 0 0 0.854318 0 1.90909V19.0909C0 20.1457 0.854318 21 1.90909 21H11.4545V12.4091H8.59091V9.54545H11.4545V8.00768C11.4545 5.09632 12.873 3.81818 15.2928 3.81818C16.4516 3.81818 17.0644 3.90409 17.3546 3.94323V6.68182H15.7042C14.6771 6.68182 14.3182 7.224 14.3182 8.32173V9.54545H17.3288L16.9203 12.4091H14.3182V21H19.0909C20.1457 21 21 20.1457 21 19.0909V1.90909C21 0.854318 20.1447 0 19.0909 0Z" fill="#818181" />
            </S.FacebookSVG>

            <S.YoutubeSVG width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.717 0.0164868C9.30011 0.0164868 3.56732 0 3.56732 0L3.5529 0.0164868C1.54122 0.338215 0 2.06683 0 4.16909V10.5V10.5021V16.8309V16.833C0.00196306 17.837 0.36178 18.8074 1.01484 19.57C1.66791 20.3326 2.57144 20.8374 3.5632 20.9938L3.56732 21C3.56732 21 9.30011 21 13.717 21C18.1338 21 23.8666 21 23.8666 21L23.8687 20.9979C24.8615 20.8419 25.7661 20.3367 26.4197 19.5732C27.0732 18.8097 27.4329 17.838 27.434 16.833V16.8309V10.5021V10.5V4.16909C27.4325 3.16472 27.0729 2.19379 26.4198 1.43077C25.7667 0.667737 24.8629 0.162624 23.8708 0.00618253L23.8666 0C23.8666 0 18.1338 0.0164868 13.717 0.0164868ZM10.5515 5.64465L18.9927 10.5L10.5515 15.3553V5.64465Z" fill="#818181" />
            </S.YoutubeSVG>

            <S.TwitterSVG width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.8423 2.48573C24.8911 2.90814 23.8694 3.19239 22.797 3.3206C23.8922 2.66463 24.7321 1.62601 25.1276 0.387619C24.1039 0.994889 22.9689 1.43618 21.7603 1.67471C20.7933 0.644044 19.4157 0 17.8911 0C14.9631 0 12.5897 2.37441 12.5897 5.30143C12.5897 5.71688 12.6374 6.12239 12.7268 6.50902C8.32089 6.28837 4.41488 4.17734 1.79895 0.969047C1.34375 1.75224 1.08235 2.66264 1.08235 3.63567C1.08235 5.47437 2.01761 7.0974 3.43987 8.04756C2.57121 8.01974 1.75323 7.7812 1.03862 7.38464C1.03862 7.4075 1.03862 7.42837 1.03862 7.45123C1.03862 10.0204 2.8654 12.1633 5.29149 12.6493C4.84722 12.7706 4.37811 12.8352 3.89408 12.8352C3.55317 12.8352 3.22022 12.8014 2.8972 12.7407C3.57206 14.8468 5.53003 16.3804 7.84978 16.4231C6.03592 17.8454 3.74996 18.6932 1.26523 18.6932C0.837853 18.6932 0.415448 18.6683 0 18.6186C2.34659 20.1224 5.13247 21 8.12708 21C17.8792 21 23.2104 12.9216 23.2104 5.91566C23.2104 5.68607 23.2054 5.45748 23.1955 5.22987C24.2321 4.48147 25.1316 3.5482 25.8423 2.48573Z" fill="#818181" />
            </S.TwitterSVG>
        </S.Container>
    );
}
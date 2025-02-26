import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import { COLORS } from './Colors';
export const GlobalStyles = createGlobalStyle`

    

    @font-face {
    font-family: 'clashDisplay';
    src: url('/assets/fonts//ClashDisplay/ClashDisplay-Variable.woff2') format('woff2'),
       url('/assets/fonts/ClashDisplay/ClashDisplay-Variable.woff') format('woff'),
       url('/assets/fonts/ClashDisplay/ClashDisplay-Variable.ttf') format('truetype');
     font-weight: 200 700;
    font-display: swap;
    font-style: normal;
    }

    @font-face {
    font-family: 'clashGrotesk';
    src: url('/assets/fonts/ClashGrotesk/ClashGrotesk-Variable.woff2') format('woff2'),
       url('/assets/fonts/ClashGrotesk/ClashGrotesk-Variable.woff') format('woff'),
       url('/assets/fonts/ClashGrotesk/ClashGrotesk-Variable.ttf') format('truetype');
    font-weight: 200 700;
    font-display: swap;
    font-style: normal;
    }

    @font-face {
    font-family: 'porterSans';
    src: url('/assets//fonts/PorterSans/porter-sans-inline-block-webfont.eot');
    src: url('/assets/fonts/PorterSans/porter-sans-inline-block-webfont.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/PorterSans/porter-sans-inline-block-webfont.woff') format('woff'),
         url('/assets/fonts/PorterSans/porter-sans-inline-block-webfont.ttf') format('truetype'),
         url('/assets/fonts/PorterSans/porter-sans-inline-block-webfont.svg#porter_sans_blockblock') format('svg');
    font-weight: normal;
    font-style: normal;
    }

   


    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: 'clashGrotesk', sans-serif;
        margin: 0;
        background-image:url('../assets/images/images/fondoMovil.png');
        background-repeat:no-repeat;
        background-size:cover;
        min-height: 100vh;
        
       

        @media screen and (width>768px) {
            background-image:url('../assets/images/images/fondoEscritorio.png');
	    }
       
        color: ${COLORS.neutralCold};
    }

    #root{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
`;

import { css } from 'styled-components';

export default () => css`
    @font-face {
        font-family: 'alternategothicefnoone';
        src: url('/static/font/alternategothicef_noone-webfont.woff2') format('woff2'),
            url('/static/font/alternategothicef_noone-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'droid';
        src: url('/static/font/droidserif-webfont.woff2') format('woff2'),
            url('/static/font/droidserif-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'droid';
        src: url('/static/font/droidserif-italic-webfont.woff2') format('woff2'),
            url('/static/font/droidserif-italic-webfont.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'droid';
        src: url('/static/font/droidserif-bold-webfont.woff2') format('woff2'),
            url('/static/font/droidserif-bold-webfont.woff') format('woff');
        font-weight: 800;
        font-style: normal;
    }

    h1,h2,h3,h4 {
        font-weight: normal;
    }

    a {
        color: inherit;
        text-decoration: none;
        display: inline-block;
    }

    img {
        max-width: 100%;
    }

    img, picture, svg {
        display: block;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
    }
`;

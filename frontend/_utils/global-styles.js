import { injectGlobal } from 'styled-components';
import { ff } from '_utils/mixins';
import { FONT_SECONDARY, WHITE, BLACK } from '_utils/variables';
import typography from '_utils/typography';

export default injectGlobal`
    * , *:before , *:after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    @-ms-viewport {
        width: device-width;
    }

    html {
        font-size: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        touch-action: manipulation;
    }

    body {
        ${ff(FONT_SECONDARY)}
        color: ${WHITE};
        background-color: ${BLACK};
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .page {
        position: relative;
    }

    ${typography()}
`;

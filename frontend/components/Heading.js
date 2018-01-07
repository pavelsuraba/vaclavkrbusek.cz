import styled from 'styled-components';
import { WHITE, DESKTOP, FONT_PRIMARY } from '_utils/variables';
import { mq } from '_utils/media-queries';
import { fz, ff } from '_utils/mixins';

export default styled.h1`
    ${fz(34)};
    ${ff(FONT_PRIMARY)}
    color: ${WHITE};
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.1;
    ${mq(DESKTOP)} {
        ${fz(48)};
        line-height: 1;
    }
`;

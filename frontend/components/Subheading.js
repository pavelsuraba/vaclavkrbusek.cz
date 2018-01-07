import styled, { css } from 'styled-components';
import { DESKTOP, BLUE, BLUE_DARK } from '_utils/variables';
import { mq } from '_utils/media-queries';
import { fz } from '_utils/mixins';

import Heading from 'components/Heading';

export default styled.p`
    ${fz(14)};
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    ${props => props.main ? `color: ${BLUE};` : `color: ${BLUE_DARK};` }
    ${Heading} + & {
        margin: 10px 0 0 0;
    }
    ${mq(DESKTOP)} {
        ${props => props.main ? css`${fz(20)};` : css`${fz(18)};` }
        letter-spacing: 3px;
    }
`;

import styled, { css } from 'styled-components';
import { DESKTOP_WIDTH, DESKTOP, TABLET, GUTTER_WIDTH } from '_utils/variables';
import { mq } from '_utils/media-queries';
import { cf } from '_utils/mixins';

const Container = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 0 ${GUTTER_WIDTH}px 0 ${GUTTER_WIDTH}px;
`;

export const ContainerSmall = styled(Container)`
    max-width: ${DESKTOP_WIDTH + (GUTTER_WIDTH * 2)}px;
`;

export const ContainerLarge = styled(Container)`
    max-width: 1290px;
`;

export const Row = styled.div`
    margin-right: ${-GUTTER_WIDTH}px;
    margin-left: ${-GUTTER_WIDTH}px;
    ${props => props.flex ? 'display: flex; flex-wrap: wrap;' : cf()};
    ${props => props.marginTop && css`
        margin-top: 25px;
        ${mq(DESKTOP)} {
            margin-top: 50px;
        }
    `};
`;

export const Col = styled.div`
    width: 100%;
    padding: 0 ${GUTTER_WIDTH}px 0 ${GUTTER_WIDTH}px;
    margin: 0 0 15px 0;
    ${mq(TABLET)} {
        margin: 0 0 30px 0;
    }
`;

export const Col2 = styled(Col)`
    ${mq(DESKTOP)} {
        width: 50%;
    }
`;

export const Col3 = styled(Col)`
    ${mq(TABLET)} {
        width: 50%;
    }
    ${mq(DESKTOP)} {
        width: 33.33%;
        ${props => props.wide && css`
            width: 66.66%;
        `}
    }
`;

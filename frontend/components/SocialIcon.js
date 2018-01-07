import styled from 'styled-components';
import { DESKTOP, GREY, BLUE_DARK } from '_utils/variables';
import { mq } from '_utils/media-queries';

const Item = styled.a`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid ${GREY};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms ease;
    svg {
        max-height: 22px;
        ${mq(DESKTOP)} {
            max-height: none;
        }
    }
    &:hover {
        color: ${BLUE_DARK};
        border: 1px solid ${BLUE_DARK};
    }
    ${mq(DESKTOP)} {
        width: 70px;
        height: 70px;
    }
`;

export default ({
    href,
    children
}) => (
    <Item href={href} target="_blank">
        {children}
    </Item>
);

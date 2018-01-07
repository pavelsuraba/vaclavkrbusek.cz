import styled from 'styled-components';
import { GREEN, DESKTOP, FONT_SECONDARY } from '_utils/variables';
import { mq } from '_utils/media-queries';
import { fz, ff } from '_utils/mixins';

import Heading from 'components/Heading';

const Card = styled.div`
    text-align: center;
    padding: 45px 10px 55px 10px;
    background-color: rgba(7, 7, 23, 0.7);
    ${ff(FONT_SECONDARY)};
    width: 100%;
    max-width: 590px;
    ${mq(DESKTOP)} {
        padding: 70px 30px 95px 30px;
    }
`;

const Description = styled.p`
    ${fz(16)};
    margin: 15px 0 18px 0;
    color: ${GREEN};
    font-style: italic;
    ${mq(DESKTOP)} {
        ${fz(18)};
        margin: 25px 0 30px 0;
    }
`;

const Info = styled.p`
    font-style: italic;
    ${fz(14)};
    letter-spacing: 0.5px;
    a {
        color: ${GREEN};
        &:hover {
            text-decoration: underline;
        }
    }
`;

export default ({
    heading,
    description,
    info,
    mail
}) => (
    <Card>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
        <Info>{info} <a href={`mailto:${mail}`}>{mail}</a></Info>
    </Card>
);

import React from 'react';
import styled from 'styled-components';
import { BLACK, DESKTOP, TABLET } from '_utils/variables';
import { mq, retina, retinaMin } from '_utils/media-queries';

import Card from 'components/Card';

const Header = styled.header`
    width: 100%;
    height: 100vh;
    background-image: url('/static/jpg/bg-mobile.jpg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-color: ${BLACK};
    background-size: contain;
    ${retina()} {
        background-image: url('/static/jpg/bg-mobile@2x.jpg');
    }
    ${mq(TABLET)} {
        background-image: url('/static/jpg/bg-desktop.jpg');
        background-size: auto;
        background-position: 30% 50%;
    }
    ${mq(DESKTOP)} {
        background-position: 50% 50%;
    }
    ${retinaMin(TABLET)} {
        background-image: url('/static/jpg/bg-desktop@2x.jpg');
    }
`;

const Content = styled.div`
    padding: 0 15px 55px 15px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mq(DESKTOP)} {
        padding: 0 15px 155px 15px;
    }
`;

export default () => (
    <Header>
        <Content>
            <Card
                heading="Welcome to my portfolio!"
                description="I'm still working on it thought..."
                info="Meanwhile you can write to me at"
                mail="vkrbusek@gmail.com"
            />
        </Content>
    </Header>
);

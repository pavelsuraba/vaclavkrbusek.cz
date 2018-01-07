import React from 'react';
import { css } from 'styled-components';
import { mq } from '_utils/media-queries';
import { DESKTOP } from '_utils/variables';

export const Desktop = ({ children, width = DESKTOP }) => {
    return React.cloneElement(children, { hideOnMobile: true, width });
};

export const Mobile = ({ children, width = DESKTOP }) => {
    return React.cloneElement(children, { hideOnDesktop: true, width });
};

export const Media = ({ width, less, more }) => (
    <div>
        <Mobile width={width}>{less}</Mobile>
        <Desktop width={width}>{more}</Desktop>
    </div>
);

export const hide = (
    hideOnMobile = false,
    flex = false,
    size = DESKTOP,
) => {
    return hideOnMobile ? (
        css`
            display: none;
            ${mq(size)} {
                display: ${flex ? 'flex' : 'block' };
            }
        `
    ) : (
        css`
            ${mq(size)} {
                display: none;
            }
        `
    );
};

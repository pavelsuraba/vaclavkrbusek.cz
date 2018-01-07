import { mq } from '_utils/media-queries';
import { DESKTOP } from '_utils/variables';

/* Clearfix */
export const cf = () => `
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`;

/* Font size REM */
const baseFontSize = 16;
export const fz = (size) => `
    font-size: ${parseFloat(size / baseFontSize).toPrecision(7)}rem;
`;

/* Font family */
export const ff = (name) => `
    font-family: ${name}, Arial, sans-serif;
`;

/* Hide text */
export const ht = () => `
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;

export const card = () => `
    display: block;
    position: relative;
    a, img, picture {
        width: 100%;
        height: 100%;
    }
    img {
        object-fit: cover;
    }
`;

export const cardLift = () => `
    transition: all 300ms ease;
    box-shadow: 0px 0 10px -10px rgba(0,0,0,0.3);
    ${mq(DESKTOP)} {
        &:hover {
            transform: translate(0, -10px);
            box-shadow: 0px 30px 35px -15px rgba(0,0,0,0.1);
        }
    }
`;

export const boxShadow = () => `
    box-shadow: 0 15px 25px -6px rgba(0,0,0,0.15);
`;


export const animFromRight = () => `
    transform: translate(100%, 0);
`;

export const animFromLeft = () => `
    transform: translate(-100%, 0);
    right: auto;
    left: 0;
`;

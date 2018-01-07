export const mq = (size) => `@media (min-width: ${size})`;

export const mqMax = (size) => `@media (max-width: ${size})`;

export const retina = () => `@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-device-pixel-ratio: 1.5),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx)`;

export const retinaMin = (size) => `@media only screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: ${size}),
    only screen and (min-device-pixel-ratio: 1.5) and (min-width: ${size}),
    only screen and (min-resolution: 192dpi) and (min-width: ${size}),
    only screen and (min-resolution: 2dppx) and (min-width: ${size})`;

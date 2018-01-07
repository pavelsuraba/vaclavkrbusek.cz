import Device from './device';
import Viewport from './viewport';

const detect = {
    dimensions: Viewport,
    device: Device // tablet, mobile, browser, version, os, isTouch
};

export default detect;

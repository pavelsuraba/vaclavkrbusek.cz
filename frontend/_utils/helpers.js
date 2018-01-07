import detect from './detect';

export const isTouch = () => {
    const { touch, ie } = detect;
    if(touch && ie !== 'Explorer') {
        return true;
    } else {
        return false;
    }
};

export const range = (v, min, max) => {
    return (Math.min(max, Math.max(min, v)));
};

/**
 * Find element
 * @param {HTMLElement} el
 * @param {string} className
 * @returns {object}
 */
export const findElement = (el, className) => {
    /* element has a class */
    if(el.classList && [...el.classList].includes(className)) {
        return {
            el,
            exist: true
        };
    }

    /* has parent with a class */
    while (el.parentNode) {
        el = el.parentNode;
        if (el.classList && [...el.classList].includes(className)) {
            return {
                el,
                exist: true
            };
        }
    }
    return { el, exist: false };
};

export const detectChrome = () => detect.browser === 'Chrome';

export const mobileChrome = () => detect.mobile && detectChrome();

export const detectIE = () => (detect.browser === 'Explorer');

export const randomNumber = (min, max) => {
    return Math.floor( Math.random() * (max - min + 1) + min);
};

export const $ = el => document.querySelector(el);

export const $$ = el => document.querySelectorAll(el);

export const compose = (a,b) => (c) => a(b(c));

export const offset = (el) => {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};

export const isNegative = (num) => {
    if(typeof num === 'string') {
        const minus = num.split('-');

        return minus.length > 1;
    }

    if(typeof num === 'number') {
        return num < 0;
    }
    return NaN;
};

export const isEmpty = (obj = {}) => {
    if(!obj) return true;
    return Object.keys(obj).length === 0;
};

export const mapObj = (obj = {}, cb) => Object.keys(obj).map((item, key) => cb(obj[item], key));

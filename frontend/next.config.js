require('dotenv').config({ path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env' });

exports.exportPathMap = () => {
    return {
        '/': { page: '/' }
    };
};

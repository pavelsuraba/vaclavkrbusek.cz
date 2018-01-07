require('dotenv').config({ path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env' });

const { NODE_ENV, PORT, FRONTEND } = process.env;
const next = require('next');
const express = require('express');
const path = require('path');

const dev = NODE_ENV !== 'production';
const root = path.join(__dirname, `/../${FRONTEND}`);
const app = next({ dev, dir: root });
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, (err) => {
        if (err) throw err;
        if (dev) console.log(`> Ready on http://localhost:${PORT}`);
    });
});

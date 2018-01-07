import Head from 'next/head';
import React, { Fragment } from 'react';

export default ({
    children,
    title = 'Václav Krbůšek - portfolio'
}) => (
    <Fragment>
        <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <title>{ title }</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            <meta name="author" content="" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="" />
            <meta property="og:description" content="" />
            <meta property="og:image" content="" />
            <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
        </Head>

        <main className="page">
            {children}
        </main>
    </Fragment>
);

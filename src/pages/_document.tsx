/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import * as D from 'next/document';
import Document, { Main, NextScript } from 'next/document';

import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: D.DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <D.Html lang="en">
        <D.Head>
          <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>KingSport</title>
            <meta name="description" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <link
              rel="icon"
              href="https://cdn5.vectorstock.com/i/1000x1000/57/34/running-shoes-icon-fitness-simple-style-sneaker-vector-21885734.jpg"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Open+Sans&display=swap"
              rel="stylesheet"
            />
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              rel="stylesheet"
            />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <link
              rel="stylesheet"
              href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            />
          </div>
        </D.Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </D.Html>
    );
  }
}

export default MyDocument;

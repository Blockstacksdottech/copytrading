import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/plugins/fontawesome-free/css/all.min.css"
        />
      </Head>
      <body className="layout-fixed layout-navbar-fixed hold-transition sidebar-mini">
        <div className="wrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}

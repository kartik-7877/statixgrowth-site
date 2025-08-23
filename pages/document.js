// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Charset and compatibility */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* ✅ Viewport is usually handled in _app.js via <Head>, but safe fallback */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* ✅ SEO + Progressive Web App improvements */}
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />

        {/* ✅ Favicon (update path if different) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>{/* global meta/links can go here if needed */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

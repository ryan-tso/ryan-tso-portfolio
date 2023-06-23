import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet preload"/>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
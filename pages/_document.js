import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          />
        </Head>
        <body className="dark:bg-gray-900 dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument

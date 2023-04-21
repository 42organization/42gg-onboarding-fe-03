import { Html, Head, Main, NextScript } from 'next/document'

//서버에서만 렌더링되고 온클릭 이벤트 핸들러는 작동하지 않는다.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body> 
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

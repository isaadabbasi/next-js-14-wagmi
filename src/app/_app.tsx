import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      asdasdasd
      <Component {...pageProps} />
    </div>
  )
}
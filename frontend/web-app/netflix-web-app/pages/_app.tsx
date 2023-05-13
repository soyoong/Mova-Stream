import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
// import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // HOOKS
    <RecoilRoot>
      {/* Higher Oder Component */}
      {/* <AuthProvider></AuthProvider> */}
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp

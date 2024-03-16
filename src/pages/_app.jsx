// import ThemeContextProvider from "@/hooks/useTheme";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <ThemeContextProvider> */}
        <Component {...pageProps} />
      {/* </ThemeContextProvider>     */}
    </>
  )
}

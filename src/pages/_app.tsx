import '../styles/global.css'

import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp

/**
 *  Todos os elementos dentro do Provider vão ter acesso a todos os dados que eu armazenar dentro daquele contexto
 */
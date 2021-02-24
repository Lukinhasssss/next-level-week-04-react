import '../styles/global.css'

import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp

/**
 *  Todos os elementos dentro do Provider vão ter acesso a todos os dados que eu armazenar dentro daquele contexto
 */
import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') // padStart --> Vai verificar a string e se ela não tiver 2 caracteres ele vai preencher o restante pra esquerda com o zero ('0')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  

  return (
    <div>
      <div className={ styles.countdownContainer }>
        <div>
          <span>{ minuteLeft }</span>
          <span>{ minuteRight }</span>
        </div>
        <span>:</span>
        <div>
          <span>{ secondLeft }</span>
          <span>{ secondRight }</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={ styles.countdownButton }
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          { isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={ resetCountdown }
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={ styles.countdownButton }
              onClick={ startCountdown }
            >
              Iniciar um ciclo
            </button>
          ) }
        </>
      )}
    </div>
  )
}
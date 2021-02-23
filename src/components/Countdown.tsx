import { useEffect, useState } from 'react'

import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false) // Este estado vai armazenar se countdown está ativo ou não

  const minutes = Math.floor(time / 60) // Math.floor --> Arredonda o número para baixo
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') // padStart --> Vai verificar a string e se ela não tiver 2 caracteres ele vai preencher o restante pra esquerda com o zero ('0')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setActive(true)
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000);
    }
  }, [active, time])

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

      <button
        type="button"
        className={ styles.countdownButton }
        onClick={ startCountdown }
      >
        Iniciar um ciclo
      </button>
    </div>
  )
}
import { Message } from '../../components/Message'
import { useState } from 'react'
import * as S from './styled'
// import { ParticlesBackground } from '../../components/ParticlesBackground'

export function Introduction() {
  const [message, setMessage] = useState('Do you know how much you spend?')

  const handleClick = () => {
    setMessage("Let's see your spending summary in the year 2022!")
  }

  return (
    // <ParticlesBackground />
    <S.Contianer onClick={handleClick}>
      <Message text={message} />
    </S.Contianer>
  )
}

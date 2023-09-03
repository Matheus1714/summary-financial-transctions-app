import { useEffect, useState } from 'react'
import { Message } from '../../components/Message'
import { Goodbye } from '../../components/GoodBye'

export function Finish() {
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (showMessage) {
    return <Message text={'Wow! 2022 was an amazing year!'} />
  }
  return <Goodbye />
}

import { PersonSimpleWalk } from '@phosphor-icons/react'
import { CardAlert } from '../../components/CardAlert'
import { Loading } from '../../components/Loading'
import * as S from './styled'
import {
  useJsApiLoader,
  GoogleMap,
  Circle,
  Marker,
} from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import { NextPage } from '../../components/NextPage'
import { Message } from '../../components/Message'

const center = { lat: 48.8584, lng: 2.2445 }

const regions = [
  { center: { lat: 48.8584, lng: 2.2445 }, radius: 3000 },
  { center: { lat: 48.8697, lng: 2.3075 }, radius: 3000 },
  { center: { lat: 48.86, lng: 2.3231 }, radius: 3000 },
]

export function TransactionsMap() {
  const [showCardAlert, setShowCardAlert] = useState(false)
  const [showNextPage, setshowNextPage] = useState(false)
  const [showMessage, setShowMessage] = useState(true)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCardAlert(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowNextPage(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return <Loading />
  }

  if (showMessage) {
    return (
      <Message
        text={
          'I will also show the places you visited when you made a transaction'
        }
      />
    )
  }

  return (
    <S.Container>
      <GoogleMap
        center={center}
        zoom={12}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {regions.map((region, index) => (
          <div key={index}>
            <Marker
              position={{
                lat: region.center.lat,
                lng: region.center.lng,
              }}
            />
            <Circle
              center={region.center}
              radius={region.radius}
              options={{
                strokeColor: '#FF0000',
              }}
            />
          </div>
        ))}
      </GoogleMap>
      {showCardAlert && (
        <CardAlert>
          <PersonSimpleWalk size={64} />
          <S.MessageAlert>
            <p>{"You've visited 6 states in the United States!"}</p>
          </S.MessageAlert>
        </CardAlert>
      )}
      {showNextPage && <NextPage to="/finish" />}
    </S.Container>
  )
}

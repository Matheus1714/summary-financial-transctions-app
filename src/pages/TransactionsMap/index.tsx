import { PersonSimpleWalk } from '@phosphor-icons/react'
import { CardAlert } from '../../components/CardAlert'
import { Loading } from '../Loading'
import * as S from './styled'
import {
  useJsApiLoader,
  GoogleMap,
  Circle,
  Marker,
} from '@react-google-maps/api'
import { useState } from 'react'

const center = { lat: 48.8584, lng: 2.2445 }

// interface LocationType {
//   lat: number
//   lng: number
// }

// const generateRandomLocations = () => {
//   const locations: LocationType[] = []

//   for (let region = 1; region <= 10; region++) {
//     const numLocations = Math.floor(Math.random() * 100)

//     for (let i = 0; i < numLocations; i++) {
//       const location: LocationType = {
//         lat: Math.random() * (90 - -90) - 90,
//         lng: Math.random() * (180 - -180) - 180,
//       }

//       locations.push(location)
//     }
//   }

//   return locations
// }

// const center = { lat: 48.8584, lng: 2.2445 }

// Define the circular regions
const regions = [
  { center: { lat: 48.8584, lng: 2.2445 }, radius: 3000 },
  { center: { lat: 48.8697, lng: 2.3075 }, radius: 3000 },
  { center: { lat: 48.86, lng: 2.3231 }, radius: 3000 },
]

export function TransactionsMap() {
  const [showCardAlert, setShowCardAlert] = useState(false)

  const handleCardAlertClick = () => {
    if (!showCardAlert) {
      setShowCardAlert(true)
    }
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) {
    return <Loading />
  }

  return (
    <S.Container onClick={handleCardAlertClick}>
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
    </S.Container>
  )
}

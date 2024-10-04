import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import MapButton from './MapButton';
const posadas = [-27.366666666667, -55.896944444444];

export default function Mapa(){
    return(
        
        <MapContainer center={posadas} zoom={15}>
              <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapButton/>
        </MapContainer>
    
    )
}
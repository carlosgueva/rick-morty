import { useEffect, useState } from "react"
import {UseFetchApi} from "./hooks/UseFetchApi"
import { getRandomNumber } from "./utils"
import Hero from "./components/Hero"
import Search from "./components/Search"
import Locationinfo from "./components/LocationInfo"
import ResidentsList from "./components/ResidentsList"

const baseUrl = "https://rickandmortyapi.com/api/location"

function App() {
  const {data: location, request, loading} = UseFetchApi()
  const [locationId, setLocationId] = useState(getRandomNumber())

  useEffect(() => {
    request(`${baseUrl}/${locationId}`)
  }, [locationId])

  return (
    <div>
        {/*Hero */}
        <Hero />

        {/*Search */}
        <Search setLocationId={setLocationId} />

        {/*LocationInfo */}
        {loading ? <p style={{textAlign: "center"}}>Cargando...</p> : (
          location && <Locationinfo location={location} />
        )} 

        {/*ResidentList */}
        {location && <ResidentsList residents={location.residents} />}
    </div>
  )
}

export default App

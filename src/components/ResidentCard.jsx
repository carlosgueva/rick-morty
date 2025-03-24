import { useEffect } from "react"
import UseFetchApi from "../hooks/UseFetchApi"
import "./ResidentCard.css"

function ResidentCard({url}) {
  const {data: resident, request, loading} = UseFetchApi()

  useEffect(() => {
    request(url)
  }, [url])

  if (loading) return <p>Cargando...</p>

  const episodes = resident?.episode?.length || 1

  return ( 
    <>
    {resident && (
      <div className="resident_card">
        <div className="resident_header">
          <img className="resident_img" src={resident.image} alt={resident.name} />
          <span className="resident_status">{resident.status}</span>
        </div>
        <div className="resident_body">
          <h2 className="resident_name">{resident.name}</h2>
          <ul className="resident_info">
            <li className="resident_item">
              <span className="resident_span">Specie:</span> {resident.species}
            </li>
            <li className="resident_item">
              <span className="resident_span">Origin:</span> {resident.origin.name}
            </li>
            <li className="resident_item">
              <span className="resident_span">Episodes where appear:</span> {episodes} {episodes == 1 ? "episode" : "episodes"}
            </li>
          </ul>
        </div> 
      </div> 
    )}
    </>
  )
}

export default ResidentCard
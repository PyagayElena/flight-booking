import React, {useState} from 'react'
import './search-page.scss'
import SearchForm from './search-form/search-form'
import FlightCard from './flight-card/flight-card'
import FlightService, { Flight } from '../../services/flight'

const SeacrhPage = () => {
  const [flights, setFlights] = useState<Flight[]>([])
  const flightService = new FlightService()

  const onSearch = async (origin: string, destination: string[], departureDate: Date, returnDate: Date) => {
    const result = await flightService.getFlightList(origin, destination, departureDate, returnDate)
    if (!!result) {
      setFlights(result)
    }
  }

  return (
    <>
      <SearchForm handleSearch={onSearch} />
      <ul className='flights-container'>
        {flights.map((flight: Flight) => {
          return (
            <li key={flight.id}>
              <FlightCard flight={flight} />
            </li>
            )
        })}
      </ul>
    </>
  )
}

export default SeacrhPage
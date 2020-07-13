import React, { useState } from 'react'
import './search-page.scss'
import SearchForm from './search-form/search-form'
import FlightCard from './flight-card/flight-card'
import FlightService, { Flight } from '../../services/flight'
import Loader from '../common/loader/loader'

const SeacrhPage = () => {
  const [flights, setFlights] = useState<Flight[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const flightService = new FlightService()

  const onSearch = async (origin: string, destination: string[], departureDate: Date, returnDate: Date) => {
    setIsLoading(true)
    const result = await flightService.getFlightList(origin, destination, departureDate, returnDate)
    if (!!result) {
      setFlights(result)
    }
    setIsLoading(false)
  }

  return (
    <>
      <SearchForm handleSearch={onSearch} />

      {isLoading ? <Loader /> :

        !flights.length ?
          <div className='flights-empty'>
            <div className='flights-empty__title'>Nothing here yet ...</div>
            <div className='flights-empty__description'>Please fill in all the fields to search</div>
          </div> :

          <ul className='flights-container'>
          {flights.map((flight: Flight) => {
            return (
              <li key={flight.id}>
                <FlightCard flight={flight}/>
              </li>
            )
          })}
          </ul>}
    </>
  )
}

export default SeacrhPage
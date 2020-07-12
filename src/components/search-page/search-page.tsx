import React from 'react'
import './search-page.scss'
import SearchForm from './search-form/search-form'
import FlightCard from './flight-card/flight-card'

const SeacrhPage = () => {

  const flights = [1,2,3]
  return (
    <>
      <SearchForm />
      <ul className='flights-container'>
        {flights.map(flight => {
          return <li key={flight}><FlightCard /></li>
        })}
      </ul>
    </>
  )
}

export default SeacrhPage
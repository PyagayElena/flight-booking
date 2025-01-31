import React from 'react'
import './flight-card.scss'
import { Flight } from 'services/flight'
import { numberToPrice } from 'helpers/price/price'
import { useSelector } from 'react-redux'
import { selectorUser, User } from 'store/user-slice'
import { numberToDuration, dateToTimeString } from 'helpers/time/time'

type Props = {
  flight: Flight;
}

const FlightCard = ({ flight }: Props) => {
  const { origin, destination, departureTime, arrivalTime, durationMinutes, dollarsPerKm } = flight
  const user: User = useSelector(selectorUser)
  const departure: Date = new Date(departureTime)
  const arrival: Date = new Date(arrivalTime)

  return (
    <div className='flight-card'>
      <div className='flight-card__details-wrapper'>
        <div className='time-wrapper'>
          <div className='time-wrapper__item'>
            <div className='time'>
              {`${dateToTimeString(departure)}`}
            </div>
            <div className='airport-code'>{origin.airportCode}</div>
            <div className='city'>{origin.city}</div>
          </div>
          <div className='time-wrapper__separator'>
            <div className='direct-text'>Direct</div>
            <div className='line' />
            <img className='airline-image' src={require('../../../assets/plane-logo.png')} alt='airline-logo' />
          </div>
          <div className='time-wrapper__item right'>
            <div className='time'>
              {`${dateToTimeString(arrival)}`}
            </div>
            <div className='airport-code'>{destination.airportCode}</div>
            <div className='city'>{destination.city}</div>
          </div>
        </div>
        <div className='duration-wrapper'>
          <div className='duration-description'>Flight Duration</div>
          <div className='duration-value'>{`${numberToDuration(durationMinutes)}`}</div>
        </div>
      </div>
      <div className='flight-card__price-wrapper'>
        <div className='price-description'>Price per km</div>
        <div className='price-value'>
          {`${numberToPrice(dollarsPerKm, user.currency)}/km`}
        </div>
        <button className='book-button'>Book Now</button>
      </div>
    </div>
  )
}

export default FlightCard
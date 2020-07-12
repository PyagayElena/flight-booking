import React from 'react'
import './flight-card.scss'

const FlightCard = () => {
  return (
    <div className='flight-card'>
      <div className='flight-card__details-wrapper'>
        <div className='time-wrapper'>
          <div className='time-wrapper__item'>
            <div className='time'>06:30</div>
            <div className='airport-code'>FRU</div>
            <div className='city'>Bishkek</div>
          </div>
          <div className='time-wrapper__separator'>
            <div className='direct-text'>Direct</div>
            <div className='line' />
            <img className='airline-image' src={require('../../../assets/plane-logo.png')} alt='airline-logo' />
          </div>
          <div className='time-wrapper__item right'>
            <div className='time'>09:20</div>
            <div className='airport-code'>IST</div>
            <div className='city'>Istanbul</div>
          </div>
        </div>
        <div className='duration-wrapper'>
          <div className='duration-description'>Flight Duration</div>
          <div className='duration-value'>5h 50m</div>
        </div>
      </div>
      <div className='flight-card__price-wrapper'>
        <div className='price-description'>Price per km</div>
        <div className='price-value'>$1.99/km</div>
        <button className='book-button'>Book Now</button>
      </div>
    </div>
  )
}

export default FlightCard
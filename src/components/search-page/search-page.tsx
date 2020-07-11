import React from 'react'
import './search-page.scss'

const SeacrhPage = () => {
  return (
    <>
      <div className='search-form'>
        <div className='search-form__container'>
          <div className='search-form__wrapper'>
            <div className='search-form__field-wrapper'>
              <div className='search-field'>
                <div className='search-field__select'></div>
              </div>
            </div>
            <div className='search-form__field-wrapper'>
              <div className='search-field'>
                <div className='search-field__select'></div>
              </div>
            </div>
            <div className='search-form__field-wrapper'>
              <div className='search-field'>
                <div className='search-field__select'></div>
              </div>
            </div>
            <div className='search-form__field-wrapper'>
              <div className='search-field'>
                <div className='search-field__select'></div>
              </div>
            </div>
          </div>
          <div className='search-form__button-wrapper'>
            <button className='search-button'>Search</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SeacrhPage
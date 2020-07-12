import React, { useState } from 'react'
import './search-form.scss'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const SearchForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const animatedComponents = makeAnimated()

  const cityOptions = [
    { value: 'New York', label: 'New York' },
    { value: 'Bishkek', label: 'Bishkek' },
    { value: 'Singapore', label: 'Singapore' }]

  const selectStyles = {
    control: styles => ({
      ...styles,
      maxHeight: 38,
      boxShadow: 'none',
      borderColor: '#BAC7D5',
      '&:hover': {
        borderColor: '#A6ACAF'
      }
    }),
    option: styles => {
      return {
        ...styles,
        fontSize: '13px',
      }
    },
    menu: styles => {
      return {
        ...styles,
        zIndex: 2,
      }
    },
    placeholder: styles => {
      return {
        ...styles,
        fontSize: '13.3px',
        color: '#757575',
        fontFamily: 'Arial'
      }
    },
    noOptionsMessage: styles => {
      return {
        ...styles,
        fontSize: '12px'
      }
    }
  }

  const singleSelectStyles = {
    ...selectStyles,
    singleValue: styles => {
      return {
        ...styles,
        backgroundColor: '#16A085',
        color: 'white',
        borderRadius: '2px',
        fontSize: '85%',
        padding: '3px 6px'
      }
    }
  }

  const multiSelectStyles = {
    ...selectStyles,
    valueContainer: styles => ({
      ...styles,
      flexWrap: 'nowrap',
    }),
    multiValue: styles => {
      return {
        ...styles,
        backgroundColor: '#CD6155'
      }
    },
    multiValueLabel: styles => ({
      ...styles,
      color: 'white'
    }),
    multiValueRemove: styles => ({
      ...styles,
      color: 'white',
      ':hover': {
        backgroundColor: '#C0392B',
        color: 'white'
      }
    })
  }

  return (
    <div className='search-form'>
      <div className='search-form__container'>
        <div className='search-form__wrapper'>
          <div className='search-form__field-wrapper'>
            <div className='search-field'>
              <div className='search-field__label'>From</div>
              <div className='search-field__select'>
                <Select
                  closeMenuOnSelect={true}
                  placeholder='Select departure city'
                  isClearable={true}
                  // components={animatedComponents}
                  options={cityOptions}
                  styles={singleSelectStyles}
                  noOptionsMessage={() => 'No more cities'}
                />
              </div>
            </div>
          </div>
          <div className='search-form__field-wrapper'>
            <div className='search-field'>
              <div className='search-field__label'>To</div>
              <div className='search-field__select'>
                <Select
                  closeMenuOnSelect={false}
                  placeholder='Select destination cities'
                  // components={animatedComponents}
                  isMulti
                  options={cityOptions}
                  styles={multiSelectStyles}
                  noOptionsMessage={() => 'No more cities'}
                />
              </div>
            </div>
          </div>
          <div className='search-form__field-wrapper'>
            <div className='search-field'>
              <div className='search-field__label'>Departure</div>
              <DatePicker
                className={`search-field__datepicker ${!!startDate && 'selected'}`}
                placeholderText='Select departure date'
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                dateFormat='eeee, MMMM d'
                popperPlacement='bottom'
                popperModifiers={{
                  flip: {
                    behavior: ['bottom']
                  },
                  preventOverflow: {
                    enabled: false
                  },
                  hide: {
                    enabled: false
                  }
                }}
              />
            </div>
          </div>
          <div className='search-form__field-wrapper'>
            <div className='search-field'>
              <div className='search-field__label'>Return</div>
              <DatePicker
                className={`search-field__datepicker ${!!endDate && 'selected'}`}
                placeholderText='Select return date'
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat='eeee, MMMM d'
                popperPlacement='bottom'
                popperModifiers={{
                  flip: {
                    behavior: ['bottom']
                  },
                  preventOverflow: {
                    enabled: false
                  },
                  hide: {
                    enabled: false
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className='search-form__button-wrapper'>
          <button className='search-button'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
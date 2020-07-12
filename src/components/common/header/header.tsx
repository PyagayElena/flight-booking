import React from 'react'
import './header.scss'
import { selectorUser, changeCurrency, User } from '../../../store/user-slice'
import { useDispatch, useSelector } from 'react-redux'
import { Currency } from '../../../constants'

const Header = () => {
  const user: User = useSelector(selectorUser)
  const dispatch = useDispatch()

  return (
    <header className='header'>
      <div className='header__logo'>
        <img className='header__logo__icon' src={require('../../../assets/plane-logo.png')} alt='logo' />
        <h4>Easy travel</h4>
      </div>


      <div className='header__buttons'>
        <button className={`header__currency-button ${user.currency === Currency.dollar && 'selected'}`}
                onClick={() => dispatch(changeCurrency(Currency.dollar))}>$</button>/
        <button className={`header__currency-button ${user.currency === Currency.euro && 'selected'}`}
                onClick={() => dispatch(changeCurrency(Currency.euro))}>€</button>
      </div>
    </header>
  )
}

export default Header
import { Currency, CurrencySign, ExchangeRate } from '../../constants'

/*
 * Converts price in dollars to price string with the corresponding sign and value
 * input: 1.23, 'EUR'
 * output: '€1.08'
 */
export const numberToPrice = (value: number, currency: string) => {
  const price = currency === Currency.dollar ? value : value * ExchangeRate
  return `${CurrencySign[currency]}${price.toFixed(2)}`
}
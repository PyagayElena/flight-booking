import { numberToPrice } from './price'

describe('Price helper', () => {

  test('numberToPrice', () => {
    let result: string = numberToPrice(1.23, 'EUR')
    expect(result).toEqual('€1.08')

    result = numberToPrice(1.23, 'USD')
    expect(result).toEqual('$1.23')
  })
})
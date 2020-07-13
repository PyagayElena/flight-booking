import { objectToUrlParams, StringMap } from './service'

describe('Service helper', () => {

  test('objectToUrlParams', () => {
    expect(objectToUrlParams()).toEqual('')

    let obj: StringMap = { id: '' }
    expect(objectToUrlParams(obj)).toEqual('')

    obj = { id: '123', name: '' }
    expect(objectToUrlParams(obj)).toEqual('?id=123')

    obj = { id: '123', name: 'John' }
    expect(objectToUrlParams(obj)).toEqual('?id=123&name=John')
  })
})
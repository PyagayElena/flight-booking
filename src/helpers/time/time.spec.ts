import { dateToTimeString, numberToDuration } from './time'

describe('Time helper', () => {

  test('numberToDuration', () => {
    const duration: string = numberToDuration(330)
    expect(duration).toEqual('5h 30m')
  })

  test('dateToTimeString', () => {
    const date: Date = new Date('2020-07-12T12:05:46.850Z')
    const hours: number = date.getHours()
    const minutes: number =  date.getMinutes()

    const time: string = dateToTimeString(date)
    const [h, m] = time.split(':')

    expect(Number(h)).toEqual(hours)
    expect(Number(m)).toEqual(minutes)
  })
})
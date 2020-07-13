/*
 *  Converts number of minutes to duration string
 *  input: 330
 *  output: '5h 30m'
 */
export const numberToDuration = (durationMinutes: number) => {
  return `${Math.floor(durationMinutes / 60)}h ${durationMinutes % 60}m`
}

/*
 *  Converts date to local time string
 *  input: new Date('2020-07-12T12:05:46.850Z) timezone +6
 *  output: '18:05'
 */
export const dateToTimeString = (date: Date) => {
  return `${('0'  + date.getHours()).slice(-2)}:${('0'  + date.getMinutes()).slice(-2)}`
}
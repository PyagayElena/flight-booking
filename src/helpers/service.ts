export interface StringMap { [key: string]: string }

/*
 * Converts object properties to request inline parameters, if any
 */
export const objectToUrlParams = (obj?: StringMap) => {

  if (!obj) return ''

  Object.keys(obj).forEach((key: string) => {
    if(!obj[key]) {
      delete obj[key]
    }
  })

  if (!Object.keys(obj).length) return ''

  const params = Object.keys(obj)
                       .map(key => key + '=' + obj[key])
                       .join('&')

  return `?${params}`
}
/*
 * Fetcher is a service that manages get, post, put and delete requests,
 * handles headers and prepares parameters and body for request
 */

import { objectToUrlParams, StringMap } from 'helpers/service/service'

class Fetcher {
  private headers: StringMap

  constructor() {
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }

  get(url: string, params?: StringMap, customHeaders: StringMap = {}): Promise<Response> {
    return fetch(`${url}${objectToUrlParams(params)}`, this.defaultRequestInit('get', customHeaders))
  }

  post(url: string, body: StringMap = {}, customHeaders: StringMap = {}): Promise<Response> {
    return fetch(url, {
      ...this.defaultRequestInit('post', customHeaders),
      body: JSON.stringify(body)
    })
  }

  put(url: string, body: StringMap = {}, customHeaders: StringMap = {}): Promise<Response> {
    return fetch(url, {
      ...this.defaultRequestInit('put', customHeaders),
      body: JSON.stringify(body)
    })
  }

  delete(url: string, customHeaders: StringMap = {}): Promise<Response> {
    return fetch(`${url}`, this.defaultRequestInit('delete', customHeaders))
  }

  defaultRequestInit(method: string, customHeaders: StringMap = {}): RequestInit {
    return {
      method,
      headers: {...this.headers, ...customHeaders}
    }
  }
}

const singletonInstance = new Fetcher()
Object.freeze(singletonInstance)

export default singletonInstance
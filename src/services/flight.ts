// import Fetcher from './fetcher'
import {MockFlights} from '../mocks/flights'

// const apiGetFlights = 'some-api-url'

interface Airport {
  airportCode: string;
  city: string;
}

export interface Flight {
  id: string;
  origin: Airport;
  destination: Airport;
  departureTime: string;
  arrivalTime: string;
  durationMinutes: number;
  dollarsPerKm: number;
}

export default class FlightService {

  /*
   * Returns a list of flights corresponding to the provided parameters
   */
  async getFlightList(from: string, to: string[], departureDate: Date, returnDate: Date): Promise<Flight[]> {
    try {
      // const params: { origin: string; destination: string[]; departureDate: string; returnDate: string} = {
      //   origin: from,
      //   destination: to,
      //   departureDate: departureDate.toISOString(),
      //   returnDate: returnDate.toISOString()
      // }

      // ToDo: Make request to real flights API and uncomment all the code above
      // const response: Response = await Fetcher.get(apiGetFlights, params)
      // return await response.json()

      // Simulate fetch delay and return mock data
      return await new Promise(resolve =>
                                 setTimeout(() => resolve(MockFlights), 1000))

    } catch (e) {
      console.log('Error while trying to getFlightList: ', e)
      return []
    }
  }
}
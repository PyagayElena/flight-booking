import { Flight } from 'services/flight'

export const MockFlights: Flight[] = [
  {
    id: '0',
    origin: {
      airportCode: 'FRU',
      city: 'Bishkek'
    },
    destination: {
      airportCode: 'JFK',
      city: 'New York'
    },
    departureTime: '2020-07-12T12:05:46.850Z',
    arrivalTime: '2020-07-12T21:17:46.850Z',
    durationMinutes: 620,
    dollarsPerKm: 1.23
  },
  {
    id: '1',
    origin: {
      airportCode: 'JFK',
      city: 'New York'
    },
    destination: {
      airportCode: 'FRU',
      city: 'Bishkek'
    },
    departureTime: '2020-08-12T03:42:46.850Z',
    arrivalTime: '2020-08-12T17:23:46.850Z',
    durationMinutes: 620,
    dollarsPerKm: 1.79
  },
  {
    id: '2',
    origin: {
      airportCode: 'FRU',
      city: 'Bishkek'
    },
    destination: {
      airportCode: 'SIN',
      city: 'Singapore'
    },
    departureTime: '2020-09-12T05:49:46.850Z',
    arrivalTime: '2020-09-12T16:30:46.850Z',
    durationMinutes: 350,
    dollarsPerKm: 2.74
  },
  {
    id: '3',
    origin: {
      airportCode: 'SIN',
      city: 'Singapore'
    },
    destination: {
      airportCode: 'FRU',
      city: 'Bishkek'
    },
    departureTime: '2020-09-12T09:45:46.850Z',
    arrivalTime: '2020-09-12T14:21:46.850Z',
    durationMinutes: 350,
    dollarsPerKm: 3.54
  }
]
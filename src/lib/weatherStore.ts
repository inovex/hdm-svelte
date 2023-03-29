import { writable } from 'svelte/store'

import apiClient, { type WeatherData } from './ApiClient'

const { subscribe, update } = writable<WeatherData[]>([])

async function fetchData() {
  const weatherData = await apiClient.getWeatherData()
  update((weatherHistory: WeatherData[]) => {
    return [...weatherHistory, weatherData].slice(-30)
  })

  setTimeout(fetchData, 1000)
}

fetchData()

const weatherStore = {
  subscribe
}

export default weatherStore
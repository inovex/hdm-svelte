import { writable } from 'svelte/store'

import apiClient, { type WeatherData } from './ApiClient'

interface WithSmoothedValues extends WeatherData {
  temperatureCelsiusSmooth: number
  humidityPercentSmooth: number
  windKmHSmooth: number
}

const { subscribe, update } = writable<WithSmoothedValues[]>([])

async function fetchData() {
  const weatherData = await apiClient.getWeatherData()
  update((weatherHistory: WithSmoothedValues[]) => {
    const latestEntry = weatherHistory[weatherHistory.length - 1]

    const temperatureCelsiusSmooth = exponentialDampening(
      latestEntry?.temperatureCelsiusSmooth || weatherData.temperatureCelsius,
      weatherData.temperatureCelsius,
      0.1
    )

    const humidityPercentSmooth = exponentialDampening(
      latestEntry?.humidityPercentSmooth || weatherData.humidityPercent,
      weatherData.humidityPercent,
      0.1
    )

    const windKmHSmooth = exponentialDampening(
      latestEntry?.windKmHSmooth || weatherData.windKmH,
      weatherData.windKmH,
      0.1
    )

    return [
      ...weatherHistory, 
      {
        ...weatherData,
        temperatureCelsiusSmooth,
        humidityPercentSmooth,
        windKmHSmooth
      }
    ].slice(-30)
  })

  setTimeout(fetchData, 1000)
}

fetchData()

const weatherStore = {
  subscribe
}

function exponentialDampening(previousValue: number, currentValue: number, factor: number) {
  return previousValue * (1 - factor) + currentValue * factor
}

export default weatherStore
import { getRandomElement, randomNumber, wait } from './utility'

export type WEATHER_TYPE = 'SUN' | 'SUN_CLOUDY' | 'CLOUDY' | 'RAIN' | 'SNOW'

export interface WeatherData {
  type: WEATHER_TYPE
  temperatureCelsius: number
  humidityPercent: number
  windKmH: number
}

function warp(value: number, lower: number, upper: number): number {
  const randomValue = Math.random() * 2 - 1
  value = value + randomValue
  value = Math.max(lower, value)
  value = Math.min(upper, value)

  return value;
}

let temperatureCelsius = 20
let humidityPercent = 40
let windKmH = 10

setInterval(() => {
  temperatureCelsius = warp(temperatureCelsius, -10, 35)
  humidityPercent = warp(humidityPercent, 20, 80)
  windKmH = warp(windKmH, 0, 30)
}, 1000)

class ApiClient {
  async getWeatherData(): Promise<WeatherData> {
    await wait(randomNumber(500, 3000))
    
    return {
      type: getRandomElement(['SUN', 'SUN_CLOUDY', 'CLOUDY', 'RAIN', 'SNOW']),
      temperatureCelsius,
      humidityPercent,
      windKmH
    }
  }
}

export default new ApiClient
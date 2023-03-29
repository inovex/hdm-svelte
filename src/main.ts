import App from './App.svelte'

import apiClient from './lib/ApiClient'

const app = new App({
  target: document.getElementById('app'),
})

apiClient.getWeatherData().then(weatherData => console.log(weatherData))

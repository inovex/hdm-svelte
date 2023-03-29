<script lang='ts'>
  import { onMount } from 'svelte'

  import apiClient, { type WeatherData } from '../lib/ApiClient'
  import { round } from '../lib/utility'

  let weatherData: WeatherData | undefined = undefined
  onMount(async () => {
    weatherData = await apiClient.getWeatherData()
  })
</script>

{#if weatherData}
  Temperature: {round(weatherData.temperatureCelsius)}°C<br>
  Humidity: {round(weatherData.humidityPercent)}%<br>
  Wind: {round(weatherData.windKmH)}km/h<br>

  <div>
    {#if weatherData.type === 'SUN'}
      ☀️
    {:else if weatherData.type === 'SUN_CLOUDY'}
      ⛅
    {:else if weatherData.type === 'CLOUDY'}
      ☁️
    {:else if weatherData.type === 'RAIN'}
      🌧️
    {:else if weatherData.type === 'SNOW'}
      🌨️
    {/if}
  </div>
{:else}
  no weather data yet!
{/if}

<style>
  div {
    border: 10px solid #ccc;
    width: 30%;
    margin: 0 auto;
    font-size: 10rem;
  }
</style>
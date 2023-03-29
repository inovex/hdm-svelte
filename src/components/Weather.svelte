<script lang='ts'>
  import { round } from '../lib/utility'

  import weatherStore from '../lib/weatherStore'
  import WeatherType from './WeatherType.svelte'
  
  $: weatherData = $weatherStore[$weatherStore.length - 1]
</script>

{#if weatherData !== undefined}
  Temperature: {round(weatherData.temperatureCelsius)}°C<br>
  Humidity: {round(weatherData.humidityPercent)}%<br>
  Wind: {round(weatherData.windKmH)}km/h<br>

  <div>
    <WeatherType weatherType={weatherData.type} />
  </div>
{/if}

<style>
  div {
    border: 10px solid #ccc;
    width: 30%;
    margin: 0 auto;
    font-size: 10rem;
    margin-top: 1rem;
  }
</style>
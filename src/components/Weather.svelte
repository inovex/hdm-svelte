<script lang='ts'>
  import { round } from '../lib/utility'

  import weatherStore from '../lib/weatherStore'
  import ChangeIndicator from './ChangeIndicator.svelte'
  import WeatherType from './WeatherType.svelte'
  
  $: weatherData = $weatherStore[$weatherStore.length - 1]
  $: previousWeatherData = $weatherStore[$weatherStore.length - 2]
</script>

{#if weatherData !== undefined}
  Temperature: 
    {round(weatherData.temperatureCelsius)}°C 
    <ChangeIndicator currentValue={weatherData?.temperatureCelsius} previousValue={previousWeatherData?.temperatureCelsius} />
    <br>
  
  Humidity: 
    {round(weatherData.humidityPercent)}%
    <ChangeIndicator currentValue={weatherData?.humidityPercent} previousValue={previousWeatherData?.humidityPercent} />
    <br>
  
  Wind: 
    {round(weatherData.windKmH)}km/h
    <ChangeIndicator currentValue={weatherData?.windKmH} previousValue={previousWeatherData?.windKmH} />
    <br>

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
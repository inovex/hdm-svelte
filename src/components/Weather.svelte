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
    {round(weatherData.temperatureCelsiusSmooth)}°C 
    <ChangeIndicator currentValue={weatherData?.temperatureCelsiusSmooth} previousValue={previousWeatherData?.temperatureCelsiusSmooth} />
    <br>
  
  Humidity: 
    {round(weatherData.humidityPercentSmooth)}%
    <ChangeIndicator currentValue={weatherData?.humidityPercentSmooth} previousValue={previousWeatherData?.humidityPercentSmooth} />
    <br>
  
  Wind: 
    {round(weatherData.windKmHSmooth)}km/h
    <ChangeIndicator currentValue={weatherData?.windKmHSmooth} previousValue={previousWeatherData?.windKmHSmooth} />
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
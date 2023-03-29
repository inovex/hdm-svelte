<script lang='ts'>
  import weatherStore from '../lib/weatherStore'
  import WeatherType from './WeatherType.svelte'

  $: truncatedHistory = $weatherStore.slice(-15)
</script>

<ul>
  {#each truncatedHistory as weatherData}
    <li>
      <WeatherType weatherType={weatherData.type} />
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-top: 1rem;
    justify-content: center;
  }
</style>
<script>
  import './app.css'

  import Weather from './components/Weather.svelte'
  import WeatherHistory from './components/WeatherHistory.svelte'
</script>

<main>
  <h2>Current Weather</h2>
  <Weather />

  <h2>Weather History</h2>
  <WeatherHistory />
</main>

<style>
  h2 {
    margin-top: 3rem;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
<script lang='ts'>
  import type { WEATHER_TYPE } from '../lib/ApiClient'

  export let weatherType: WEATHER_TYPE
</script>

{#if weatherType === 'SUN'}
  ☀️
{:else if weatherType === 'SUN_CLOUDY'}
  ⛅
{:else if weatherType === 'CLOUDY'}
  ☁️
{:else if weatherType === 'RAIN'}
  🌧️
{:else if weatherType === 'SNOW'}
  🌨️
{/if}
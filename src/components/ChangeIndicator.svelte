<script lang='ts'>
  export let currentValue = undefined
  export let previousValue = undefined
</script>

{#if currentValue !== undefined && previousValue !== undefined}
  {#if currentValue > previousValue}
    ↗️
  {:else}
    ↘️
  {/if}
{/if}
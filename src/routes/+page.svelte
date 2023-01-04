<script>
  import { isDarkMode } from "$lib/stores/global.store";
</script>

<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => {
    if(!$isDarkMode) {
      isDarkMode.set(true)
    } else {
      isDarkMode.set(false)
    }
  }}
>
  change
</div>
<script>
  import "../app.css";
  import { isDarkMode } from "$lib/stores/global.store";
</script>

<div class="{$isDarkMode ? 'dark' : '' }">
  <div class="text-black dark:text-white p-5 bg-slate-600 dark:bg-slate-900">
    Hello
  </div>
</div>

<slot/>
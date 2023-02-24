<script>
  import { isDarkMode } from "$lib/stores/global.store";
</script>

<div class="w-full h-screen flex justify-center items-center">
  <embed
    src="/CMH-RESUME-Dark.pdf#toolbar=0"
    title='CMH-RESUME'
    class="w-full h-screen pt-[56px] lg:pt-[97px] {$isDarkMode ? '' : 'w-0'}"
  />
  <embed
    src="/CMH-RESUME-Light.pdf#toolbar=0"
    title='CMH-RESUME'
    class="w-full h-screen pt-[56px] lg:pt-[97px] {$isDarkMode ? 'w-0' : ''}"
  />
</div>
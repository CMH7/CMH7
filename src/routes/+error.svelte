<script>
  import { page } from "$app/stores";
</script>

<div class="w-full h-screen">
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div class="text-5xl text-DarkChoco dark:text-Teal inter mb-3">
      {$page.status}
    </div>
    <div class="text-8xl text-DarkChoco dark:text-Teal inter">
      {$page.error?.message}
    </div>
  </div>
</div>
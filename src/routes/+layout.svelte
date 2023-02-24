<script>
  import "../app.css";
  import { isDarkMode } from "$lib/stores/global.store";
	import Icon from "$lib/components/Icon.svelte";
  import { mdiGithub, mdiInstagram, mdiFacebook, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'

  let iconSize = 40
</script>

<div class="{$isDarkMode ? 'dark' : '' } h-screen w-full relative scroll-smooth">
  <!-- Navbar -->
  <div class="dark:text-Teal py-5 px-36 bg-Tan/75 dark:bg-PrimaryBlue/75 w-full flex align-middle transition-all fixed top-0 left-0 z-50 backdrop-blur-md">
    <div class="w-full flex items-center justify-between">
      <!-- logo -->
      <a href="/#top">
        {#if $isDarkMode}
          <img src="images/logo1.png" alt="logo">
        {:else}
          <img src="images/logo1-Light.png" alt="logo">
        {/if}
      </a>
      
      <!-- links -->
      <div class="flex items-center justify-end">
        <!-- About -->
        <div class="px-3 py-2 mr-3 cursor-pointer hover:border-b-[1px] hover:border-b-DarkChoco dark:hover:border-b-Teal">
          <a href="/#about">
            <span class="text-3xl select-none text-DarkChoco dark:text-Teal">A</span><span class="text-DarkChoco dark:text-Def text-lg font-light select-none">bout</span>
          </a>
        </div>

        <!-- Experience -->
        <div class="px-3 py-2 mr-3 cursor-pointer hover:border-b-[1px] hover:border-b-DarkChoco dark:hover:border-b-Teal">
          <a href="/#experience">
            <span class="text-3xl select-none text-DarkChoco dark:text-Teal">E</span><span class="text-DarkChoco dark:text-Def text-lg font-light select-none">xperience</span>
          </a>
        </div>

        <!-- Works -->
        <div class="px-3 py-2 mr-3 cursor-pointer hover:border-b-[1px] hover:border-b-DarkChoco dark:hover:border-b-Teal">
          <a href="/#projects">
            <span class="text-3xl select-none text-DarkChoco dark:text-Teal">W</span><span class="text-DarkChoco dark:text-Def text-lg font-light select-none">orks</span>
          </a>
        </div>

        <!-- Resume Button -->
        <a href='/resume' class="text-2xl cursor-pointer select-none mx-6 font-light px-5 py-2 border-2 flex justify-center items-center rounded-lg transition-all border-DarkChoco hover:border-Tan dark:border-Teal dark:hover:border-PrimaryBlue bg-transparent hover:bg-DarkChoco dark:hover:bg-Teal text-DarkChoco hover:text-LightTan dark:text-Teal dark:hover:text-PrimaryBlue">
          Resume
        </a>

        <!-- dark mode -->
        {#if $isDarkMode}
          
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {isDarkMode.set(false)}} class="px-3 py-2 mr-3 cursor-pointer">
            <Icon svgClass='fill-Teal' size={iconSize} path={mdiWeatherSunny} />
          </div>
        {:else}
          
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {isDarkMode.set(true)}} class="px-3 py-2 mr-3 cursor-pointer">
            <Icon svgClass='fill-DarkChoco' size={iconSize} path={mdiWeatherNight} />
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- socmed links -->
  <div class="flex flex-col items-center fixed left-10 bottom-0">
    <!-- github -->
    <div class="mb-4">
      <Icon svgClass='fill-DarkTan hover:fill-DarkChoco dark:fill-Def dark:hover:fill-Teal cursor-pointer' size={iconSize} path={mdiGithub} />
    </div>

    <!-- instagram -->
    <div class="mb-4">
      <Icon svgClass='fill-DarkTan hover:fill-DarkChoco dark:fill-Def dark:hover:fill-Teal cursor-pointer' size={iconSize} path={mdiInstagram} />
    </div>
    
    <!-- Facebook -->
    <div class="mb-4">
      <Icon svgClass='fill-DarkTan hover:fill-DarkChoco dark:fill-Def dark:hover:fill-Teal cursor-pointer' size={iconSize} path={mdiFacebook} />
    </div>

    <!-- line -->
    <div class="w-1 h-52 bg-DarkTan dark:bg-Def">
    </div>
  </div>
  
  <!-- email link -->
  <div class="flex flex-col items-center fixed right-10 bottom-0">
    <!-- github -->
    <div class="mb-4 rotate-90 text-DarkTan hover:text-DarkChoco dark:text-Def dark:hover:text-Teal cursor-pointer absolute top-[-65%]">
      charlesm.herrera0700@gmail.com
    </div>

    <!-- line -->
    <div class="w-1 h-52 bg-DarkTan dark:bg-Def">
    </div>
  </div>

  <div class="font-sans w-full transition-all bg-LightTan dark:bg-SecondBlue">
    <slot/>
  </div>
</div>

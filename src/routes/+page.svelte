<script>
	import { isDarkMode } from "$lib/stores/global.store";


  const exp = [
    {
      jobTitle: 'Front-end Web Developer Intern',
      company: 'Ply It Fwd',
      duration: 'June 8 - July 17, 2022',
      assignedTo: [
        'Programmed a module',
        'Bug fixing',
        'Quality Assurance',
        'Project nanagement',
        'Worked with variety of frameworks and languages such as React, SASS and DJango'
      ]
    },
    {
      jobTitle: 'Website Designer Intern',
      company: 'Backbone Creatives',
      duration: 'August 15 - November 22, 2022',
      assignedTo: [
        'Website Layout',
        'Website Designing',
        'Website Contect Creation',
        'UI/UX Designing',
        'Prototyping',
        'Figma',
        'UI animations',
        'Branding'
      ]
    },
    {
      jobTitle: 'Tech. Lead and Project Manager',
      company: 'Team V8-3',
      duration: 'December 12 2021 - February 22, 2023',
      assignedTo: [
        'Website Layouting',
        'Website Designing',
        'Backend programming',
        'UI/UX Designing',
        'Quality Assurance',
        'Project Management',
        'Group Speaker',
        'Full-stack developing'
      ]
    }
  ]

  $: buildOn = [
    {
      image: `images/svelteIcon${$isDarkMode ? '' : '2'}.png`,
      name: 'Svelte'
    },
    {
      image: `images/bulmaIcon${$isDarkMode ? '' : '2'}.png`,
      name: 'Bulma'
    },
    {
      image: `images/mongoDBIcon${$isDarkMode ? '' : '2'}.png`,
      name: 'MongoDB'
    },
    {
      image: `images/prismaIcon${$isDarkMode ? '' : '2'}.png`,
      name: 'Prisma.io'
    }
  ]

  let loves = ['programming', 'designing', 'gaming', 'developing', 'foodtrips']
  let curLove = 0
  let curWork = 1

  setInterval(() => {
    if(curLove >= 4) {
      curLove = 0
    } else {
      curLove++
    }
  }, 1500)

  /**
   * Changes the current work number for the experience
   * 
   * @param {number} num
   */
  const changeCurWork = (num) => {
    curWork = num
  }
</script>

<svelte:head>
  <title>CM Herrera</title>
</svelte:head>

<!-- Banner -->
<div id='top' class="w-full h-screen">
  <div class="h-full flex flex-col justify-center items-center">
    <div class='w-full lg:w-3/4 lg:pt-20'>
      <div class="flex flex-col px-12">
        <div class="w-full lg:w-fit text-Choco dark:text-Teal text-base md:text-xl lg:text-2xl font-semibold mb-3">
          Hi, my name is
        </div>
  
        <div class="w-full lg:w-2/3 text-clip text-3xl md:text-6xl lg:text-8xl font-bold dark:text-Highlight text-DarkChoco mb-3 md:mb-4 lg:mb-6">
          Charles Maverick Herrera
        </div>
  
        <div class="w-fit flex mb-4 md:mb-7 lg:mb-10">
          <div class="text-2xl md:4xl lg:text-6xl font-bold text-Choco dark:text-Def">
            I love <span>{loves[curLove]}</span>
          </div>     
        </div>
  
        <div class='text-Choco dark:text-Def w-full md:w-3/4 lg:w-2/4 font-semibold text-sm md:text-lg lg:text-xl leading-relaxed text-justify md:text-left lg:leading-loose pr-3'>
          I'm a web designer and web developer specializing in the fields of NodeJS, SvelteKit, Tailwind and other bunch of CSS and JS Frameworks. I've just finished our very own capstone project <a href='http://www.axion.social' class="underline text-DarkChoco dark:text-Teal">Axion</a>
        </div>

        <a href='#about' class="w-[100px] lg:w-[11%] h-10 lg:h-16 text-base lg:text-xl ease-in hover:text-DarkChoco text-LightTan dark:text-PrimaryBlue dark:hover:text-Teal font-bold select-none bg-DarkChoco hover:bg-transparent dark:bg-Teal dark:hover:bg-transparent border-2 border-transparent hover:border-DarkChoco dark:hover:border-Teal transition-all rounded-lg flex justify-center items-center mt-7 md:mt-10 lg:mt-16 cursor-pointer">
          Know me
        </a>
  
      </div>
    </div>
  </div>
</div>

<!-- About -->
<div id='about' class="w-full h-screen">
  <div class="h-full flex flex-col justify-center items-center">
    <div class="w-full flex items-center justify-center mb-10 lg:mb-20">
      <div class="flex-grow h-[1px] bg-Choco dark:bg-Def" />
      <div class="text-2xl md:text-4xl lg:text-6xl font-bold mx-0 md:mx-5 lg:mx-10 text-Choco dark:text-Def">
        About me
      </div>
      <div class="flex-grow h-[1px] bg-Choco dark:bg-Def" />
    </div>

    <div class="w-full lg:w-3/4 flex justify-around flex-wrap">
      <div class="iimmaaggee1 w-[181px] md:w-[281px] lg:w-[481px] h-[181px] md:h-[281px] lg:h-[481px] bg-DarkChoco dark:bg-Teal flex justify-center items-center mb-10 lg:mb-0">
        <img alt='dp.jpg' src='/images/dp.jpg' class="iimmaaggee w-[175px] md:w-[275px] lg:w-[475px] h-[175px] md:h-[275px] lg:h-[475px] opacity-60 hover:opacity-100 brightness-50 hover:brightness-100 ease-in transition-all duration-300 z-10" />
      </div>

      <div class="w-full lg:w-2/4 h-full flex flex-col lg:justify-around items-end px-12">
        <div class='text-Choco dark:text-Def w-full md:w-fit font-semibold text-sm md:text-xl lg:text-2xl leading-loose text-justify lg:text-right'>
          Hello, my name is <span class="text-DarkChoco dark:text-Teal text-lg md:text-2xl lg:text-3xl font-bold">Charles Maverick Herrera</span>, I can play a guitar, likes playing computer games, I can create a graphic and web designs and most of all I do love programming, mainly being a full-stack web developer.
        </div>

        <div class='text-Choco dark:text-Def w-full lg:w-fit font-semibold text-sm md:text-lg lg:text-2xl leading-loose text-justify md:text-right mt-7 md:mt-10 lg:mt-16'>
          Interested to talk on some projects, get some advices, collaborate designs or get me in your company? Click my social media links or email me.
        </div>
      </div>
    </div>
  </div>
</div>

<!-- experience -->
<div id='experience' class="w-full h-screen mt-20 md:mt-0">
  <div class="h-full flex flex-col justify-center items-center">
    <div class="w-full flex items-center justify-center mb-5 lg:mb-20">
      <div class="flex-grow h-[1px] bg-Choco dark:bg-Def" />
      <div class="text-2xl md:text-4xl lg:text-6xl font-bold mx-0 lg:mx-10 text-Choco dark:text-Def">
        My Experiences
      </div>
      <div class="flex-grow h-[1px] bg-Choco dark:bg-Def" />
    </div>

    <div class="w-full h-full lg:h-3/5 flex flex-col lg:flex-row justify-center px-12 lg:px-0">
      <div class="hidden lg:flex flex-col w-1/6 lg:mr-5">
        {#each exp as ex, i}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => {changeCurWork(i + 1)}} class="w-full {curWork == i + 1 ? 'bg-DarkChoco/5 dark:bg-Teal/5' : ''} cursor-pointer relative">
            <div class="w-1 h-full absolute left-0 {curWork == i + 1 ? 'w-1 bg-DarkChoco dark:bg-Teal' : 'w-[1px] bg-DarkTan dark:bg-Def'}"/>
            <div class="transition-all text-2xl inter {curWork == i + 1 ? 'text-DarkChoco dark:text-Teal' : 'text-DarkTan dark:text-Def'} hover:text-DarkChoco dark:hover:text-Teal pl-6 py-3">
              {ex.company}
            </div>
          </div>
        {/each}
      </div>

      {#each exp as ex, i}
        <div class="flex flex-col w-full lg:w-[45%] h-full border-b-[1px] border-b-Def lg:border-b-0 py-2 lg:border-l-[1px] lg:border-l-Choco lg:dark:border-l-Def px-5 {curWork == i + 1 ? '' : 'lg:hidden'}">
          <div class="text-base lg:text-4xl font-bold lg:font-semibold text-DarkChoco dark:text-Highlight">
            {ex.jobTitle} <span class="text-DarkTan dark:text-Teal font-semibold">@ {ex.company}</span>
          </div>
          <div class="text-Choco dark:text-Def text-sm md:text-base lg:text-lg font-thin lg:font-semibold lg:py-2">
            {ex.duration}
          </div>
          <div class="pl-16 pt-3 lg:pt-7">
            <ul class="list-disc">
              {#each ex.assignedTo as ass}
                <li class="text-Choco dark:text-Def text-xs md:text-base lg:text-2xl">{ass}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- projets -->
<div id='projects' class="w-full h-screen mt-20 lg:mt-0">
  <div class="h-full flex flex-col justify-center items-center">
    <div class="w-full flex items-center justify-center mb-5 lg:mb-20">
      <div class="flex-grow h-[1px] bg-Choco dark:bg-Def" />
      <div class="text-2xl md:text-4xl lg:text-6xl font-bold mx-0 lg:mx-10 text-Choco dark:text-Def">
        Projects I Made
      </div>
      <div class="flex-grow h-[1px] bg-Choco dark:bg-Def" />
    </div>

    <div class="w-full md:w-[90%] lg:w-[80%] flex flex-col items-center lg:flex-row justify-between">
      <div class="w-[1000px] h-[500px] hidden lg:block" />

      <!-- pic -->
      <a href="http://www.axion.social" class="lg:absolute">
        <div class="w-[280px] md:w-[900px] lg:w-[1000px] h-[150px] md:h-[400px] lg:h-[500px] dark:bg-Teal rounded-lg overflow-hidden">
          <img src='/images/Axion.png' alt='Axion' class="w-full h-full opacity-60 hover:opacity-100 brightness-50 hover:brightness-100 ease-in transition-all duration-300" />
        </div>
      </a>

      <div class="flex flex-col items-center lg:items-end justify-center px-12 lg:px-0">
        <div class="text-DarkTan dark:text-Teal text-base lg:text-xl">
          Full-stack Developer
        </div>

        <div class="text-DarkChoco dark:text-Highlight font-bold lg:font-semibold text-3xl md:text-[25px] lg:text-[45px] mb-3">
          Axion
        </div>

        <div class='w-[280px] lg:w-[700px] px-3 lg:px-10 py-3 lg:py-14 rounded-xl drop-shadow-lg bg-Tan dark:bg-MidBlue text-Choco text-justify dark:text-DefLight text-[15px] lg:text-[20px] font-medium leading-relaxed lg:leading-loose lg:z-10'>
          Our very own capstone project. Axion, an Online Web-Based Academic Task Management Tool for College Students. Manage and complete your tasks wherever you are!
        </div>

        <!-- icons -->
        <div class="w-full lg:w-fit flex flex-col lg:flex-row lg:items-center mt-10">
          {#each buildOn as bo}
            <div class='w-2/4 flex items-center lg:ml-9'>
              <div class="mr-2">
                <img src="{bo.image}" alt="svelteIcon">
              </div>
    
              <div class="text-Choco dark:text-DefLight font-medium text-[20px]">
                {bo.name}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div class="w-full lg:w-[80%] flex lg:justify-end items-center mt-5 px-12 lg:px-0">
      <a href='#contact' class="w-full lg:w-1/6 h-14 text-base lg:text-xl ease-in hover:text-DarkChoco text-LightTan dark:text-PrimaryBlue dark:hover:text-Teal font-bold select-none bg-DarkChoco hover:bg-transparent dark:bg-Teal dark:hover:bg-transparent border-2 border-transparent hover:border-DarkChoco dark:hover:border-Teal transition-all rounded-lg flex justify-center items-center cursor-pointer">
        More projects
      </a>
    </div>
  </div>
</div>

<div class="px-12 lg:px-0 w-full text-center text-[16px] tracking-wide text-DarkChoco dark:text-Highlight py-10 font-semibold">
  Designed and Developed by Charles Maverick Herrera
  <br>
  &#169; 2023
</div>

<style>
  .iimmaaggee1 {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }
  .iimmaaggee {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }
</style>
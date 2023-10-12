<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Switch } from "$lib/components/ui/switch";
  import { Label } from "$lib/components/ui/label";
  import { Gamepad2 } from 'lucide-svelte';

  let darkMode = true;
  const toggleDarkMode = () => {
    const currentMode = !darkMode; // flipped because the callback is handled before the value is updated
  
    if (currentMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  } 

  let recentGames = [
    { player: 'Player 1', level: 'Level 1', time: 120 },
    { player: 'Player 2', level: 'Level 2', time: 120 },
    { player: 'Player 3', level: 'Level 3', time: 120 },
  ];

</script>

<div class="grid grid-cols-[1fr_4fr] w-screen h-screen">
    <div class="w-full h-full flex flex-col items-center justify-start col-start-1 col-span-1 p-5 gap-2 bg-neutral-50 dark:bg-neutral-950 dark:text-white overflow-y-auto">

        <h1 class="text-4xl font-sans text-center w-full border-b-4 border-black dark:border-white py-5">The Magic Library Leaderboard</h1>

        <nav class="w-full h-fit border-b-2 border-black dark:border-white flex flex-col justify-center items-center py-5">
          <section class="w-2/3 flex flex-col gap-1">
            <Button variant="secondary" href="https://wits-sg.github.io/CGV-Project" >
              <Gamepad2 class="mr-2"/>
              Play The Magic Library
            </Button>

            <Button variant="outline" href="/">Home</Button>
            <Button variant="outline" href="/level1">Level One</Button>
            <Button variant="outline" href="/level2">Level Two</Button>
            <Button variant="outline" href="/level3">Level Three</Button>
          </section>
        </nav>

        <div class="w-full h-fit border-b-2 border-black  dark:border-white flex flex-col justify-center items-start py-5 gap-2">
          <h2 class="text-2xl font-sans text-left w-fit border-b-2 border-black dark:border-white ">Recent Games</h2>

          <ul class="list-inside pl-5">
            {#each recentGames as game}
              <li>{game.player}: {game.level} - {game.time} s</li>
            {/each}
          </ul>
        </div>

        <div class="w-full h-fit border-b-2 border-black dark:border-white  flex flex-col justify-center items-start py-5 gap-2">
          <h3 class="text-xl font-sans text-left w-fit border-b-2 border-black">Developers</h3>

          <ul class="list-inside list-disc pl-5">
            <li><a href="https://github.com/lisaa-g" class="text-sky-600 hover:text-sky-800 underline">Lisa Godwin</a></li>
            <li><a href="https://github.com/orwellian225" class="text-sky-600 hover:text-sky-800 underline">Brendan Griffiths</a></li>
            <li><a href="https://github.com/yoniOudmayer" class="text-sky-600 hover:text-sky-800 underline">Yonatan Oudmayer</a></li>
            <li><a href="https://github.com/nihal-ranchod" class="text-sky-600 hover:text-sky-800 underline">Nihal Ranchod</a></li>
            <li><a href="https://github.com/Zach-schwark" class="text-sky-600 hover:text-sky-800 underline">Zach Schwark</a></li>
            <li><a href="https://github.com/Smithash" class="text-sky-600 hover:text-sky-800 underline">Ashlea Smith</a></li>
          </ul>
        </div>


        <div class="w-full h-fit border-b-2 border-black dark:border-white flex flex-col justify-center items-start py-5 gap-2">
          <section class="w-full h-fit flex flex-row justify-start items-center space-x-5">
            <Switch id="dark-mode" bind:checked={darkMode} onCheckedChange={toggleDarkMode}/>
            <Label for="dark-mode">Dark Mode</Label>
          </section>
        </div>

    </div>

    <div class="w-full h-full flex flex-col col-start-2 col-span-1 bg-blue-500">
      <slot />
    </div>
</div>
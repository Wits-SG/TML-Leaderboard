<script lang="ts">
    import PuzzleCard from '$lib/components/puzzle_card.svelte';
</script>

<div class="w-full max-h-full flex flex-col justify-center items-center p-10 gap-5">
    <h1 class="text-4xl font-sans text-center w-1/3 border-b-4 border-black dark:border-white py-5">Home</h1>

    <div class="w-full flex flex-row justify-start items-start gap-10">

        <section class="w-64 flex flex-col gap-5">
            <h2 class="text-2xl font-sans text-center w-full border-b-4 border-primary py-5">Description</h2>

            <p>The Magic Library is 3D puzzle game inspired by escape rooms. The player is tasked with solving a series of puzzles scattered across the library.</p>

            <p>
                The Magic Library was built as our project for our Computer Graphics course. The goal of the project was to introduce us to ThreeJS
                and higher level programming than WebGL / OpenGL but not quite at a game engine.
            </p>

            <p>Each puzzle was designed to showcase some feature or topic taught in the course, varying from shaders to graphical modelling and all things in between.</p>

            <p>
                As part of this, we put together a very rudimentary game engine built on top of 
                <a href="https://threejs.org" class="text-sky-600 hover:text-sky-800 underline">ThreeJS</a> and 
                <a href="https://github.com/kripken/ammo.js/" class="text-sky-600 hover:text-sky-800 underline">AmmoJS</a> called W3Ads (weeds).
            </p>
        </section>

        <section class="w-full flex flex-col gap-5">
            <h2 class="text-2xl font-sans text-center w-full border-b-4 border-primary py-5">Puzzles</h2>

            <div class="flex flex-row w-full gap-5">
                <PuzzleCard 
                    title={'The Office'} 
                    description={`Every library needs a wizard, and every wizard needs an office. Wizards always havs spare bits and bobs all over the place, maybe some of the objects have a crystal hidden behind them?`} 
                    solutions={[
                        `There are three objects, a feather, a wizard's hat and, a cauldron, hidden across the office. Place each of these objects on the red pressure plates from lightest to heaviest.`,
                        `The feather is found in the main room.`,
                        `The cauldron is found in the back room.`,
                        `The hat is found in the upstairs room.`
                    ]} />

                <PuzzleCard 
                    title={'The Music'} 
                    description={`Music can calm the soul and guide us through many complex subjects, but only if the musicians have someone to guide them.`} 
                    solutions={[
                        `The instruments need to be played in a random order every game.`,
                        `The music stand will face the next instrument to be played in the order.`
                    ]} />

                <PuzzleCard 
                    title={'The Hearths'} 
                    description={`Libraries need a place to pull up a chair and read some <i>magic</i> books, and nothing beats a good fireplace. Except maybe a magic fireplace, it does however need to be lit first.`} 
                    solutions={[
                        `Each of the four hearths must be lit with the same colour.`,
                        `The first hearth is just opposite the items.`, 
                        `The second hearth is behind the instruments.`,
                        `The third hearth is at the end of the passage to the Mirror and Chess rooms.`,
                        `The fourth hearth is in the passage to the office.`
                    ]} />

                <PuzzleCard 
                    title={'The Mirror'} 
                    description={`Magic mirrors are a staple, they even show us whats really there, even if it doesn't seem like anything is. Now, how do get across this gap?`} 
                    solutions={[
                        `Look up at the mirror, and walk across the green blocks.`
                    ]} />

                <PuzzleCard 
                    title={'The Chess'} 
                    description={`Chess is a game for the intellectually inclined, and our wizard here thinks himself very smart. So smart he's forgotten how his statues are stored...`} 
                    solutions={[
                        `Place the pieces on the plinth at the back of the room, in the order they were found on the board. Read from left to right as seen from the entrance.`
                    ]} />
            </div>

        </section>
    </div>
</div>
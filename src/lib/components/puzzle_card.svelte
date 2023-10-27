<script lang="ts">
    import { EyeOff, Eye } from "lucide-svelte";

    export let title: string;
    export let description: string;
    export let solutions: Array<string>;

    let reveal: boolean = false;
</script>

<section class="flex flex-col gap-2">
    <h3 class="text-xl font-sans text-center w-full border-b-2 border-secondary-foreground py-2">{title}</h3>
    <p>{@html description}<p>

    {#if reveal}
        <button 
            on:click={() => reveal = false}
            class="text-lg font-sans text-start w-full border-b-2 border-secondary-foreground hover:border-primary py-1 flex flex-row"><EyeOff class="mx-2"/>Hide Solution</button>

            {#each solutions as sol}
                <p>{@html sol}</p>
            {/each}
    {:else}
        <button 
            on:click={() => reveal = true}
            class="text-lg font-sans text-start w-full border-b-2 border-secondary-foreground hover:border-primary py-1 flex flex-row"><Eye class="mx-2"/>Reveal Solution</button>
    {/if}
</section>
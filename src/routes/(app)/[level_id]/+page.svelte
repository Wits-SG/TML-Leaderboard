<script lang="ts">
    import type { PageData } from "../$types";
    import * as Table from "$lib/components/ui/table";

    export let data: PageData;

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        let result: string;
        if (minutes > 0) {
            result = `${minutes}m ${seconds}s`
        } else {
            result = `${seconds}s`
        }

        return result;
    }
</script>

<div class="w-full max-h-full flex flex-col justify-center items-center p-10 gap-10">
    <h1 class="text-4xl font-sans text-center w-1/3 border-b-4 border-black dark:border-white py-5">{data.info.name} Leaderboard</h1>

    <div class="flex flex-row justify-start items-start gap-10 w-2/3 overflow-y-auto">
        <section class="flex flex-col justify-start items-start w-1/4 gap-2">
          <h2 class="text-2xl font-sans text-left w-full border-b-2 border-black dark:border-white ">Information</h2>

          <ol class="gap-1">
            <li><b>Difficulty</b>: {data.info.difficulty}</li>
            <li><b>Number of Puzzles</b>: {data.info.numPuzzles}</li>
          </ol>
        </section>
        <Table.Root class="">
            <Table.Header>
                <Table.Row>
                    <Table.Head class="w-10">Position</Table.Head>
                    <Table.Head class="w-48">Player</Table.Head>
                    <Table.Head>Time</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {#each data.games as game, i}
                    <Table.Row>
                        <Table.Cell>{i + 1}</Table.Cell>
                        <Table.Cell class="font-medium">{game.player}</Table.Cell>
                        <Table.Cell class="">{formatTime(game.time)}</Table.Cell>
                    </Table.Row>
                {/each}
            </Table.Body>
        </Table.Root>

    </div>
</div>
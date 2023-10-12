import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {

    const res = await fetch(`/api/levels?level_id=${params.level_id}`);
    const json = await res.json();

    const levelInfo  = {
        id: params.level_id,
        name: json.name,
        difficulty: json.difficulty,
        numPuzzles: json.numPuzzles
    };

    const levelGames: Array<{ player: string, time: number }> = [];

    for (let i = 0; i < 15; ++i) {
        levelGames.push({
            player: `Player ${i % 20}`,
            time: Math.random() * 500,
        });
    }

    return {
        info: levelInfo,
        games: levelGames 
    }

};
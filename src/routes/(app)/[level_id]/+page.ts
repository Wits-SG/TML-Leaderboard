import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {

    const levelResult = await fetch(`/api/levels?level_id=${params.level_id}`);
    const json = await levelResult.json();

    const levelInfo  = {
        id: params.level_id,
        name: json.name,
        difficulty: json.difficulty,
        numPuzzles: json.numPuzzles
    };

    const gamesResult = await fetch(`/api/games?num_games=15&level_id=${params.level_id}`);
    const levelGames: Array<{ player: string, time: number }> = await gamesResult.json();

    return {
        info: levelInfo,
        games: levelGames 
    }

};
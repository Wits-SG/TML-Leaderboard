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

    const gamesResult = await fetch(`/api/games?num_games=100&level_id=${params.level_id}`);
    const levelGames: Array<{ playerName: string, playerTime: number }> = await gamesResult.json();

    return {
        info: levelInfo,
        games: levelGames 
    }

};
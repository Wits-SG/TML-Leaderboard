import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

    const levelInfo  = {
        id: params.level_id,
        name: 'Level One',
        difficulty: 'Easy',
        numPuzzles: 1
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
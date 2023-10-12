import { error, json } from '@sveltejs/kit';
import { turso } from '$lib/turso.js';

export const GET = async ({ url }) => {

    const numGames = url.searchParams.get('num_games');
    const levelId = url.searchParams.get('level_id');

    // if a levelID is specified fetch the specified number of games for that level
    if (levelId) {
        try {
            const result = await turso.execute({
                sql: 'SELECT player_name AS playerName, player_time AS playerTime, game_date AS gameDate FROM games WHERE level_id = ? ORDER BY player_time ASC LIMIT ?',
                args: [ levelId, numGames ]
            });

            return json(result.rows);
        } catch (e: any) {
            throw error(500, 'Something went wrong');
        }
    } else {
        try {
            const result = await turso.execute({
                sql: 'SELECT player_name AS playerName, player_time AS playerTime, game_date AS gameDate FROM games ORDER BY player_time ASC LIMIT ?',
                args: [ numGames ]
            });

            return json(result.rows);

        } catch {
            throw error(500, 'Something went wrong');
        }
    }
}
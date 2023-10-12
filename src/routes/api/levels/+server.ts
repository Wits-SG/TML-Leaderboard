import { error, json } from '@sveltejs/kit';
import { turso } from '$lib/turso.js';

export const GET = async ({ url }) => {

    const levelId = url.searchParams.get('level_id');

    try {
        const result = await turso.execute({
            sql: 'SELECT name, difficulty, num_puzzles FROM levels WHERE level_id = ? LIMIT 1',
            args: [ levelId ]
        });

        return json({
            name: result.rows[0]['name'],
            difficulty: result.rows[0]['difficulty'],
            numPuzzles: result.rows[0]['num_puzzles'] 
        });
    } catch {
        throw error(500, 'Something went wrong');
    }

    return new Response('');
}
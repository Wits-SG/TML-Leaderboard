import { env } from '$env/dynamic/private';
import { createClient } from "@libsql/client";

export const turso = createClient({
    url: env.DB_URL,
    authToken: env.DB_TOKEN
});
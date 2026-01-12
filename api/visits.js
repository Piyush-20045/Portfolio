import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const sql = neon(process.env.DATABASE_URL);

    try {
        if (req.method === 'POST') {
            // Increment the counter
            const result = await sql`
        UPDATE visits 
        SET count = count + 1 
        WHERE id = 1 
        RETURNING count
      `;
            return res.status(200).json({ total: result[0].count });
        }

        // GET request
        const result = await sql`SELECT count FROM visits WHERE id = 1`;
        res.status(200).json({ total: result[0]?.count || 0 });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Failed to fetch visits' });
    }
}
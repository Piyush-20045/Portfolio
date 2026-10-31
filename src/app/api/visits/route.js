import { neon } from "@neondatabase/serverless";

async function visits(request) {
  if (!process.env.DATABASE_URL) {
    return Response.json({ error: "Visitor counter is not configured" }, { status: 503 });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    if (request.method === "POST") {
      const result = await sql`
        UPDATE visits SET count = count + 1 WHERE id = 1 RETURNING count
      `;
      return Response.json({ total: result[0]?.count ?? 0 });
    }
    const result = await sql`SELECT count FROM visits WHERE id = 1`;
    return Response.json({ total: result[0]?.count ?? 0 });
  } catch (error) {
    console.error("Database Error:", error);
    return Response.json({ error: "Failed to fetch visits" }, { status: 500 });
  }
}

export async function GET(request) {
  return visits(request);
}

export async function POST(request) {
  return visits(request);
}

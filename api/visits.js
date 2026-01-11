export default async function handler(req, res) {
    try {
        const response = await fetch(
            `${process.env.UMAMI_URL}/api/websites/${process.env.UMAMI_WEBSITE_ID}/pageviews?startAt=0`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.UMAMI_API_TOKEN}`,
                },
            }
        );

        const data = await response.json();

        res.status(200).json({ total: data.total });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch visits" });
    }
}

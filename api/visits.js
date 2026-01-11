export default async function handler(req, res) {
    try {
        const response = await fetch(
            `${process.env.UMAMI_URL}/api/websites/${process.env.UMAMI_WEBSITE_ID}/stats`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.UMAMI_API_TOKEN}`,
                },
            }
        );
        
        if (!response.ok) {
            return res.status(500).json({ error: "Umami request failed" });
        }

        const data = await response.json();

        res.status(200).json({
            total: data.pageviews, // all-time pageviews
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch visits" });
    }
}

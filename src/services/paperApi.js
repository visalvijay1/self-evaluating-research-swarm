const API_BASE_URL = "http://127.0.0.1:8000";

export async function searchPapers(
    query,
    limit = 5,
    rankingPreference = "best_match"
) {
    const response = await fetch(
        `${API_BASE_URL}/api/v1/papers/search`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                limit,
                ranking_preference: rankingPreference,
            }),
        }
    );

    if (!response.ok) {
        let errorMessage = "Unable to retrieve academic papers.";

        try {
            const errorData = await response.json();

            if (errorData.detail) {
                errorMessage = errorData.detail;
            }
        } catch {
            errorMessage = `Paper search failed with HTTP ${response.status}.`;
        }

        throw new Error(errorMessage);
    }

    return response.json();
}
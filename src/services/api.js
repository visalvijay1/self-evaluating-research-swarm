const API_BASE_URL = "http://127.0.0.1:8000";

export async function runResearch(query) {
    const response = await fetch(
        `${API_BASE_URL}/api/v1/swarm/research`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                query: query,
            }),
        }
    );

    let responseData;

    try {
        responseData = await response.json();
    } catch {
        responseData = null;
    }

    if (!response.ok) {
        const errorMessage =
            responseData?.detail ||
            "The research request failed.";

        throw new Error(errorMessage);
    }

    return responseData;
}

export async function checkBackendHealth() {
    const response = await fetch(
        `${API_BASE_URL}/health`
    );

    if (!response.ok) {
        throw new Error(
            "The FastAPI backend is unavailable."
        );
    }

    return response.json();
}
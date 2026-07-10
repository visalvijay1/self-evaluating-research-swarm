import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function PaperSearchBox({
    onSearch,
    loading,
}) {
    const [query, setQuery] = useState("");
    const [rankingPreference, setRankingPreference] =
        useState("best_match");

    function handleSubmit(event) {
        event.preventDefault();

        const cleanedQuery = query.trim();

        if (!cleanedQuery || loading) {
            return;
        }

        onSearch(
            cleanedQuery,
            rankingPreference
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="
                mt-10
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/60
                p-6
            "
        >
            <label
                htmlFor="paper-query"
                className="
                    block
                    text-sm
                    font-medium
                    text-slate-300
                "
            >
                Research topic
            </label>

            <div
                className="
                    mt-3
                    flex
                    flex-col
                    gap-4
                    lg:flex-row
                "
            >
                <input
                    id="paper-query"
                    name="paper-query"
                    type="text"
                    value={query}
                    onChange={(event) =>
                        setQuery(
                            event.target.value
                        )
                    }
                    placeholder="Example: Retrieval-Augmented Generation"
                    disabled={loading}
                    className="
                        min-w-0
                        flex-1
                        rounded-xl
                        border
                        border-slate-700
                        bg-slate-950
                        px-5
                        py-4
                        text-white
                        outline-none
                        transition
                        placeholder:text-slate-500
                        focus:border-cyan-400
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                />

                <select
                    id="ranking-preference"
                    name="ranking-preference"
                    value={rankingPreference}
                    onChange={(event) =>
                        setRankingPreference(
                            event.target.value
                        )
                    }
                    disabled={loading}
                    aria-label="Paper ranking preference"
                    className="
                        rounded-xl
                        border
                        border-slate-700
                        bg-slate-950
                        px-5
                        py-4
                        text-slate-200
                        outline-none
                        focus:border-cyan-400
                    "
                >
                    <option value="best_match">
                        Best Match
                    </option>

                    <option value="most_cited">
                        Most Cited
                    </option>

                    <option value="most_recent">
                        Most Recent
                    </option>

                    <option value="open_access">
                        Open Access
                    </option>
                </select>

                <button
                    type="submit"
                    disabled={
                        loading
                        || !query.trim()
                    }
                    className="
                        flex
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        bg-cyan-500
                        px-8
                        py-4
                        font-semibold
                        text-slate-950
                        transition
                        hover:bg-cyan-400
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    <FaSearch />

                    {loading
                        ? "Searching..."
                        : "Find Papers"}
                </button>
            </div>
        </form>
    );
}
import { useState } from "react";

import {
    FaArrowLeft,
    FaBook,
} from "react-icons/fa";

import PaperCard from "../components/PaperCard";
import PaperSearchBox from "../components/PaperSearchBox";

import {
    searchPapers,
} from "../services/paperApi";

export default function PaperDiscovery({
    onBack,
}) {
    const [loading, setLoading] =
        useState(false);

    const [result, setResult] =
        useState(null);

    const [error, setError] =
        useState("");

    async function handleSearch(
        query,
        rankingPreference
    ) {
        setLoading(true);
        setError("");
        setResult(null);

        try {
            const response = await searchPapers(
                query,
                5,
                rankingPreference
            );

            setResult(response);
        } catch (requestError) {
            setError(
                requestError.message
                || "Unable to search for papers."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <main
            className="
                min-h-screen
                bg-[#020617]
                text-white
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                    py-12
                    lg:px-8
                "
            >
                <button
                    type="button"
                    onClick={onBack}
                    className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-slate-400
                        transition
                        hover:text-cyan-400
                    "
                >
                    <FaArrowLeft />

                    Back to Research Dashboard
                </button>

                <section className="mt-12">
                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            text-cyan-400
                        "
                    >
                        <FaBook />

                        <span
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-widest
                            "
                        >
                            Academic Discovery
                        </span>
                    </div>

                    <h1
                        className="
                            mt-5
                            max-w-4xl
                            text-4xl
                            font-black
                            leading-tight
                            md:text-6xl
                        "
                    >
                        Find the Best
                        <span className="text-cyan-400">
                            {" "}Research Papers
                        </span>
                    </h1>

                    <p
                        className="
                            mt-5
                            max-w-3xl
                            text-lg
                            leading-8
                            text-slate-400
                        "
                    >
                        Search scholarly sources and
                        rank academic papers using topic
                        relevance, citation impact,
                        publication recency and
                        open-access availability.
                    </p>

                    <PaperSearchBox
                        loading={loading}
                        onSearch={handleSearch}
                    />
                </section>

                {loading && (
                    <section
                        className="
                            mt-10
                            rounded-2xl
                            border
                            border-cyan-500/20
                            bg-cyan-500/5
                            p-8
                            text-center
                        "
                    >
                        <div
                            className="
                                mx-auto
                                h-10
                                w-10
                                animate-spin
                                rounded-full
                                border-4
                                border-slate-700
                                border-t-cyan-400
                            "
                        />

                        <h2
                            className="
                                mt-5
                                text-lg
                                font-bold
                            "
                        >
                            Discovering academic papers
                        </h2>

                        <p
                            className="
                                mt-2
                                text-slate-400
                            "
                        >
                            Retrieving metadata and
                            calculating recommendation
                            scores.
                        </p>
                    </section>
                )}

                {error && (
                    <section
                        className="
                            mt-10
                            rounded-2xl
                            border
                            border-red-500/30
                            bg-red-500/10
                            p-6
                        "
                    >
                        <h2
                            className="
                                font-bold
                                text-red-300
                            "
                        >
                            Paper search failed
                        </h2>

                        <p
                            className="
                                mt-2
                                text-red-200
                            "
                        >
                            {error}
                        </p>
                    </section>
                )}

                {result && (
                    <section className="mt-14">
                        <div
                            className="
                                flex
                                flex-col
                                gap-3
                                md:flex-row
                                md:items-end
                                md:justify-between
                            "
                        >
                            <div>
                                <p
                                    className="
                                        text-sm
                                        font-bold
                                        uppercase
                                        tracking-widest
                                        text-cyan-400
                                    "
                                >
                                    Ranked Results
                                </p>

                                <h2
                                    className="
                                        mt-2
                                        text-3xl
                                        font-black
                                    "
                                >
                                    Recommended Papers
                                </h2>

                                <p
                                    className="
                                        mt-2
                                        text-slate-400
                                    "
                                >
                                    Results for:{" "}
                                    <span
                                        className="
                                            text-slate-200
                                        "
                                    >
                                        {result.query}
                                    </span>
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-slate-800
                                    bg-slate-900
                                    px-5
                                    py-3
                                    text-sm
                                    text-slate-300
                                "
                            >
                                {
                                    result.total_results
                                }{" "}
                                papers found
                            </div>
                        </div>

                        {result.papers.length > 0 ? (
                            <div
                                className="
                                    mt-8
                                    space-y-6
                                "
                            >
                                {result.papers.map(
                                    (
                                        paper,
                                        index
                                    ) => (
                                        <PaperCard
                                            key={
                                                paper.paper_id
                                            }
                                            paper={
                                                paper
                                            }
                                            rank={
                                                index + 1
                                            }
                                        />
                                    )
                                )}
                            </div>
                        ) : (
                            <div
                                className="
                                    mt-8
                                    rounded-2xl
                                    border
                                    border-slate-800
                                    bg-slate-900/60
                                    p-10
                                    text-center
                                "
                            >
                                <h3
                                    className="
                                        text-xl
                                        font-bold
                                    "
                                >
                                    No papers found
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-slate-400
                                    "
                                >
                                    Try a broader research
                                    topic or use different
                                    keywords.
                                </p>
                            </div>
                        )}
                    </section>
                )}
            </div>
        </main>
    );
}
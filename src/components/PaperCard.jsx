import { useState } from "react";

import {
    FaBookOpen,
    FaExternalLinkAlt,
    FaFilePdf,
    FaQuoteRight,
} from "react-icons/fa";

export default function PaperCard({
    paper,
    rank,
}) {
    const [showAbstract, setShowAbstract] =
        useState(false);

    const authors = (
        paper.authors || []
    )
        .map((author) => author.name)
        .filter(Boolean)
        .join(", ");

    const score = Number(
        paper.relevance_score || 0
    ).toFixed(2);

    return (
        <article
            className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/70
                p-6
                transition
                hover:border-cyan-500/50
            "
        >
            <div
                className="
                    flex
                    flex-col
                    gap-5
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                "
            >
                <div className="min-w-0">
                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-3
                        "
                    >
                        <span
                            className="
                                rounded-full
                                bg-cyan-500/10
                                px-3
                                py-1
                                text-xs
                                font-bold
                                text-cyan-400
                            "
                        >
                            RANK #{rank}
                        </span>

                        {rank === 1 && (
                            <span
                                className="
                                    rounded-full
                                    border
                                    border-emerald-500/30
                                    bg-emerald-500/10
                                    px-3
                                    py-1
                                    text-xs
                                    font-bold
                                    text-emerald-400
                                "
                            >
                                TOP RECOMMENDATION
                            </span>
                        )}
                    </div>

                    <h2
                        className="
                            mt-4
                            text-xl
                            font-bold
                            leading-snug
                            text-white
                        "
                    >
                        {paper.title}
                    </h2>

                    <p
                        className="
                            mt-3
                            text-sm
                            leading-6
                            text-slate-400
                        "
                    >
                        {authors
                            || "Author information unavailable"}
                    </p>
                </div>

                <div
                    className="
                        shrink-0
                        rounded-xl
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        px-5
                        py-4
                        text-center
                    "
                >
                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-wider
                            text-slate-400
                        "
                    >
                        Recommendation Score
                    </p>

                    <p
                        className="
                            mt-1
                            text-2xl
                            font-black
                            text-cyan-400
                        "
                    >
                        {score}
                    </p>
                </div>
            </div>

            <div
                className="
                    mt-6
                    grid
                    gap-3
                    sm:grid-cols-3
                "
            >
                <div
                    className="
                        rounded-xl
                        bg-slate-950/70
                        p-4
                    "
                >
                    <p className="text-xs text-slate-500">
                        Publication Year
                    </p>

                    <p className="mt-1 font-semibold">
                        {paper.year || "Unknown"}
                    </p>
                </div>

                <div
                    className="
                        rounded-xl
                        bg-slate-950/70
                        p-4
                    "
                >
                    <p className="text-xs text-slate-500">
                        Citation Count
                    </p>

                    <p className="mt-1 font-semibold">
                        {paper.citation_count ?? 0}
                    </p>
                </div>

                <div
                    className="
                        rounded-xl
                        bg-slate-950/70
                        p-4
                    "
                >
                    <p className="text-xs text-slate-500">
                        Publication Venue
                    </p>

                    <p className="mt-1 font-semibold">
                        {paper.publication_venue
                            || "Not available"}
                    </p>
                </div>
            </div>

            <div className="mt-6">
                <h3
                    className="
                        text-sm
                        font-semibold
                        text-white
                    "
                >
                    Why this paper was recommended
                </h3>

                <p
                    className="
                        mt-2
                        leading-7
                        text-slate-400
                    "
                >
                    {paper.recommendation_reason}
                </p>
            </div>

            {showAbstract && (
                <div
                    className="
                        mt-6
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-950/60
                        p-5
                    "
                >
                    <h3
                        className="
                            flex
                            items-center
                            gap-2
                            font-semibold
                            text-white
                        "
                    >
                        <FaBookOpen
                            className="text-cyan-400"
                        />

                        Abstract
                    </h3>

                    <p
                        className="
                            mt-3
                            whitespace-pre-line
                            leading-7
                            text-slate-400
                        "
                    >
                        {paper.abstract
                            || "No abstract is available for this paper."}
                    </p>
                </div>
            )}

            <div
                className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                "
            >
                <button
                    type="button"
                    onClick={() =>
                        setShowAbstract(
                            (current) => !current
                        )
                    }
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-slate-700
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-slate-200
                        transition
                        hover:border-cyan-400
                        hover:text-cyan-400
                    "
                >
                    <FaQuoteRight />

                    {showAbstract
                        ? "Hide Abstract"
                        : "Show Abstract"}
                </button>

                {paper.publication_url && (
                    <a
                        href={
                            paper.publication_url
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-slate-700
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-slate-200
                            transition
                            hover:border-cyan-400
                            hover:text-cyan-400
                        "
                    >
                        <FaExternalLinkAlt />

                        View Paper
                    </a>
                )}

                {paper.open_access_url && (
                    <a
                        href={
                            paper.open_access_url
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            bg-cyan-500
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-slate-950
                            transition
                            hover:bg-cyan-400
                        "
                    >
                        <FaFilePdf />

                        Open PDF
                    </a>
                )}
            </div>
        </article>
    );
}
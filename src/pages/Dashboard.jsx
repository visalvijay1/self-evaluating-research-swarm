import { useState } from "react";
import { motion } from "framer-motion";

import SearchBox from "../components/SearchBox";
import AgentPipeline from "../components/AgentPipeline";

import { runResearch } from "../services/api";


export default function Dashboard() {

    // --------------------------------------------------
    // Dashboard State
    // --------------------------------------------------

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const [error, setError] = useState("");


    // --------------------------------------------------
    // Execute Research Swarm
    // --------------------------------------------------

    async function startResearch(query) {

        setLoading(true);

        setError("");

        setResult(null);


        try {

            const response = await runResearch(query);

            console.log(
                "Research Swarm Response:",
                response
            );

            setResult(response);

        }

        catch (requestError) {

            console.error(
                "Research request failed:",
                requestError
            );

            setError(
                requestError.message ||
                "The research swarm could not complete the request."
            );

        }

        finally {

            setLoading(false);

        }

    }


    // --------------------------------------------------
    // Backend Response Mapping
    // --------------------------------------------------

    const report = result?.report ?? null;

    const auditHistory =
        result?.audit_history ?? [];


    const latestAudit =

        auditHistory.length > 0

            ? auditHistory[
                auditHistory.length - 1
            ]

            : null;


    const executionSeconds =

        result?.execution_time_ms

            ? (
                result.execution_time_ms / 1000
            ).toFixed(2)

            : "--";


    // --------------------------------------------------
    // Dashboard Interface
    // --------------------------------------------------

    return (

        <div

            className="
            relative
            min-h-screen
            overflow-hidden
            bg-[#020617]
            text-white
            "

        >


            {/* Background Lighting */}

            <div

                className="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
                "

            >

                <div

                    className="
                    absolute
                    left-20
                    top-20
                    h-96
                    w-96
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                    "

                />


                <div

                    className="
                    absolute
                    bottom-20
                    right-20
                    h-96
                    w-96
                    rounded-full
                    bg-blue-600/10
                    blur-3xl
                    "

                />

            </div>


            {/* Main Application */}

            <main

                className="
                relative
                mx-auto
                max-w-7xl
                px-6
                py-16
                md:px-8
                "

            >


                {/* Hero */}

                <motion.h1

                    initial={{

                        opacity: 0,

                        y: 35,

                    }}

                    animate={{

                        opacity: 1,

                        y: 0,

                    }}

                    className="
                    text-5xl
                    font-black
                    tracking-tight
                    md:text-6xl
                    "

                >

                    Self-Evaluating

                </motion.h1>


                <motion.h2

                    initial={{

                        opacity: 0,

                        y: 35,

                    }}

                    animate={{

                        opacity: 1,

                        y: 0,

                    }}

                    transition={{

                        delay: 0.15,

                    }}

                    className="
                    mt-2
                    text-5xl
                    font-black
                    tracking-tight
                    text-cyan-400
                    md:text-6xl
                    "

                >

                    Multi-Agent Research Swarm

                </motion.h2>


                <motion.p

                    initial={{

                        opacity: 0,

                    }}

                    animate={{

                        opacity: 1,

                    }}

                    transition={{

                        delay: 0.3,

                    }}

                    className="
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-relaxed
                    text-slate-400
                    md:text-xl
                    "

                >

                    Local AI orchestration platform that

                    coordinates research, validation and

                    decision stages to generate, evaluate

                    and iteratively refine structured

                    research reports.

                </motion.p>


                {/* Research Input */}

                <SearchBox

                    loading={loading}

                    onSubmit={startResearch}

                />


                {/* Loading State */}

                {

                    loading && (

                        <motion.div

                            initial={{

                                opacity: 0,

                                y: 10,

                            }}

                            animate={{

                                opacity: 1,

                                y: 0,

                            }}

                            className="
                            mt-6
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-cyan-500/20
                            bg-cyan-500/5
                            px-5
                            py-4
                            text-cyan-300
                            "

                        >


                            <div

                                className="
                                h-5
                                w-5
                                animate-spin
                                rounded-full
                                border-2
                                border-cyan-400
                                border-t-transparent
                                "

                            />


                            <div>

                                <p

                                    className="
                                    font-semibold
                                    "

                                >

                                    Research swarm is running

                                </p>


                                <p

                                    className="
                                    mt-1
                                    text-sm
                                    text-slate-400
                                    "

                                >

                                    The local model is generating,

                                    validating and refining the

                                    research report.

                                </p>

                            </div>

                        </motion.div>

                    )

                }


                {/* Error State */}

                {

                    error && (

                        <motion.div

                            initial={{

                                opacity: 0,

                            }}

                            animate={{

                                opacity: 1,

                            }}

                            className="
                            mt-6
                            rounded-xl
                            border
                            border-red-500/30
                            bg-red-500/10
                            px-5
                            py-4
                            "

                        >

                            <p

                                className="
                                font-semibold
                                text-red-300
                                "

                            >

                                Research execution failed

                            </p>


                            <p

                                className="
                                mt-1
                                text-sm
                                text-red-300/80
                                "

                            >

                                {error}

                            </p>

                        </motion.div>

                    )

                }


                {/* Agent Pipeline */}

                <AgentPipeline
                    loading={loading}
                    result={result}
                />


                {/* Generated Research */}

                {

                    result && report && (

                        <motion.section

                            initial={{

                                opacity: 0,

                                y: 30,

                            }}

                            animate={{

                                opacity: 1,

                                y: 0,

                            }}

                            transition={{

                                duration: 0.45,

                            }}

                            className="
                            mt-14
                            rounded-2xl
                            border
                            border-slate-800
                            bg-slate-900/70
                            p-7
                            shadow-2xl
                            backdrop-blur
                            "

                        >


                            {/* Result Header */}

                            <div

                                className="
                                flex
                                flex-wrap
                                items-start
                                justify-between
                                gap-5
                                "

                            >


                                <div

                                    className="
                                    max-w-4xl
                                    "

                                >

                                    <p

                                        className="
                                        text-sm
                                        font-semibold
                                        uppercase
                                        tracking-widest
                                        text-cyan-400
                                        "

                                    >

                                        Research completed

                                    </p>


                                    <h3

                                        className="
                                        mt-3
                                        text-3xl
                                        font-bold
                                        leading-tight
                                        "

                                    >

                                        {report.title}

                                    </h3>

                                </div>


                                <div

                                    className="
                                    rounded-full
                                    border
                                    border-green-500/30
                                    bg-green-500/10
                                    px-5
                                    py-2
                                    text-sm
                                    font-bold
                                    text-green-300
                                    "

                                >

                                    {result.status}

                                </div>

                            </div>


                            {/* Metrics */}

                            <div

                                className="
                                mt-8
                                grid
                                gap-4
                                md:grid-cols-3
                                "

                            >


                                <MetricCard

                                    label="Execution Time"

                                    value={`${executionSeconds}s`}

                                    valueColor="text-cyan-400"

                                />


                                <MetricCard

                                    label="Iterations"

                                    value={result.iterations}

                                    valueColor="text-yellow-400"

                                />


                                <MetricCard

                                    label="Quality Score"

                                    value={

                                        latestAudit?.score

                                        ?? "--"

                                    }

                                    valueColor="text-green-400"

                                />

                            </div>


                            {/* Key Findings */}

                            <ReportBlock

                                title="Key Findings"

                            >

                                <div

                                    className="
                                    space-y-4
                                    "

                                >

                                    {

                                        report

                                        .key_findings

                                        .map(

                                            (

                                                finding,

                                                index

                                            ) => (

                                                <div

                                                    key={index}

                                                    className="
                                                    flex
                                                    gap-4
                                                    rounded-xl
                                                    border
                                                    border-slate-800
                                                    bg-slate-950/50
                                                    p-5
                                                    "

                                                >

                                                    <div

                                                        className="
                                                        flex
                                                        h-8
                                                        w-8
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        bg-cyan-500/10
                                                        font-bold
                                                        text-cyan-400
                                                        "

                                                    >

                                                        {

                                                            index + 1

                                                        }

                                                    </div>


                                                    <p

                                                        className="
                                                        leading-7
                                                        text-slate-300
                                                        "

                                                    >

                                                        {

                                                            finding

                                                        }

                                                    </p>

                                                </div>

                                            )

                                        )

                                    }

                                </div>

                            </ReportBlock>


                            {/* Technical Analysis */}

                            <ReportBlock

                                title="Technical Analysis"

                            >

                                <p

                                    className="
                                    whitespace-pre-line
                                    leading-8
                                    text-slate-300
                                    "

                                >

                                    {

                                        report

                                        .technical_depth

                                    }

                                </p>

                            </ReportBlock>


                            {/* Limitations */}

                            <ReportBlock

                                title="Limitations"

                            >

                                <p

                                    className="
                                    leading-8
                                    text-slate-300
                                    "

                                >

                                    {

                                        report

                                        .limitations

                                    }

                                </p>

                            </ReportBlock>


                            {/* Future Work */}

                            <ReportBlock

                                title="Future Work"

                            >

                                <p

                                    className="
                                    leading-8
                                    text-slate-300
                                    "

                                >

                                    {

                                        report

                                        .future_work

                                    }

                                </p>

                            </ReportBlock>


                            {/* Audit History */}

                            <ReportBlock

                                title="Self-Evaluation History"

                            >

                                <div

                                    className="
                                    space-y-4
                                    "

                                >

                                    {

                                        auditHistory.map(

                                            (

                                                audit,

                                                index

                                            ) => (

                                                <div

                                                    key={index}

                                                    className="
                                                    rounded-xl
                                                    border
                                                    border-slate-800
                                                    bg-slate-950/50
                                                    p-5
                                                    "

                                                >


                                                    <div

                                                        className="
                                                        flex
                                                        flex-wrap
                                                        items-center
                                                        justify-between
                                                        gap-4
                                                        "

                                                    >


                                                        <h5

                                                            className="
                                                            font-semibold
                                                            "

                                                        >

                                                            Iteration {

                                                                audit

                                                                .iteration

                                                            }

                                                        </h5>


                                                        <div

                                                            className="
                                                            flex
                                                            items-center
                                                            gap-3
                                                            "

                                                        >


                                                            <span

                                                                className="
                                                                text-sm
                                                                text-slate-400
                                                                "

                                                            >

                                                                Score: {

                                                                    audit

                                                                    .score

                                                                }

                                                            </span>


                                                            <span

                                                                className={

                                                                    audit

                                                                    .approved

                                                                        ?

                                                                        `
                                                                        rounded-full
                                                                        bg-green-500/10
                                                                        px-3
                                                                        py-1
                                                                        text-xs
                                                                        font-semibold
                                                                        text-green-300
                                                                        `

                                                                        :

                                                                        `
                                                                        rounded-full
                                                                        bg-yellow-500/10
                                                                        px-3
                                                                        py-1
                                                                        text-xs
                                                                        font-semibold
                                                                        text-yellow-300
                                                                        `

                                                                }

                                                            >

                                                                {

                                                                    audit

                                                                    .approved

                                                                        ?

                                                                        "APPROVED"

                                                                        :

                                                                        "REVISION REQUIRED"

                                                                }

                                                            </span>

                                                        </div>

                                                    </div>


                                                    <p

                                                        className="
                                                        mt-4
                                                        leading-7
                                                        text-slate-400
                                                        "

                                                    >

                                                        {

                                                            audit

                                                            .feedback

                                                        }

                                                    </p>

                                                </div>

                                            )

                                        )

                                    }

                                </div>

                            </ReportBlock>


                        </motion.section>

                    )

                }


            </main>

        </div>

    );

}


// --------------------------------------------------
// Metric Component
// --------------------------------------------------

function MetricCard({

    label,

    value,

    valueColor,

}) {

    return (

        <div

            className="
            rounded-xl
            border
            border-slate-800
            bg-slate-950/60
            p-5
            "

        >

            <p

                className="
                text-sm
                text-slate-500
                "

            >

                {label}

            </p>


            <p

                className={

                    `
                    mt-2
                    text-3xl
                    font-bold
                    ${valueColor}
                    `

                }

            >

                {value}

            </p>

        </div>

    );

}


// --------------------------------------------------
// Report Section Component
// --------------------------------------------------

function ReportBlock({

    title,

    children,

}) {

    return (

        <section

            className="
            mt-10
            "

        >

            <h4

                className="
                mb-5
                text-xl
                font-bold
                "

            >

                {title}

            </h4>


            {children}

        </section>

    );

}
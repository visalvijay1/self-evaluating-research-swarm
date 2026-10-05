import {
    FaFlask,
    FaClipboardCheck,
    FaShieldAlt,
    FaBrain,
} from "react-icons/fa";

import AgentCard from "./AgentCard";

export default function AgentPipeline({ loading, result }) {
    const getStatus = (stage) => {
        if (loading) {
            if (stage === 1) {
                return "Running";
            }

            return "Waiting";
        }

        if (result) {
            if (stage === 4) {
                return "Approved";
            }

            return "Completed";
        }

        return "Waiting";
    };

    return (
        <section className="mt-20">
            <div>
                <h2 className="text-3xl font-bold">
                    Research Orchestration Pipeline
                </h2>

                <p className="mt-2 text-slate-400">
                    Every request moves through generation,
                    deterministic validation, AI evaluation
                    and iterative refinement.
                </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
                <AgentCard
                    icon={<FaFlask />}
                    title="Research Agent"
                    description="Generates a structured technical research report."
                    status={getStatus(1)}
                    color="text-cyan-400"
                    stageNumber="01"
                />

                <AgentCard
                    icon={<FaClipboardCheck />}
                    title="Schema Validator"
                    description="Validates report structure and quality constraints."
                    status={getStatus(2)}
                    color="text-yellow-400"
                    stageNumber="02"
                />

                <AgentCard
                    icon={<FaShieldAlt />}
                    title="Auditor Agent"
                    description="Evaluates quality and generates corrective feedback."
                    status={getStatus(3)}
                    color="text-green-400"
                    stageNumber="03"
                />

                <AgentCard
                    icon={<FaBrain />}
                    title="Decision Engine"
                    description="Approves the report or initiates another iteration."
                    status={getStatus(4)}
                    color="text-purple-400"
                    stageNumber="04"
                />
            </div>
        </section>
    );
}
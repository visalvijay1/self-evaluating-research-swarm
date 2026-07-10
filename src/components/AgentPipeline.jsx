import {
    FaFlask,
    FaClipboardCheck,
    FaShieldAlt,
    FaBrain,
} from "react-icons/fa";

import AgentCard from "./AgentCard";


export default function AgentPipeline() {

    return (

        <section className="mt-20">

            {/* Pipeline Heading */}

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


            {/* Pipeline Stages */}

            <div className="mt-8 grid gap-6 md:grid-cols-2">


                {/* Stage 1: Research Generation */}

                <AgentCard

                    icon={<FaFlask />}

                    title="Research Agent"

                    description="Generates a structured technical research report."

                    status="Waiting"

                    color="text-cyan-400"

                    stageNumber="01"

                />


                {/* Stage 2: Deterministic Validation */}

                <AgentCard

                    icon={<FaClipboardCheck />}

                    title="Schema Validator"

                    description="Validates report structure and quality constraints."

                    status="Waiting"

                    color="text-yellow-400"

                    stageNumber="02"

                />


                {/* Stage 3: AI Quality Evaluation */}

                <AgentCard

                    icon={<FaShieldAlt />}

                    title="Auditor Agent"

                    description="Evaluates quality and generates corrective feedback."

                    status="Waiting"

                    color="text-green-400"

                    stageNumber="03"

                />


                {/* Stage 4: Approval or Revision */}

                <AgentCard

                    icon={<FaBrain />}

                    title="Decision Engine"

                    description="Approves the report or initiates another iteration."

                    status="Waiting"

                    color="text-purple-400"

                    stageNumber="04"

                />


            </div>

        </section>

    );

}
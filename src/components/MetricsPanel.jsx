import MetricCard from "./MetricCard";

export default function MetricsPanel({

    executionTime = "--",

    score = "--",

    iterations = "--",

    model = "phi3"

}) {

    return (

        <div className="mt-20">

            <h2 className="text-3xl font-bold">

                Execution Metrics

            </h2>

            <p className="text-slate-400 mt-2">

                Live metrics captured from the AI orchestration pipeline.

            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-8">

                <MetricCard

                    title="Execution Time"

                    value={executionTime}

                    color="text-cyan-400"

                />

                <MetricCard

                    title="Quality Score"

                    value={score}

                    color="text-green-400"

                />

                <MetricCard

                    title="Iterations"

                    value={iterations}

                    color="text-yellow-400"

                />

                <MetricCard

                    title="Model"

                    value={model}

                    color="text-purple-400"

                />

            </div>

        </div>

    );

}
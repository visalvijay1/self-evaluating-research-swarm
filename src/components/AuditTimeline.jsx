import TimelineItem from "./TimelineItem";

export default function AuditTimeline() {

    return (

        <div className="mt-20 bg-slate-900/70 border border-slate-800 rounded-2xl p-8">

            <h2 className="text-3xl font-bold">

                Execution Timeline

            </h2>

            <p className="text-slate-400 mt-2">

                Internal workflow of the multi-agent system.

            </p>

            <div className="mt-10 space-y-2">

                <TimelineItem

                    title="Research Agent"

                    description="Waiting for user request."

                />

                <TimelineItem

                    title="Fact Checker"

                    description="Waiting."

                />

                <TimelineItem

                    title="Auditor"

                    description="Waiting."

                />

                <TimelineItem

                    title="Decision Engine"

                    description="Waiting."

                    active

                />

            </div>

        </div>

    );

}
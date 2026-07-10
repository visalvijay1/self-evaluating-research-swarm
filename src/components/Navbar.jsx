import { BrainCircuit } from "react-icons/lu";

export default function Navbar() {
    return (
        <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

                <div className="flex items-center gap-3">

                    <BrainCircuit
                        size={34}
                        className="text-cyan-400"
                    />

                    <div>

                        <h1 className="text-xl font-bold">
                            Research Swarm AI
                        </h1>

                        <p className="text-xs text-slate-400">
                            Local Multi-Agent Orchestration
                        </p>

                    </div>

                </div>

                <div className="text-sm text-slate-400">

                    React • FastAPI • Ollama

                </div>

            </div>

        </nav>
    );
}
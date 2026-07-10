import { useState } from "react";

import {
    FaBook,
    FaFlask,
} from "react-icons/fa";

import Dashboard from "./pages/Dashboard";
import PaperDiscovery from "./pages/PaperDiscovery";

export default function App() {
    const [activePage, setActivePage] =
        useState("research");

    return (
        <div className="min-h-screen bg-[#020617]">
            <header
                className="
                    sticky
                    top-0
                    z-50
                    border-b
                    border-slate-800
                    bg-[#020617]/95
                    backdrop-blur
                "
            >
                <div
                    className="
                        mx-auto
                        flex
                        max-w-7xl
                        flex-col
                        gap-4
                        px-6
                        py-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        lg:px-8
                    "
                >
                    <button
                        type="button"
                        onClick={() =>
                            setActivePage(
                                "research"
                            )
                        }
                        className="
                            text-left
                            font-black
                            text-white
                        "
                    >
                        Research
                        <span className="text-cyan-400">
                            Swarm
                        </span>
                    </button>

                    <nav
                        className="
                            flex
                            flex-wrap
                            gap-2
                        "
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setActivePage(
                                    "research"
                                )
                            }
                            className={`
                                flex
                                items-center
                                gap-2
                                rounded-lg
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                transition
                                ${
                                    activePage
                                    === "research"
                                        ? "bg-cyan-500 text-slate-950"
                                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                                }
                            `}
                        >
                            <FaFlask />

                            Generate Report
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setActivePage(
                                    "papers"
                                )
                            }
                            className={`
                                flex
                                items-center
                                gap-2
                                rounded-lg
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                transition
                                ${
                                    activePage
                                    === "papers"
                                        ? "bg-cyan-500 text-slate-950"
                                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                                }
                            `}
                        >
                            <FaBook />

                            Discover Papers
                        </button>
                    </nav>
                </div>
            </header>

            {activePage === "research" ? (
                <Dashboard />
            ) : (
                <PaperDiscovery
                    onBack={() =>
                        setActivePage(
                            "research"
                        )
                    }
                />
            )}
        </div>
    );
}
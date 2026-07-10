import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ onSubmit, loading }) {

    const [query, setQuery] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!query.trim()) return;

        onSubmit(query);
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="mt-16"
        >

            <label className="text-slate-400 text-sm">

                Research Topic

            </label>

            <div className="mt-3 flex gap-4">

                <input

                    value={query}

                    onChange={(e)=>setQuery(e.target.value)}

                    placeholder="Example: Multi-Agent AI Systems"

                    className="
                    flex-1
                    bg-slate-900
                    border
                    border-slate-700
                    rounded-xl
                    px-6
                    py-4
                    outline-none
                    text-lg
                    focus:border-cyan-400
                    transition
                    "

                />

                <button

                    disabled={loading}

                    className="
                    bg-cyan-500
                    hover:bg-cyan-400
                    rounded-xl
                    px-8
                    font-semibold
                    flex
                    items-center
                    gap-3
                    "

                >

                    <FaSearch/>

                    {loading ? "Running..." : "Research"}

                </button>

            </div>

        </form>

    );

}
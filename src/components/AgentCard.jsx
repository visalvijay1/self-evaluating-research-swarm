import { motion } from "framer-motion";

export default function AgentCard({
    icon,
    title,
    description,
    status,
    color,
    stageNumber,
}) {
    const statusStyles = {
        Waiting: {
            dot: "bg-slate-500",
            text: "text-slate-400",
        },
        Running: {
            dot: "bg-cyan-400 animate-pulse",
            text: "text-cyan-300",
        },
        Completed: {
            dot: "bg-green-400",
            text: "text-green-300",
        },
        Approved: {
            dot: "bg-green-400",
            text: "text-green-300",
        },
        Failed: {
            dot: "bg-red-400",
            text: "text-red-300",
        },
    };

    const currentStyle = statusStyles[status] ?? statusStyles.Waiting;

    return (
        <motion.article
            whileHover={{
                scale: 1.015,
                y: -3,
            }}
            transition={{
                duration: 0.2,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/70
            p-6
            shadow-lg
            backdrop-blur
            transition-colors
            hover:border-slate-700
            "
        >
            <div
                className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-500/0
                via-cyan-500/5
                to-transparent
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
                "
            />

            <div
                className="
                relative
                flex
                items-start
                justify-between
                gap-5
                "
            >
                <div
                    className="
                    flex
                    items-start
                    gap-5
                    "
                >
                    <div
                        className={`
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-slate-950/70
                        text-3xl
                        ${color}
                        `}
                    >
                        {icon}
                    </div>

                    <div>
                        <h3
                            className="
                            text-lg
                            font-semibold
                            text-white
                            "
                        >
                            {title}
                        </h3>

                        <p
                            className="
                            mt-1
                            text-sm
                            leading-6
                            text-slate-400
                            "
                        >
                            {description}
                        </p>

                        <div
                            className="
                            mt-4
                            flex
                            items-center
                            gap-2
                            "
                        >
                            <span
                                className={`
                                h-2
                                w-2
                                rounded-full
                                ${currentStyle.dot}
                                `}
                            />

                            <span
                                className={`
                                text-sm
                                font-medium
                                ${currentStyle.text}
                                `}
                            >
                                {status}
                            </span>
                        </div>
                    </div>
                </div>

                <span
                    className="
                    text-sm
                    font-bold
                    tracking-wider
                    text-slate-600
                    "
                >
                    {stageNumber}
                </span>
            </div>
        </motion.article>
    );
}
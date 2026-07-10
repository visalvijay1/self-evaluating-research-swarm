import { motion } from "framer-motion";


export default function AgentCard({

    icon,

    title,

    description,

    status,

    color,

    stageNumber,

}) {

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


            {/* Subtle Hover Glow */}

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


            {/* Card Content */}

            <div

                className="
                relative
                flex
                items-start
                justify-between
                gap-5
                "

            >


                {/* Icon and Information */}

                <div

                    className="
                    flex
                    items-start
                    gap-5
                    "

                >


                    {/* Agent Icon */}

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


                    {/* Agent Details */}

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


                        {/* Current Status */}

                        <div

                            className="
                            mt-4
                            flex
                            items-center
                            gap-2
                            "

                        >

                            <span

                                className="
                                h-2
                                w-2
                                rounded-full
                                bg-slate-500
                                "

                            />


                            <span

                                className="
                                text-sm
                                font-medium
                                text-slate-400
                                "

                            >

                                {status}

                            </span>

                        </div>

                    </div>

                </div>


                {/* Pipeline Stage Number */}

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
import { motion } from "framer-motion";

export default function MetricCard({

    title,
    value,
    color

}) {

    return (

        <motion.div

            whileHover={{
                y: -5,
                scale: 1.02
            }}

            className="
                bg-slate-900/70
                border
                border-slate-800
                rounded-2xl
                p-6
                shadow-lg
            "

        >

            <p className="text-slate-400 text-sm">

                {title}

            </p>

            <h2 className={`text-4xl font-bold mt-3 ${color}`}>

                {value}

            </h2>

        </motion.div>

    );

}
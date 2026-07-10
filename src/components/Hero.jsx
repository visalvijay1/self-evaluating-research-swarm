import { motion } from "framer-motion";

export default function Hero() {
    return (

        <motion.div

            initial={{
                opacity:0,
                y:40
            }}

            animate={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:0.8
            }}

            className="py-20"

        >

            <h1 className="text-6xl font-black">

                Self-Evaluating

            </h1>

            <h2 className="text-6xl font-black text-cyan-400 mt-2">

                Multi-Agent Research Swarm

            </h2>

            <p className="text-slate-400 mt-6 text-xl max-w-3xl">

                A local AI orchestration platform that coordinates
                multiple specialized agents to generate, validate,
                refine and approve structured technical research.

            </p>

        </motion.div>
    );
}
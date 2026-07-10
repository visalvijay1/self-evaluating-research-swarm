import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function ReportSection({ report }) {

    if (!report) {

        return (

            <div className="mt-20 bg-slate-900/70 border border-slate-800 rounded-2xl p-8">

                <h2 className="text-3xl font-bold">

                    Research Report

                </h2>

                <p className="text-slate-400 mt-4">

                    Submit a research topic to generate a structured AI report.

                </p>

            </div>

        );

    }

    return (

        <motion.div

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            className="mt-20 bg-slate-900/70 border border-slate-800 rounded-2xl p-8"

        >

            <h2 className="text-3xl font-bold">

                Research Report

            </h2>

            <div className="mt-8">

                <h3 className="text-cyan-400 text-2xl font-bold">

                    {report.title}

                </h3>

            </div>

            <div className="mt-10">

                <h4 className="text-xl font-semibold">

                    Key Findings

                </h4>

                <div className="mt-4 space-y-4">

                    {report.key_findings.map((finding, index) => (

                        <div

                            key={index}

                            className="flex gap-4"

                        >

                            <FaCheckCircle className="text-green-400 mt-1" />

                            <p className="text-slate-300">

                                {finding}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

            <div className="mt-10">

                <h4 className="text-xl font-semibold">

                    Technical Analysis

                </h4>

                <p className="mt-4 text-slate-300 leading-8 whitespace-pre-line">

                    {report.technical_depth}

                </p>

            </div>

            <div className="mt-10">

                <h4 className="text-xl font-semibold">

                    Limitations

                </h4>

                <p className="mt-4 text-slate-300 leading-8">

                    {report.limitations}

                </p>

            </div>

            <div className="mt-10">

                <h4 className="text-xl font-semibold">

                    Future Work

                </h4>

                <p className="mt-4 text-slate-300 leading-8">

                    {report.future_work}

                </p>

            </div>

        </motion.div>

    );

}
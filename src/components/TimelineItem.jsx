import { FaCheckCircle } from "react-icons/fa";

export default function TimelineItem({

    title,

    description,

    active = false,

}) {

    return (

        <div className="flex gap-5">

            <div className="flex flex-col items-center">

                <div
                    className={`
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    ${active
                        ? "bg-cyan-500"
                        : "bg-slate-700"}
                    `}
                >

                    <FaCheckCircle />

                </div>

                <div className="w-[2px] h-14 bg-slate-700"></div>

            </div>

            <div>

                <h3 className="font-semibold text-lg">

                    {title}

                </h3>

                <p className="text-slate-400 mt-1">

                    {description}

                </p>

            </div>

        </div>

    );

}
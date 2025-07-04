import { loading } from "../assets";

export default function Generating( {className} ) {
    return (
        <>
            <div
                className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className} text-base`}
            >
                <img src={loading} alt="Loading" className="w-5 h-5 mr-4" />
                Ai is generating
            </div>
        </>
    );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import ButtonGradient from "./utils/svg/ButtonGradient";

export default function App() {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Hero />
            </div>
            <ButtonGradient />
        </>
    );
}

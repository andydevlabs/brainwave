import Button from "./components/Button";
import Header from "./components/Header";
import ButtonGradient from "./utils/svg/ButtonGradient";

export default function App() {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
            </div>
            <ButtonGradient />
        </>
    );
}

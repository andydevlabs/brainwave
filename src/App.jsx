import Button from "./components/Button";
import ButtonGradient from "./utils/svg/ButtonGradient";

export default function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello World</h1>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Button isWhite={false}>Button</Button>
            </div>
            <ButtonGradient />
        </>
    );
}

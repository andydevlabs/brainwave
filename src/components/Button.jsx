import ButtonSVG from "../utils/svg/ButtonSvg";

export default function Button({
    className,
    href,
    isWhite,
    children,
    px,
}) {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
        px || "px-7"
    } ${isWhite ? "text-n-8" : "text-n-1"} ${className || ""}`;

    const spanClasses = "relative z-10";

    const renderButton = () => {
        return (
            <button className={classes}>
                <span className={spanClasses}>{children}</span>
                <ButtonSVG isWhite={isWhite} />
            </button>
        );
    };

    const renderLink = () => {
        return (
            <a href={href} className={classes}>
                <span className={spanClasses}>{children}</span>
                <ButtonSVG isWhite={isWhite} />
            </a>
        )
    }

    return href ? renderLink() : renderButton();
}

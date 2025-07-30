import loading from "../assets/images/logo-guimark.gif"
export function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={loading} alt="" loading="lazy" className="w-48 h-auto" />
        </div>
    );
}

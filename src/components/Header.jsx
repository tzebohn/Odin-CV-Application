import { BsStack } from "react-icons/bs";
export function Header () {
    return (
        <header className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 p-5">
            <BsStack className="text-blue-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"/>
            <h1 className="text-md sm:text-xl lg:text-2xl">CV Application</h1>
        </header>
    )
}

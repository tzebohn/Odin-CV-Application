import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
export function EducationCard ({ edu }) {
    // Tailwindcss styling
    let dropdownIcon = `flex-shrink-0 w-5 h-5 cursor-pointer`
    return (
        <>
            <div className="bg-gray-200 rounded-lg p-2 cursor-pointer hover:bg-gray-300" onClick={() => setShowDetails(prev => !prev)}>
                <div className="flex items-center justify-between w-full">
                    <span className="truncate">{edu.university}</span>
                    <IoMdArrowDropdown className={`${dropdownIcon}`}/> 
                </div>
            </div>
        </>
    )
}
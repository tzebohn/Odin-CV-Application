import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import { ExperienceForm } from "./ExperienceForm";
export function ExperienceCard ({ experience, onDelete, onSave }) {

    const [showDetails, setShowDetails] = useState(false) // Expands or collapses the education card when user clicks it

    let dropdownIcon = `flex-shrink-0 w-5 h-5 cursor-pointer`

    return (
        <>
            {showDetails ? (
                <div className="bg-gray-200 rounded-lg">
                    <div 
                        className="flex items-center justify-end rounded-lg cursor-pointer p-2" 
                        onClick={() => {
                            setShowDetails(prev => !prev)
                        }}
                    >
                        <IoMdArrowDropup className={`${dropdownIcon}`}/>
                    </div>

                    <div className="border-t border-gray-500"></div>
                    
                    <div>
                        <ExperienceForm
                            initialData={experience}
                            showDetails={showDetails}
                            onCancel={experienceToDelete => {
                                onDelete(experienceToDelete)
                                setShowDetails(false)
                            }}
                            onSubmit={updatedExperience => {
                                onSave(updatedExperience)
                                setShowDetails(false)
                            }}
                        />
                    </div>
                </div>   
            ) : (
                <div className="bg-gray-200 rounded-lg p-2 cursor-pointer hover:bg-gray-300" onClick={() => setShowDetails(prev => !prev)}>
                    <div className="flex items-center justify-between w-full">
                        <span className="truncate">{experience.company}</span>
                        <IoMdArrowDropdown className={`${dropdownIcon}`}/> 
                    </div>
                </div>
            )}
        </>
    )
}
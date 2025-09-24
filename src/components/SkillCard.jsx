import { useEffect, useState } from "react"
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export function SkillCard ({ skill, editingSkillSet, setEditingSkillset, updateSkill }) {

    // USESTATES
    const [newSkill, setNewSkill] = useState(skill.skill) // Default value is the current skill description
    const [showDetails, setShowDetails] = useState(false) // Expands the skill card

    // Tailwindcss styling
    let btnStyle = `bg-blue-500 text-white font-semibold text-base md:text-lg p-1 px-2 md:p-2 md:px-4 rounded-lg cursor-pointer hover:bg-blue-600`
    let dropdownIcon = `flex-shrink-0 w-5 h-5 cursor-pointer`

    // USEEFFECTS 
    // Sync newSkill with updated skill prop object
    useEffect(() => {
        if (showDetails) {
            setNewSkill(skill.skill)
        }
    }, [showDetails, skill.skill])

    function handleEdit (e) {
        e.preventDefault()

        if (!newSkill.trim() || newSkill.trim() === skill.skill) { // Do nothing if the newSkill is empty or the same
            setShowDetails(prev => !prev)
            return
        }

        // Update and close
        updateSkill(newSkill, skill.id)
        setShowDetails(prev => !prev)
    }

    return (
        <>  
            {showDetails ? (
                <form className="bg-gray-200 rounded-lg p-2" onSubmit={handleEdit}>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="newSkill">Edit Skill</label>
                            <IoMdArrowDropup className={`${dropdownIcon}`} onClick={() => setShowDetails(prev => !prev)}/>
                        </div>
                        <input 
                            type="text"
                            id="newSkill"
                            value={newSkill} 
                            onChange={(e) => setNewSkill(e.target.value)}
                            className="bg-white text-gray-800 p-1 px-3 text-sm md:py-2 md:text-base font-semibold rounded-md outline-none focus:border-blue-500 focus:border-2 border-2 border-white w-full"
                            required
                        />

                        <div className="flex items-center justify-evenly">
                            <button type="submit" className={`${btnStyle}`}>Save</button>
                            <button type="button" className={`${btnStyle} bg-red-500 hover:bg-red-600`}>Delete</button>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="bg-gray-200 rounded-lg p-2 cursor-pointer" onClick={() => setShowDetails(prev => !prev)}>
                    <div className="flex items-center justify-between w-full">
                        <span className="truncate">{skill.skill}</span>
                        <IoMdArrowDropdown className={`${dropdownIcon}`}/> 
                    </div>
                </div>
            )}
        </>
    )
}
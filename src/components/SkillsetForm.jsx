import { useState } from "react"

export function SkillsetForm ({ addSkill, setIsFormVisible }) {

    // USESTATES 
    const [skillDescription, setSkillDescription] = useState('') // Used to keep track of the skill user types

    //Tailwindcss styling
    const inputStyle = `bg-gray-100 text-black p-1 px-3 text-sm md:py-2 md:text-base font-semibold rounded-md outline-none focus:border-blue-500 focus:border-2 border-2 border-gray-100 w-full`
    const labelStyle= `break-words text-sm font-medium md:text-base lg:text-lg`
    let btnStyle = `bg-blue-500 text-white text-xs font-semibold p-1 px-2 rounded-lg cursor-pointer hover:bg-blue-600 sm:hidden`
    let confirmBtnStyle = `hidden sm:block bg-blue-500 text-white font-semibold text-base md:text-lg p-1 px-2 md:p-2 md:px-4 rounded-lg cursor-pointer hover:bg-blue-600`

    // User submits form
    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log("submitting form")
        if (skillDescription.trim()) {
            addSkill(skillDescription.trim())
            setSkillDescription('') // Clear input field
        } else {
            alert("Skill can't be empty")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center p-4 sm:block">
            <div className="flex flex-col gap-1">
                <label htmlFor="skillset" className={`${labelStyle}`}>Add Skill</label>
                <div className="flex items-center justify-center w-full gap-2 sm:block">
                    <input 
                        id="skillset" 
                        value={skillDescription}
                        onChange={(e) => setSkillDescription(e.target.value)}
                        required
                        type="text" 
                        placeholder="Add Skill" 
                        className={`${inputStyle}`} 
                    />
                    <button type="submit" className={`${btnStyle}`}>Confirm</button>
                    <button type="button" className={`${btnStyle} bg-red-500 hover:bg-red-600`} onClick={() => setIsFormVisible(false)}>Cancel</button>
                </div>
            </div>

            <div className="hidden sm:flex justify-center items-center gap-6 mt-6">
                <button type="submit" className={`${confirmBtnStyle}`}>Confirm</button>
                <button type="button" className={`${confirmBtnStyle} bg-red-500 hover:bg-red-600`} onClick={() => setIsFormVisible(false)}>Cancel</button>
            </div>

        </form>
    )
}
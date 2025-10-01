import { useEffect, useState } from "react"

export function ExperienceForm ({ initialData, onSubmit, showDetails, setShowExperienceForm, onCancel }) {
    // Company name
    //Position 
    //start date end date
    //Location
    //Description

    // USESTATES HOOKS

    /**
     * State to store experience form data.
     * If editing, use initialData as default values.
     * If adding new entry, use empty fields.
     */
    const [experienceEntry, setExperienceEntry] = useState( 
        initialData || {
            company: "",
            position: "",
            startYear: "",
            endYear: "",
            description: ""
        }
    )

    useEffect(() => {
        if (initialData) {
            setExperienceEntry(initialData)
        }
    }, [initialData])

    // Tailwindcss styles 
    const labelStyle= `break-words text-sm font-medium md:text-base lg:text-lg`
    const inputStyle = `bg-gray-100 text-black p-1 px-3 text-sm md:py-2 md:text-base font-semibold rounded-md outline-none focus:border-blue-500 focus:border-2 border-2 border-gray-100 w-full`
    const btnStyle = `bg-blue-500 text-white font-semibold text-base md:text-lg p-1 px-2 md:p-2 md:px-4 rounded-lg cursor-pointer hover:bg-blue-600`

    // Handles when user submits form
    function handleSubmit (e) {
        e.preventDefault()
        onSubmit(experienceEntry)
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3 md:gap-6">
            <div className="flex flex-col gap-1">
                <label htmlFor="company" className={`${labelStyle}`}>Company name</label>
                <input 
                    type="text" 
                    id="company"
                    value={experienceEntry.company}
                    onChange={(e) => {
                        setExperienceEntry(prev => ({
                            ...prev,
                            company: e.target.value
                        }))
                    }}
                    className={inputStyle}
                    placeholder="Enter your company"
                    required
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="position" className={`${labelStyle}`}>Position</label>
                <input 
                    type="text" 
                    id="position"
                    value={experienceEntry.position}
                    onChange={(e) => {
                        setExperienceEntry(prev => ({
                            ...prev,
                            position: e.target.value
                        }))
                    }}
                    className={inputStyle}
                    placeholder="Enter your position"
                    required
                />
            </div>
            <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col w-1/2">
                    <label htmlFor="startYear" className={`${labelStyle}`}>Start year</label>
                    <input 
                        type="number"
                        id="startYear"
                        value={experienceEntry.startYear}
                        onChange={(e) => setExperienceEntry(prev => ({
                            ...prev,
                            startYear: e.target.value
                        }))} 
                        min={1900}
                        className={`${inputStyle}`}
                        required
                    />
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="endYear" className={`${labelStyle}`}>End year</label>
                    <input 
                        type="number"
                        id="endYear" 
                        value={experienceEntry.endYear}
                        onChange={(e) => setExperienceEntry(prev => ({
                            ...prev,
                            endYear: e.target.value
                        }))} 
                        min={1900}
                        className={`${inputStyle}`}
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="description" className={`${labelStyle}`}>Description</label>
                <textarea
                    id="description"
                    value={experienceEntry.description}
                    onChange={(e) => setExperienceEntry(prev => ({
                        ...prev,
                        description: e.target.value
                    }))}
                    className={`${inputStyle}`}
                />
            </div>

            <button className={`${btnStyle}`}>Save</button>
            {showDetails ? (
                <button type="button" className={`${btnStyle} bg-red-500 hover:bg-red-600`} onClick={() => onCancel(experienceEntry)}>Delete</button>
            ) : (
                <button type="button" className={`${btnStyle} bg-red-500 hover:bg-red-600`} onClick={() => setShowExperienceForm(false)}>Cancel</button>
            )}
        </form>
    )
}
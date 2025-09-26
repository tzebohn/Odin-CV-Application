import { useState } from "react"
import { usaUniversityOptions } from "../utils/universityOptions"
import CreatableSelect from 'react-select/creatable';

console.log(usaUniversityOptions)
export function EducationForm ({ addEducation }) {

    // USESTATES
    const [educationEntry, setEducationEntry] = useState({
        university: "",
        degree: "",
        startYear: "", 
        endYear: ""
    })

    // CSS Styling
    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: '#f3f4f6', // Tailwind: bg-gray-100
            color: '#000000',           // Tailwind: text-black
            cursor: 'pointer',
            fontWeight: 600,
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: '200px',
            overflowY: 'auto',
            backgroundColor: '#f3f4f6',
            color: '#000000',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer', // 👈 this does it!
            backgroundColor: state.isFocused ? '#f3f4f6' : 'white', // optional: light gray on hover
            color: 'black',
        }),
    };
    const labelStyle= `break-words text-sm font-medium md:text-base lg:text-lg`
    const inputStyle = `bg-gray-100 text-black p-1 px-3 text-sm md:py-2 md:text-base font-semibold rounded-md outline-none focus:border-blue-500 focus:border-2 border-2 border-gray-100 w-full`
    let btnStyle = `bg-blue-500 text-white font-semibold text-base md:text-lg p-1 px-2 md:p-2 md:px-4 rounded-lg cursor-pointer hover:bg-blue-600`


    function handleSubmit (e) {
        e.preventDefault()

        //console.log(educationEntry)
        // TODO: VALIDATE THE EDUCATION DATA AND CALL FUNCTION IN TABPANEL TO ADD EDUCATION OBJECT TO USERDATA
        addEducation(educationEntry)
        setEducationEntry({ // Clear input fields
            university: "",
            degree: "",
            startYear: "", 
            endYear: ""
        })
    }

    return ( 
        <form action="" className="p-4 flex flex-col gap-3 md:gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="university" className={`${labelStyle}`}>University</label>
                <CreatableSelect
                    inputId="university" 
                    options={usaUniversityOptions}
                    value={
                        educationEntry.university
                            ? { label: educationEntry.university, value: educationEntry.university }
                            : null
                    }
                    onChange={(selectedOption) =>
                        setEducationEntry((prev) => ({
                            ...prev,
                            university: selectedOption ? selectedOption.value : "",
                        }))
                    }
                    placeholder="Select your university"
                    isClearable
                    styles={customStyles}
                    required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="degree" className={`${labelStyle}`}>Field of Study</label>
                <input 
                    type="text"
                    id="degree" 
                    value={educationEntry.degree}
                    onChange={(e) =>
                        setEducationEntry(prev => ({
                            ...prev,
                            degree: e.target.value,
                        }))
                    }
                    className={`${inputStyle}`}
                    placeholder="Enter your degree"
                    required
                />
            </div>

            <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col">
                    <label htmlFor="startYear" className={`${labelStyle}`}>Start year</label>
                    <input 
                        type="number"
                        id="startYear"
                        value={educationEntry.startYear}
                        onChange={(e) => setEducationEntry(prev => ({
                            ...prev,
                            startYear: e.target.value
                        }))} 
                        min={1900}
                        className={`${inputStyle}`}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="endYear" className={`${labelStyle}`}>End year</label>
                    <input 
                        type="number"
                        id="endYear" 
                        value={educationEntry.endYear}
                        onChange={(e) => setEducationEntry(prev => ({
                            ...prev,
                            endYear: e.target.value
                        }))} 
                        min={1900}
                        className={`${inputStyle}`}
                        required
                    />
                </div>
            </div>


            <button className={`${btnStyle}`}>Save</button>
        </form>
    )
}
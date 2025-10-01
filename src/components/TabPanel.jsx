import { IoMdPerson } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { useState } from "react";
import { PersonalForm } from "./PersonalForm";
import { SkillsetForm } from "./SkillsetForm";
import { SkillCard } from "./SkillCard";
import { EducationForm } from "./EducationForm";
import { EducationCard } from "./EducationCard";
import { ExperienceForm } from "./ExperienceForm";
import { ExperienceCard } from "./ExperienceCard";
export function TabPanel ({ userData, setUserData }) {

    //UseState hooks
    const [tab, setTab] = useState("personalTab") // Tab useState
    const [isFormVisible, setIsFormVisible] = useState(false) // Skillset Form visibility
    const [editingSkillSet, setEditingSkillset] = useState(false) // Used to determine if a user is currently editing a previous skillset
    const [showEducationForm, setShowEducationForm] = useState(false) // Education Form visibility
    const [editingEducation, setEditingEducation] = useState(false) // Check if the user is editing existing education form
    const [showExperienceForm, setShowExperienceForm] = useState(false) // Experience Form visibility

    //Tailwindcss styling
    let tabStyle = `flex justify-center items-center flex-1 sm:gap-2 cursor-pointer`
    let iconStyle = `text-sm sm:text-base md:text-xl lg:text-2xl`
    let spanStyle = `break-words text-xs sm:text-sm lg:text-xl`
    let addBtnStyle = `bg-blue-500 text-white font-semibold text-base md:text-lg p-1 px-2 md:p-2 md:px-4 rounded-lg cursor-pointer hover:bg-blue-600`

    // Function updates Tab useState
    const changeTab = (tabName) => {
        if (tab !== tabName) {
            //console.log(`Current tab: ${tab} Changing to: ${tabName}`)
            setTab(tabName)
            // Reset form visibility when changing tabs
            setIsFormVisible(false)
            setEditingSkillset(false)
            setShowEducationForm(false)
            setShowExperienceForm(false)
        }
    } 

    // Add new skill
    const addSkill = (newSkill) => {
        //console.log("Adding skill:", newSkill);
        setUserData(prev => {
            const copy = [...prev.skills] // Shallow copy of nested array in userData object
            copy.push({
                id: crypto.randomUUID(), // Create unique key for each skill
                skill: newSkill
            })

            return { 
                ...prev,
                skills: copy // Update with new array
            }
        })
        setIsFormVisible(false) // Hide form and editing
        setEditingSkillset(false)
    }

    // Modifies old with new skill
    function updateSkill (newSkill, id) {
        setUserData(prev => {
            const copy = [...prev.skills] 

            for (let i = 0; i < copy.length; i++) {
                if (copy[i].id === id) copy[i].skill = newSkill
            }

            //console.log(copy)
            return {
                ...prev,
                skills: copy
            }
        })
    }

    // Delete skill card, given unique id
    const deleteCard = (id) => {
        //console.log("Deleting:", id)
        setUserData(prev => {
            const copy = [...prev.skills]

            for (let i = 0; i < copy.length; i++) {
                if (copy[i].id === id) {
                    copy.splice(i, 1)
                    break // Found and removed element
                }
            }
            
            return {
                ...prev,
                skills: copy
            }
        })
    }

    /**
     * Adds an education object to the userData.education array
     * @param {Object} edu - The education entry to add
     * @param {string} edu.university - Name of university
     * @param {string} edu.degree - Degree earned
     * @param {string} edu.startYear - Start year
     * @param {string} edu.endYear - End year
     */
    function addEducation (edu) {
        const newEdu = {
            ...edu,
            id: crypto.randomUUID()
        }
        setUserData(prev => ({
            ...prev,
            education: [...prev.education, newEdu]
        }))
        setShowEducationForm(false)
    }

    /**
     * Updates an existing object in userData.education array
     * @param {Object} newEdu - The modified education entry to update
     * @param {string} newEdu.id - Unique ID of the education entry (generated with crypto.randomUUID())
     * @param {string} newEdu.university - Name of university
     * @param {string} newEdu.degree - Degree earned
     * @param {string} newEdu.startYear - Start year
     * @param {string} newEdu.endYear - End year
     */
    function updateEducationInfo (newEdu) {

        setUserData(prev => {
            const copy = [...prev.education]
            
            // Find the correct education object
            for (let i = 0; i < copy.length; i++) {
                if (copy[i].id === newEdu.id) {
                    copy[i] = newEdu
                    break
                }
            }

            return {
                ...prev,
                education : copy
            }
        })
    }

    /**
     * Deletes an existing object in userData.education array
     * @param {Object} eduToDelete - The object to delete
     * @param {string} newEdu.id - Unique ID of the education entry (generated with crypto.randomUUID())
     * @param {string} newEdu.university - Name of university
     * @param {string} newEdu.degree - Degree earned
     * @param {string} newEdu.startYear - Start year
     * @param {string} newEdu.endYear - End year
     */
    function deleteEducation (eduToDelete) {
        //console.log(eduToDelete)
        setUserData(prev => ({
            ...prev,
            education: prev.education.filter(edu => edu.id !== eduToDelete.id)
        }))
    }

    /**
     * 
     * @param {Object} experienceToAdd - The object to add
     * @param {string} experienceToAdd.id - Unique ID of the experience entry (generated with crypto.randomUUID())
     * @param {string} experienceToAdd.company - Name of company
     * @param {string} experienceToAdd.position - Position at the company
     * @param {string} experienceToAdd.startYear - Start year of working at the company
     * @param {string} experienceToAdd.endYear - End year of working at the company
     * @param {string} experienceToAdd.description - Brief description of your responsibilies at the company, etc.
     */
    function addExperience (experienceToAdd) {
        const newExperience = {
            ...experienceToAdd,
            id: crypto.randomUUID()
        }
        setUserData(prev => ({
            ...prev,
            experience: [...prev.experience, newExperience]
        }))
        setShowExperienceForm(false)
    }

    /**
     * 
     * @param {Object} experienceToDelete - The object to remove
     * @param {string} experienceToDelete.id - Unique ID of the experience entry (generated with crypto.randomUUID())
     * @param {string} experienceToDelete.company - Name of company
     * @param {string} experienceToDelete.position - Position at the company
     * @param {string} experienceToDelete.startYear - Start year of working at the company
     * @param {string} experienceToDelete.endYear - End year of working at the company
     * @param {string} experienceToDelete.description - Brief description of your responsibilies at the company, etc.
     */
    function deleteExperience (experienceToDelete) {
        setUserData(prev => ({
            ...prev,
            experience: prev.experience.filter(experience => experience.id !== experienceToDelete.id)
        }))
    }
    
    /**
     * 
     * @param {Object} experienceToUpdate - The new object to replace the old one.
     * @param {string} experienceToUpdate.id - Unique ID of the experience entry (generated with crypto.randomUUID())
     * @param {string} experienceToUpdate.company - Name of company
     * @param {string} experienceToUpdate.position - Position at the company
     * @param {string} experienceToUpdate.startYear - Start year of working at the company
     * @param {string} experienceToUpdate.endYear - End year of working at the company
     * @param {string} experienceToUpdate.description - Brief description of your responsibilies at the company, etc.
     */
    function updateExperience(experienceToUpdate) {
        setUserData(prev => ({
            ...prev,
            experience: prev.experience.map(experience => 
                experience.id === experienceToUpdate.id ? experienceToUpdate : experience
            )
        }))
    }

    return (
        <>
            <div className="flex min-w-0 w-full">
                <div className="w-full">
                    <div className={`${tabStyle}`} onClick={() => changeTab("personalTab")}>
                        <IoMdPerson className={`${iconStyle} text-blue-900`}/> 
                        <span className={`${spanStyle}`}>Personal</span>
                    </div>
                    {tab === "personalTab" && <div className="border border-blue-500"></div>}
                </div>
                <div className="w-full">
                    <div className={`${tabStyle}`} onClick={() => changeTab("skillsetTab")}>
                        <FaStar className={`${iconStyle} text-amber-500`}/> 
                        <span className={`${spanStyle}`}>SkillSet</span>
                    </div>
                    {tab === "skillsetTab" && <div className="border border-blue-500"></div>}
                </div>
                <div className="w-full">
                    <div className={`${tabStyle}`} onClick={() => changeTab("educationTab")}>
                        <FaGraduationCap className={`${iconStyle} text-blue-900`}/> 
                        <span className={`${spanStyle}`}>Education</span>
                    </div>
                    {tab === "educationTab" && <div className="border border-blue-500"></div>}
                </div>
                <div className="w-full">
                    <div className={`${tabStyle}`} onClick={() => changeTab("experienceTab")}>
                        <BiSolidBriefcaseAlt2 className={`${iconStyle} text-[#A0522D]`}/> 
                        <span className={`${spanStyle}`}>Experience</span>
                    </div>
                    {tab === "experienceTab" && <div className="border border-blue-500"></div>}
                </div>
            </div>

            <div className="border-t border-gray-500"></div>

            { /* Tab Form Content */ }
            {tab === "personalTab" && <PersonalForm userData={userData} setUserData={setUserData} />}
            {tab === "skillsetTab" &&
                <>  
                    {/* Display each skill card */}
                    <h1>Skills</h1>
                    <div className="flex flex-col gap-4 mt-2 mx-6">
                        {userData.skills.map(skill => (
                            <SkillCard key={skill.id} skill={skill} setEditingSkillset={setEditingSkillset} editingSkillSet={editingSkillSet} updateSkill={updateSkill} deleteCard={deleteCard}/>
                        ))}
                    </div>

                    {/* Add skillset button should only be visible if the form is not open */}
                    {!isFormVisible && !editingSkillSet && (
                        <div className="flex items-center justify-center my-4">
                            <button onClick={() => setIsFormVisible(true)} className={`${addBtnStyle}`}>Add Skill</button>
                        </div>
                    )}

                    {/* SkillSetForm is shown when the user is adding or editing a skill */}
                    {isFormVisible && 
                        <SkillsetForm 
                            addSkill={addSkill}
                            setIsFormVisible={setIsFormVisible}
                        />
                    }
                </>
            }
            {tab === "educationTab" && 
                <>  
                    { /* Display each education card */}
                    <h1>Universities</h1>
                    <div className="flex flex-col gap-4 mt-2 mx-6">
                        {userData.education.map(edu => (
                            <EducationCard 
                            key={edu.id} 
                            edu={edu} 
                            onSave={(newEdu) => updateEducationInfo(newEdu)} 
                            onDelete={(eduToDelete) => deleteEducation(eduToDelete)}
                            />
                        ))}
                    </div>

                    {/* Add education button should only be visible if the form is not open */}
                    {!showEducationForm && (
                        <div className="flex items-center justify-center my-4">
                            <button onClick={() => setShowEducationForm(true)} className={`${addBtnStyle}`}>Add Education</button>
                        </div>
                    )}

                    {/* EducationForm is shown when the user is adding or editing a skill */}
                    {showEducationForm && 
                        <EducationForm 
                            onSubmit={newEdu => addEducation(newEdu)}
                            setShowEducationForm={setShowEducationForm}
                        />
                    }
                </>
            }
            {tab === "experienceTab" &&
                <>
                    { /* Display each experience card */}
                    <div className="flex flex-col gap-4 mt-2 mx-6">
                        {userData.experience.map(experience => (
                            <ExperienceCard 
                                key={experience.id}
                                experience={experience}
                                onDelete={experienceToDelete => deleteExperience(experienceToDelete)}
                                onSave={experienceToUpdate => updateExperience(experienceToUpdate)}
                            />
                        ))}
                    </div>

                    {/* Add experience button should only be visible if the form is not open */}
                    {!showExperienceForm && (
                        <div className="flex items-center justify-center my-4">
                            <button onClick={() => setShowExperienceForm(true)} className={`${addBtnStyle}`}>Add Experience</button>
                        </div>
                    )}

                    {/* ExperienceForm is shown when the user is adding or editing a skill */}
                    {showExperienceForm && 
                        <ExperienceForm 
                            onSubmit={experienceToAdd => addExperience(experienceToAdd)}
                            setShowExperienceForm={setShowExperienceForm}
                        />
                    }
                </>
            }
        </>
    )
}
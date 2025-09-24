import { IoMdPerson } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { useState } from "react";
import { PersonalForm } from "./PersonalForm";
import { SkillsetForm } from "./SkillsetForm";
import { SkillCard } from "./SkillCard";
export function TabPanel ({ userData, setUserData }) {

    //UseState hooks
    const [tab, setTab] = useState("personalTab") // Tab useState
    const [isFormVisible, setIsFormVisible] = useState(false) // Skillset Form visibility
    const [editingSkillSet, setEditingSkillset] = useState(false) // Used to determine if a user is currently editing a previous skillset

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
            setIsFormVisible(false) // Reset and hide when changing tabs
            setEditingSkillset(false) // Reset and hide when changing tabs
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
                            <SkillCard key={skill.id} skill={skill} setEditingSkillset={setEditingSkillset} editingSkillSet={editingSkillSet} updateSkill={updateSkill}/>
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
        </>
    )
}
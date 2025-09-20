import { IoMdPerson } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { useState } from "react";
import { PersonalForm } from "./PersonalForm";
export function TabPanel ({ userData, setUserData }) {

    //UseState hooks
    const [tab, setTab] = useState("personalTab") // Tab useState

    //Tailwindcss styling
    let tabStyle = `flex justify-center items-center flex-1 sm:gap-2 cursor-pointer`
    let iconStyle = `text-sm sm:text-base md:text-xl lg:text-2xl`
    let spanStyle = `break-words text-xs sm:text-sm md:text-base lg:text-xl`

    //Function updates Tab useState
    const changeTab = (tabName) => {
        if (tab !== tabName) {
            //console.log(`Current tab: ${tab} Changing to: ${tabName}`)
            setTab(tabName)
        }
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
        </>
    )
}
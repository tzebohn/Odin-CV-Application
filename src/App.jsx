import { useState } from "react";
import { Header } from "./components/Header";
import { TabPanel } from "./components/TabPanel";
import { FaPhoneAlt, FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function App () {

  //USESTATES HOOKS
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    skills: [],
    education: [],
    experience: []
  });

  // Tailwindcss styles
  let iconStyle = `text-sm md:text-base text-gray-700`
  let headerStyle = `font-bold md:text-xl`

  return (
    <div className="app w-full overflow-x-hidden">
      <Header />

      <main className="flex flex-col md:flex-row md:align-center bg-gray-100 p-5 min-h-screen min-w-0 md:justify-between gap-6">
        <section className="w-full min-w-0 border rounded-md bg-white">
          <TabPanel userData={userData} setUserData={setUserData} />
        </section>
        <section className="w-full border rounded-md bg-white">
          <div className="grid grid-col-1 md:grid-cols[1fr_2fr] grid-rows[auto_1fr] p-6">
            {/* Header - Full Width Row */}
            <header className="md:col-span-2 flex flex-col items-center justify-content border-b border-t border-gray-400 p-2">
              <h1 className="text-2xl md:text-3xl">{userData.name}</h1>
            </header>

            {/* Main Section */}
            <aside className="md:border-r md:border-gray-400">
              <section className="border-b border-gray-400 p-2">
                <h1 className={headerStyle}>PERSONAL</h1>
                <div className="flex flex-col gap-2 py-2">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className={iconStyle}/>
                    <p>{userData.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdEmail className={iconStyle}/>
                    <p>{userData.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBirthdayCake className={iconStyle}/>
                    <p>{userData.birthday}</p>
                  </div>
                </div>
              </section>
              <section className="border-b border-gray-400 p-2">
                <h1 className={headerStyle}>EDUCATION</h1>
                <div className="flex flex-col gap-4 py-2">
                  {userData.education.map(edu => (
                    <div key={edu.id}>
                    <p className="text-sm md:text-base font-medium">{`${edu.startYear} - ${edu.endYear}`}</p>
                    <h2 className="font-bold">{edu.university}</h2>
                    <li className="text-gray-700">{edu.degree}</li>
                    </div>
                  ))}
                </div>
              </section>
              <section className="border-b border-gray-400 md:border-none p-2">
                <h1 className={headerStyle}>SKILLS</h1>
                <ul className="list-disc list-inside">
                  {userData.skills.map(skill => (
                    <li key={skill.id} className="text-gray-700">{skill.skill}</li>
                  ))}
                </ul>
              </section>
            </aside>

            <main className="p-2">
              <section>
                <h1 className={headerStyle}>WORK EXPERIENCE</h1>
                
                <div className="flex flex-col gap-4 py-2">
                  {userData.experience.map(experience => (
                    <div key={experience.id}>
                      <div className="flex items-center justify-between">
                        <h2 className="font-semibold md:text-xl">{experience.company}</h2>
                        <span className="text-sm md:text-base font-medium">{experience.startYear === experience.endYear ? 
                        `${experience.startYear} - PRESENT` : 
                        `${experience.startYear - experience.endYear}`}</span>
                      </div>
                      <p className="font-medium">{experience.position}</p>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">{experience.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </main>

            <div className="md:col-span-2 border-t border-gray-400"></div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;
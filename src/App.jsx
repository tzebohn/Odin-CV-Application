import { useState } from "react";
import { Header } from "./components/Header";
import { TabPanel } from "./components/TabPanel";
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

  return (
    <div className="app w-full overflow-x-hidden">
      <Header />

      <main className="flex flex-col md:flex-row md:align-center min-h-screen bg-gray-100 p-5 min-w-0 md:justify-between gap-6">
        <section className="w-full min-w-0 border rounded-md bg-white max-h-screen">
          <TabPanel userData={userData} setUserData={setUserData} />
        </section>
        <section className="w-full border rounded-md bg-white">
          {JSON.stringify(userData)}
        </section>
      </main>
    </div>
  )
}

export default App;
import { Header } from "./components/Header";
import { TabPanel } from "./components/TabPanel";
function App () {
  return (
    <div className="app">
      <Header />

      <main className="flex flex-col md:flex-row md:align-center h-full bg-gray-100 p-5">
        <section className="w-full border rounded-md bg-white">
          <TabPanel />
          <div className=""></div>
        </section>
        <section className="w-full border bg-white">
          preview template
        </section>
      </main>
    </div>
  )
}

export default App;
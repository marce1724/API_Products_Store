import FormStore from "./components/FormStore"

function App() {

  return (
    <>
      <div className=" flex-initial w-full h-28 bg-purple-900 shadow-lg">
        <h2 className="text-center p-4 text-white font-bold text-2xl " > Store API - Products</h2>
        <p className="text-center text-white">React + JavaScript + Redux Toolkit + TailwindCSS </p>
      </div>

      <FormStore/> 

  </>
  )
}

export default App

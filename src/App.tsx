import { useState } from "react"
import "./App.css"
import { Home } from "./components/pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Simple from "./components/pages/simple"

const App = () => {
  const [test, setTest] = useState<string>("")
  fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(json => {
      setTest(json)
      console.log(json)
    })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple" element={<Simple />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

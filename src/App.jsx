import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Error404 from "./pages/Error404"
import { HorosProvider } from "./components/datas"

function App() {

  return(
    <Router>
      <HorosProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HorosProvider>
    </Router>
  )
}

export default App

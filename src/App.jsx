import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from "./routes/routes"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

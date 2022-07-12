import logo from "./logo.svg"
import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import DeleteMe from "./layouts/NewsAndNotices"
import SideNavBar from "./components/NavBar/SideNavBar"
import HeadNavBar from "./components/NavBar/HeadNavBar"
import Assets from "./assets/index"
import BaseLayout from "./layouts/BaseLayout"

function App() {
  const [active, setActive] = useState(0)

  return (
    <div className="App  flex">
      <SideNavBar setActive={setActive} />
      <BaseLayout setActive={setActive} active={active} />
    </div>
  )
}

export default App

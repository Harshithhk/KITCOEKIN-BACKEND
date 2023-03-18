import React, { useEffect } from "react"
import { useState } from "react"
import SideNavBar from "../../components/NavBar/SideNavBar"
import BaseLayout from "../BaseLayout"
import DesktopError from "../../components/DesktopError"
import axios from "axios"
import { Redirect } from "react-router-dom"

function PageLayout(props) {
  const [active, setActive] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const callSomeAPI = async () => {
    try {
      const res = await axios.get(
        "http://ec2-13-235-33-19.ap-south-1.compute.amazonaws.com:8080/users/profile",
        {
          headers: { authorization: localStorage.getItem("authorization") },
        }
      )
      console.log(res)
      setIsLoggedIn(true)
    } catch (e) {
      window.location.href = "/"
      setIsLoggedIn(false)
    }
  }
  useEffect(() => {
    callSomeAPI()
  }, [])

  return (
    <>
      <div className="flex md:hidden">
        <SideNavBar setActive={setActive} />
        {isLoggedIn ? (
          <BaseLayout setActive={setActive} active={active} />
        ) : (
          "LOADING...."
        )}
      </div>
      <DesktopError />
    </>
  )
}

export default PageLayout

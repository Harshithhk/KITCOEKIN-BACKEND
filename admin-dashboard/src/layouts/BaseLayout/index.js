import React, { useState, useEffect } from "react"
import Footer from "../../components/Footer"
import HeadNavBar from "../../components/NavBar/HeadNavBar"
import BodyLayout from "../BodyLayout"

const BaseLayout = ({ active, setActive }) => {
  return (
    <div
      id="header"
      className="h-screen flex-1 pl-3 bg-[#f8f9fa]  overflow-y-auto"
    >
      <div className="h-screen flex-1 p-4 bg-[#f8f9fa]  ">
        <HeadNavBar active={active} />
        <BodyLayout active={active} />
        <Footer />
      </div>
    </div>
  )
}

export default BaseLayout

import { useEffect, useState } from "react"
import NewsAndNotices from "../NewsAndNotices"
import Notices from "../Notices"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const BodyLayout = ({ active }) => {
  useEffect(() => {
    console.log(active)
    return () => {}
  }, [active])

  return (
    <div className="z-0 flex-1 m-2 mt-8 bg-white h-fit rounded-xl drop-shadow-lg ">
      {active === "News & Notices" && <NewsAndNotices />}
      {active === "Events" && <Notices />}
      {/* <Events />
            <ImageGallery /> */}
    </div>
  )
}

export default BodyLayout

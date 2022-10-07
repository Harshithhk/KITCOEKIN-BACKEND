import React, { useState, useEffect } from "react"
import Assets from "../../../assets/index"

const HeadNavBar = ({ active }) => {
  const [header, setHeader] = useState(1)

  useEffect(() => {
    const elementSelected = document.getElementById("header")
    elementSelected.addEventListener("scroll", () => {
      const offSet = elementSelected.childNodes[0].childNodes[0].offsetTop
      if (offSet < 73) {
        return setHeader(1)
      } else {
        return setHeader(0)
      }
    })
  }, [])

  return (
    <div
      className={
        header
          ? "h-20 flex-1 m-2 sticky top-4 z-50 p-7 rounded-xl bg-[#f8f9fa] "
          : "h-20 flex-1 m-2 sticky top-4 z-50 p-7 rounded-xl bg-white drop-shadow-lg"
      }
    >
      <div className="relative flex flex-col -mt-3 -ml-2 ">
        {Assets.Home("HomeIconGrey")}
        <div className="text-[#707597] ml-5 -mt-5 pl-2 text-left">
          /&nbsp;&nbsp; Dashboard
        </div>
        <div className="text-left mt-2 font-bold text-[#344767]">{active}</div>
        <div className="absolute right-2 top-2 bottom-2 flex justify-center">
          <button
                // className="bg-black absolute bottom-4 right-4 left-4"
                type="button" class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                onClick={() => {
                  localStorage.removeItem("authorization")
                  window.location.href = "/"
                }}
              >
                {" "}
                LOGOUT
          </button>
       </div>
      </div>
    </div>
  )
}

export default HeadNavBar

import { useState } from "react"
import Assets from "../../../assets/index"

const Menus = [
  // { title: "", src: Assets.Settings, noNav: true },
  // { title: "SignIn", src: Assets.Settings, noNav: true },

  { title: "Dashboard", src: Assets.Dashboard },
  { title: "News & Notices", src: Assets.NewsAndNotices },
  { title: "Image Gallery", src: Assets.ImageGallery },
  { title: "Events", src: Assets.Events },
  { title: "TimeTable", src: Assets.Documents },
  { title: "Teching Staff", src: Assets.Documents },
  {title: "Alumni", src: Assets.Documents},
  { title: "Profile", src: Assets.Settings, gap: true },
  { title: "Settings", src: Assets.Settings },
  
]

const SideNavBar = ({ setActive }) => {
  const getIndex = () => {
    let index = Menus.findIndex(
      (menu) =>
        menu.title.toLowerCase().replace(/\s+/g, "") ===
        window.location.pathname
          .toLowerCase()
          .replace(/\s+/g, "")
          .replace("/", "")
    )
    console.log(index)
    setActive(Menus[index].title)
    return index
  }

  const [open, setOpen] = useState(true)
  const [activeIndex, setActiveIndex] = useState(() => getIndex())

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-24 "
        } bg-[#f8f9fa] h-screen p-5  pt-8 relative duration-300`}
      >
        <span
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#344767]
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          {Assets.LeftArrowHead}
        </span>

        <div className="flex items-center gap-x-4">
          <img
            src={Assets.hashinclude}
            className={`cursor-pointer h-12 w-12  rounded-lg  duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-[#344767] origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Hashinclude
          </h1>
        </div>
        <br />
        <div className="flex">
          <hr className="border-0 h-[1.5px] w-[52%] bg-gradient-to-r from-slate-300  rotate-180  " />
          <hr className="border-0 h-[1.5px] w-[50%] bg-gradient-to-r from-slate-300  " />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <a href={Menu.title.toLowerCase().replace(/\s+/g, "")}>
              <li
                onClick={() => {
                  setActive(Menu.title)
                  setActiveIndex(index)
                }}
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#ffffff]   text-base  font-sans font-semibold  items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"} 
                  ${
                    index === activeIndex
                      ? "bg-[#ffffff] text-[#344767]  drop-shadow-lg  "
                      : " text-[#707597]"
                  } 

                  ${Menu.noNav ? "hidden" : null}
                
                
                `}
              >
                <div
                  className={`${
                    index === activeIndex
                      ? "border-2  p-2 shadow-2xl  rounded-[9px] bg-[#17c1e8]"
                      : "p-2 drop-shadow-xl  rounded-md bg-[#ffffff]"
                  } `}
                >
                  {index === activeIndex
                    ? Menus[index].src("white")
                    : Menus[index].src("iconColor")}
                </div>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </a>
          ))}
         
        </ul>
      
      </div>
    </div>
  )
}
export default SideNavBar

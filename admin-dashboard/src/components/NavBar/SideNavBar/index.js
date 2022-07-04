import { useState } from "react";
import Assets from "../../../assets/index"

const SideNavBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Assets.Dashboard },
    { title: "News & Notices", src: Assets.NewsAndNotices },
    { title: "Image Gallery", src: Assets.ImageGallery},
    { title: "Events ", src: Assets.Events },
    { title: "Documents", src: Assets.Documents },
    { title: "Settings", src: Assets.Settings, gap: true }
  ];

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-24 "
        } bg-[#f8f9fa] h-screen p-5  pt-8 relative duration-300`}
       >
        <span className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#344767]
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}>{Assets.LeftArrowHead}</span>
        
      
        <div className="flex gap-x-4 items-center">
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
        <br/>
        <div className="flex">
        <hr className="border-0 h-[1.5px] w-[52%] bg-gradient-to-r from-slate-300  rotate-180  " />
        <hr className="border-0 h-[1.5px] w-[50%] bg-gradient-to-r from-slate-300  " />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#ffffff]   text-base  font-sans font-semibold  items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 ? "bg-[#ffffff] text-[#344767]  drop-shadow-lg  ":" text-[#707597]"
              } `}
            >
              <div className={`${index === 0 ? "border-2  p-2 shadow-2xl  rounded-[9px] bg-[#17c1e8]": "p-2 drop-shadow-xl  rounded-md bg-[#ffffff]"} `}>
                { index === 0 ? Menus[index].src("white") : Menus[index].src("iconColor") }
              </div>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};
export default SideNavBar;

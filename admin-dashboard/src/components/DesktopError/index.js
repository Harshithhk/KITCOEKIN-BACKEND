import React from 'react';
import Assets from '../../assets';

function DesktopError(props) {
    return (
        <div className="2xl:hidden xl:hidden  lg:hidden md:block sm:block h-screen flex text-center justify-center p-4 bg-[#f8f9fa] ">
            <div className="flex flex-row justify-center">
              <img src={Assets.DesktopError} alt="" />
            </div>
            <h2 className=" text-center">!Mobile Accessibility Is Restricted For Security And Functionality Purpose. </h2>
            <div className="flex flex-row items-center justify-center mt-12">
              <img src={Assets.hashinclude}  className="w-[80px] " alt="" />
              <h1 className="text-4xl">Hashinclude</h1>
            </div>
            www.hashinclude.co.in
          </div>
    );
}

export default DesktopError;
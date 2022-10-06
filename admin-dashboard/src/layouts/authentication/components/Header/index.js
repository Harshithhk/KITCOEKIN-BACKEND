import React from 'react';
import Assets from "../../../../assets/index"


function Header(props) {
    return (
        <div
      className="h-16 grid grid-cols-3 justify-center  items-center m-2 absolute w-3/4 top-4 z-50   rounded-xl bg-white backdrop-blur-xl bg-white/70  drop-shadow-2xl"
  
    >
      
       
            <div className='w-[11%] flex ml-20 flex-row justify-center items-center hover:cursor-pointer'>
                <img src={Assets.hashinclude} alt='' />
                <div className='font-bold text-xl ml-1 '>Hashinclude</div>
            </div>
            <div className='grid grid-cols-3'>
                <div>
                    {Assets.Home("HomeIconGrey")}
                    <div className="text-[#707597]  ml-3 -mt-5 pl-2 text-left">
                        Dashboard
                    </div>
                </div>
                <div>
                    {Assets.Home("HomeIconGrey")}
                    <div className="text-[#707597] ml-3 -mt-5 pl-2 text-left">
                        Dashboard
                    </div>
                </div>
                <div>
                    {Assets.Home("HomeIconGrey")}
                    <div className="text-[#707597] ml-3 -mt-5 pl-2 text-left">
                        Dashboard
                    </div>
                </div>
            </div>
            <div className='text-right flex justify-end px-12'>
                <a href='#'><div className=' text-white font-semibold  w-fit p-1 px-8 rounded-3xl  bg-gradient-to-r from-[#354769] to-[#202c41] '> KITCoEK </div>
                </a>
            </div>
        
        
        
     
    </div>
    );
}

export default Header;
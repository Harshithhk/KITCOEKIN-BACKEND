import React, { useState, useEffect } from 'react'


const Footer = () => {
 
    return (
        <div  className="z-0 h-[93px] flex-1  pl-3 bg-[#f8f9fa] absolute bottom-0 w-full  ">
            <div className='flex flex-row justify-between text-[#707597] font-medium text-base pt-10'>
                <div className='flex flex-row ml-10' >© 2022, made with
                    <div >
                        <span ><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-[2px]" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg></span>
                    </div>
                     by
                    <a >
                        <span className='font-bold'>&nbsp;Hashinclude&nbsp;</span>
                    </a>
                </div>
                <div className='flex flex-row gap-x-6 mr-10' >
                    <a >
                        <span  >&nbsp;Hashinclude&nbsp;</span>
                    </a>
                    <a >
                        <span >&nbsp;About Us&nbsp;</span>
                    </a>
                    <a >
                        <span >&nbsp;Blog&nbsp;</span>
                    </a>
                    <a >
                        <span >&nbsp;License&nbsp;</span>
                    </a>

                </div>
                
            </div>


            


        </div>
    );
    
};

export default Footer;
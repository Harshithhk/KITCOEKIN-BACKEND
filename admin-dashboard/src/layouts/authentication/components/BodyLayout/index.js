import React from 'react';
import Assets from '../../../../assets';

function BodyLayout(props) {

  return (
    <div class="flex right-0 w-full mt-24 z-50 ">
      <div class="w-2/6  px-4 -mt-5 ml-36 ">
        <div class="p-12 mx-6">
          <div class="text-center">
            <img
              class="mx-auto w-28"
              src={Assets.ClgLogo}
              alt="logo"
            />
            <h4 class=" mt-1 mb-12 pb-1 text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-800 "   >Kitcoek.in Admin Portal</h4>
          </div>
          <form>
            <p class="mb-4">Please login to your account</p>
            <div class="mb-4">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-default bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Username"
              />
            </div>
            <div class="mb-4">
              <input
                type="password"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-default bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </div>
            <div class="text-center pt-1 mb-12 pb-1">
              <button
                class="bg-gradient-to-r from-cyan-500 to-blue-600 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              
              >
                Log in
              </button>
              <a class="text-gray-500" href="#!">Forgot password?</a>
            </div>
            <div class="flex items-center justify-between pb-6">
              <p class="mb-0 mr-2">Don't have an account?</p>
              <button
                type="button"
                class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    {/* ----------- */}
      <div
        className="2xl:w-6/12 right-0 flex items-center mb-10 -mt-52 ml-28 bg-black  rounded-bl-3xl "
      // style={style2}
      >
        {/* <div class="w-[800px]  absolute overflow-hidden inline-block">
 <div class=" h-[800px]  bg-blue-700  rotate-45 transform origin-top-right"></div>
</div> */}
      <div className='absolute w-[180px] rotate-12 mt-10 -ml-[111px] h-full bg-default'></div>
      <img src={Assets.Curved} className="w-full h-full rounded-bl-3xl"/>
      </div>
  </div>
  );
}

export default BodyLayout;
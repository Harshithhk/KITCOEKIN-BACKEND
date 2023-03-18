import React from 'react';

function BodyLayout(props) {
  let style1 = {
    background: "linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593)"
  }
  let style2 = {
    background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
  }
  return (
    <div class="flex right-0 w-full mt-24 bg-black ">
      <div class="w-2/6 px-4 ">
        <div class="p-12 mx-6">
          <div class="text-center">
            <img
              class="mx-auto w-48"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              alt="logo"
            />
            <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">We are The Lotus Team</h4>
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
                class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                style={style1}
              >
                Log in
              </button>
              <a class="text-gray-500" href="#!">Forgot password?</a>
            </div>
            <div class="flex items-center justify-between pb-6">
              <p class="mb-0 mr-2">Don't have an account?</p>
              <button
                type="button"
                class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Danger
              </button>
            </div>
          </form>
        </div>
      </div>
    {/* ----------- */}
      <div
        class="2xl:w-7/12 right-0 flex items-center 2xl:rounded-r-lg rounded-b-lg 2xl:rounded-bl-none"
      style={style2}
      >
        <div class="text-white px-4 py-6 md:p-12 md:mx-6">
          <h4 class="text-xl font-semibold mb-6">We are more than just a company</h4>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
  </div>
  );
}

export default BodyLayout;
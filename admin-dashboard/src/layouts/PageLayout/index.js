import React from 'react';
import { useState } from "react"
import SideNavBar from "../../components/NavBar/SideNavBar"
import BaseLayout from "../BaseLayout"
import DesktopError from '../../components/DesktopError';
import SignIn from '../authentication/sign-in';

function PageLayout(props) {
    const [active, setActive] = useState(0)

    let router = [
        "",
        "signin"
    ]


    let index = router.findIndex(
        (route) =>
          route.toLowerCase().replace(/\s+/g, "") ==
          window.location.pathname
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace("/", "")
      )

   if(index === -1){
    return(
        <>
          <div className="App  flex md:hidden">
            <SideNavBar setActive={setActive} />
            <BaseLayout setActive={setActive} active={active} />
          </div>
          <DesktopError />
         
        </>
    )
   }else{
    return(
        <SignIn />
    )
   }
    
}

export default PageLayout;
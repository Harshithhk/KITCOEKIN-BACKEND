import React from 'react';
import { useState } from "react"
import SideNavBar from "../../components/NavBar/SideNavBar"
import BaseLayout from "../BaseLayout"
import DesktopError from '../../components/DesktopError';


function PageLayout(props) {
    const [active, setActive] = useState(0)

    return(
        <>
          <div className="  flex md:hidden">
            <SideNavBar setActive={setActive} />
            <BaseLayout setActive={setActive} active={active} />
          </div>
          <DesktopError />
         
        </>
    )

}

export default PageLayout;
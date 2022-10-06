import Dashboard from "./icons/dashboard.js"
import NewsAndNotices from "./icons/newsAndNotices"
import ImageGallery from "./icons/imageGallery"
import Events from "./icons/events"
import Documents from "./icons/documents"
import Settings from "./icons/settings"
import Logo from "./images/logo.png"
import LeftArrowHead from "./icons/leftArrowHead"
import Home from "./icons/home.js"
import DesktopError from "./images/desktop.png"
import ClgLogo from "./images/clgLogo.png"
import curved from "./images/curved-images/curved-6.jpg"


const Assets = {
 "Dashboard": function(props){
  return <Dashboard color={props}/>
 },
"NewsAndNotices": function(props){
   return <NewsAndNotices color={props}/>
},
"ImageGallery": function(props){
  return <ImageGallery color={props}/>
 },
 "Events": function(props){
  return <Events color={props}/>
 },
 "Documents": function(props){
  return <Documents color={props}/>
 },
 "Settings": function(props){
  return <Settings color={props}/>
 },
 "Home": function(props){
    return <Home color={props}/>
   },
 "LeftArrowHead": <LeftArrowHead />,
 "hashinclude": Logo,
 "DesktopError": DesktopError,
 "ClgLogo":ClgLogo,
 "Curved":curved
}

export default Assets
import Dashboard from "./icons/dashboard.js"
import NewsAndNotices from "./icons/newsAndNotices"
import ImageGallery from "./icons/imageGallery"
import Events from "./icons/events"
import Documents from "./icons/documents"
import Settings from "./icons/settings"
import Logo from "./images/logo.png"
import LeftArrowHead from "./icons/leftArrowHead"
import Home from "./icons/home.js"

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
}

export default Assets
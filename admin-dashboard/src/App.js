import "./App.css"
import PageLayout from "./layouts/PageLayout"
import { Route, Routes } from 'react-router-dom';
import SignIn from "./layouts/authentication/sign-in";

function App() {
  return (      
      <Routes>
        <Route path="/" element={<SignIn/>}  />
        <Route  path="/signin" element={<SignIn/>}  />
        
        <Route  path="/dashboard" element={<PageLayout/>}  />
        <Route  path="/news&notices" element={<PageLayout/>}  />
        <Route  path="/imagegallery" element={<PageLayout/>}  />
        <Route  path="/events" element={<PageLayout/>}  />
        <Route  path="/timetable" element={<PageLayout/>}  />
        <Route  path="/techingstaff" element={<PageLayout/>}  />
        <Route  path="/settings" element={<PageLayout/>}  />
      </Routes>
  )
}

export default App

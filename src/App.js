import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
function App() {
  return (
    <>
      <Router> 
      <Routes> 
<Route path="/"element={<Home />}/>
<Route path="/Profile"element={<Profile />}/>
<Route path="/Sing-In"element={<SingIn />}/>
<Route path="/Sing-Up"element={<SingUp/>}/>
<Route path="/Forgot-Password"element={<ForgotPassword />}/>
<Route path="/Offers"element={< Offers />}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;

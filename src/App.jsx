import Footer from "./navigation/footer";
import NavBar from "./navigation/navbar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AboutPage from "./pages/about";
import Authentication from "./pages/authentication";
import ContactUsPage from "./pages/contact";
import ExplorePage from "./pages/explore";
import LandingPage from "./pages/landing";
import { Routes, Route} from "react-router-dom";

export default function App() {

  return (
    <>
    <NavBar/>
    
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/explore" element={<ExplorePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactUsPage/>}></Route>
        <Route path="/authentication" element={<Authentication/>}></Route>
        <Route path="/authentictaion/login"></Route>
        <Route path="/authentication/signup" element={<SignUp/>}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    
    <Footer/>
    </>
  )
}



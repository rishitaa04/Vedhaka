import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
// import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Trial from "./components/Trial";
import Pricing from "./components/pricing";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Resources from "./components/Resources";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Services from "./components/Services";
import GetConnected from "./components/GetConnected";
import Blogs from "./components/Blogs";
import PS from "./components/PS";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/Trial" element={<Trial />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/GetConnected" element={<GetConnected />} />
          {/* <Route path="/Servives" element={<Services/>} /> */}
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Blogs" element={<Blogs/>}/>
          <Route path = "/PS" element={<PS/>}/>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

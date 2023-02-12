import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className = "myApp">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      {/* 
      <Contact/>
      <SignUp/> */}
    </div>
  );
}

export default App;

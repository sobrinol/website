import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className = "myApp">
      <Navbar/>
      <Home/>
      <About/>
      {/* <Service/>
      <Contact/>
      <SignUp/> */}
    </div>
  );
}

export default App;

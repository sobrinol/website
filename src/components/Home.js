import "./HomeStyle.css"
import snowymountain from "./images/snowymountain.jpg";
import Clicker from "./Clicker";

const Home = () => {
    return (<>
    <div className = "home">
        <img src = {snowymountain} className = "snowymountain"></img>
        <div className = "content">
            <p>Luis Sobrino</p>
            <p>Computer Science B.S.| Dec, 2024</p>
            
        </div>
        <Clicker/>
    </div>
    </>
    );
}

export default Home;
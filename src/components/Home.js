import {ButtonData} from "./ButtonData";
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
            {/* <div className = "button-menu-wrapper">
                <ul className = "button-menu">
                        {ButtonData.map((item, index) =>{
                            return(
                            <li key = {index}>
                            <button className = {item.cName}>
                                <a href = {item.url} target = "_blank" rel="noreferrer">
                                <img src = {item.img} alt = {item.alt} className = {item.img}></img>
                                </a>  
                        </button>
                        </li>
                        )
                    })}
                </ul>
            </div>     */}
        </div>
        <Clicker/>
    </div>
    </>
    );
}

export default Home;
import {ButtonData} from "./ButtonData";
import "./HomeStyle.css"

const Home = () => {
    return (<>
    <div className = "home">
        <div className = "content">
            <p>Luis Sobrino</p>
            <p>Computer Science B.S.| Dec, 2024</p>
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
    
        
        </div>
    </div>
    </>
    );
}

export default Home;
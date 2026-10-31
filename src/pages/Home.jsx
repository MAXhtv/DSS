import { useNavigate, Link } from "react-router-dom";
import lean from "../assets/lean.png"
import star2 from "../assets/star2.png"
import { Navbar } from "../components/Navbar";
import { Section } from "../components/Section";

export function Home(){
    const navigate=useNavigate()
    const navigateToBeats=()=>{
        navigate('/beats')
    }
    return (
        <>
        <div>
            <h1>Dream's Stars Studios</h1>
            <p style={{textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)", padding: "15px", display: "inline-block", borderRadius: "5px"}}>Os melhores beats fazem os melhores artistas</p>
            <button onClick={navigateToBeats} alt='tobeats'>BEATS</button>
            <ul>
                <li>
                    <Link to="https://open.spotify.com/artist/2n51dSfSVinTY6toamqHNz?si=SziWAkhqRh-OAvSs1XZtow" alt="yuziyprofile">Perfil de Yuziyy</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/sobre" alt="about">Sobre</Link>
                </li>
            </ul>
            <div>
                <img src={star2} alt="star2" height="130px" style={{position:"absolute", top:0, left:0}}/>
                <img src={lean} alt="lean" height="100px" style={{position: "relative", left: 300}}></img>
            </div>
        </div>
        </>
    )
}

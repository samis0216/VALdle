import { useNavigate } from "react-router-dom"
import './Welcome.css'
import stock_dj from '../../../public/stock_dj.mp4'

export default function Welcome() {
    const navigate = useNavigate()
    return (
        <div className="homepageMain">
            <video src={stock_dj} id="video" autoPlay loop muted></video>
            <div className="content">
                <h1 style={{ color: "rgb(250, 246, 0)", marginBottom: '0', fontSize: '40px'}}>Welcome to DJdle!</h1>
                <p className='subtitle' style={{ color: "white" }}>Test your EDM knowledge. Discover new artists.</p>
                <div>
                    <button onClick={() => navigate('/login')} className="homepageButton">Get Started</button>
                </div>
            </div>
        </div>
    )
}
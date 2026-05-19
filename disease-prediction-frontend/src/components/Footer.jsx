import logo from "../assets/images/diagnoai_white.png"
import { useNavigate } from "react-router-dom"
function Footer(){
    const navigate = useNavigate()
    return(
        <div className= "mb-0.5 text-cyan-50 flex justify-around bg-violet-900 rounded-3xl max-w-7xl">
            <img className=" h-12 w-auto p-2 my-auto"  src={logo}/>
            <div className="my-3">
                <h1>Start your Health Check Now!</h1>
                <p>Get insights in seconds with our AI-powered tool.</p>
                
            </div>
            <button className=" my-5 bg-red-600 px-2 py-1 rounded-lg text-l hover:scale-110 transition-transform hover:bg-green-600 shadow-lg hover:shadow-green-900" onClick={()=>navigate("/startPage")}>Start Diagnosis</button>
        </div>
    )
}

export default Footer
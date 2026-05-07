import logo from "../assets/images/diagnoai_white.png"
import { useNavigate } from "react-router-dom"
function Footer(){
    const navigate = useNavigate()
    return(
        <div className= "text-cyan-50 flex justify-between bg-[url(/src/assets/images/FooterBG.png)] bg-bottom-left">
            <img className=" h-10 w-auto p-2 m-2"  src={logo}/>
            <div className="my-3">
                <h1>Start your Health Check Now!</h1>
                <p>Get insights in seconds with our AI-powered tool.</p>
                <button className=" my-2 bg-red-600 px-3 rounded-lg text-l hover:scale-110 transition-transform hover:bg-green-600 shadow-lg hover:shadow-green-900" onClick={()=>navigate("/startPage")}>Start Diagnosis</button>
            </div>
            <p className="p-2">© {new Date().getFullYear()} DiagnoAI. All rights reserved.</p>
        </div>
    )
}

export default Footer
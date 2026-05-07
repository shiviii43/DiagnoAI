import logo from "../assets/images/Logo2.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate()
    return(
        <div className=" shadow-2xl backdrop-blur-md rounded-b-2xl flex justify-between sticky top-0 z-50">
            <div className="pt-3 pl-6" >
                <Link to="/">
                    <img className="h-10 w-auto" src={logo} alt="Image" />
                </Link>
            </div>
            <div className="p-2 pr-23 pt-5 pb-5" >
                <Link to="/" className="p-2" >Home</Link>
                <Link className="p-2" to="/about">About</Link>
                <Link className="p-2" to="/contact">Contact</Link>
                <Link className="p-2" to="/donate">Donate</Link>
                <button className=" bg-blue-800 text-white hover:bg-blue-500 px-3 border-gray-400 rounded-3xl hover:shadow-lg hover:scale-105" onClick={()=>navigate("/startPage")}>Start</button>
            </div>
        </div>
    )
}

export default Header;
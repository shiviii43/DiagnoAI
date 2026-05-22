import BG from '../assets/images/ErrorBG.png'
import {Link} from 'react-router-dom'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ErrorPage(){

    return(
        <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${BG})`}}>
            <div className="pt-35 pl-35 max-w-1/2">
                <h1 className="text-7xl font-semibold text-violet-700 mb-2">404</h1>
                <h1 className="text-4xl font-semibold mb-3">Page Not Found</h1>
                <p className="mb-5 ">The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className=" bg-violet-700 py-2 px-4 rounded-2xl text-white">
                    <FontAwesomeIcon icon={faHouse} color='rgb(255,255,255)' className="mr-2"/>Go Back Home
                </Link>
            </div>
        </div>
    )
}
export default ErrorPage;
import '../style/App.css'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Donate from "./Donate"
import Layout from "../components/Layout"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './StartPage'
import Result from './Result'
import ErrorPage from './ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen grow bg-[url('../assets/images/FooterBG2.png')] bg-bottom bg-no-repeat bg-cover">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/donate" element={<Donate/>}/>
            <Route path="/startPage" element={<StartPage/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </div>  
    </BrowserRouter>
  )
}

export default App

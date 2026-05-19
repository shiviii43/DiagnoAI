import Card from "../components/Card"
import Card2 from "../components/Card2"
import Upload from "../assets/images/Upload.png"
import Brain from "../assets/images/Brain.png"
import Result from "../assets/images/ResultChecklist.png"
import AIchip from "../assets/images/Aichip2.png"
import Watch from "../assets/images/Watch.png"
import Secure from "../assets/images/Secure.png"
import EasyUse from "../assets/images/EasyUse.png"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

function Home(){
    const navigate = useNavigate()
    const sectionReference = useRef(null)
    const scrollToSection = () =>{
        sectionReference.current.scrollIntoView({behaviour:"smooth"})
    }

    const cards = [
        {
            title:"1. Upload Symptoms",
            image:Upload,
            description:"Enter your symptoms and details."
        },
        {
            title:"2. AI Analysis",
            image:Brain,
            description:"Our AI model analysis your data."
        },
        {
            title:"3. Get Results",
            image:Result,
            description:"Recieve your diagnosis instantly!"
        }
    ]

    const card2 = [
        {
            title:"AI Accuracy",
            image:AIchip,
            description:"Highly precise diagnostics."
        },
        {
            title:"Fast Results",
            image:Watch,
            description:"Quick & reliable outcomes."
        },
        {
            title:"Data Security",
            image:Secure,
            description:"HIPAA & GDPR complaint."
        },
        {
            title:"Easy to Use",
            image:EasyUse,
            description:"User-friendly interface."
        }
    ]


    return(
        <>
            <div className="bg-[url(./src/assets/images/HeaderIntegrated.png)] bg-cover -mt-17 pb-10 pt-40">
                <div className="max-w-md p-6 text-mist-100 mb-10">
                    <h1 className="font-bold p-2 text-3xl">AI-Powered Disease Prediction in Seconds</h1>
                    <p className="italic m-1 text-black">Get accurate health insights instantly with advance AI technology.</p>
                    <div className="p-2">
                        <button className="rounded-2xl  bg-blue-900 pl-2 pr-2 pt-1 pb-1 text-xs mr-2 hover:bg-blue-800 hover:shadow-lg hover:scale-110" onClick={()=>navigate("/startPage")}>Start Diagnose</button>
                        <button className="rounded-2xl bg-white text-xs text-black pl-2 pr-2 pt-1 pb-1 ml-1 hover:scale-110" onClick={scrollToSection}>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="bg-[url(/src/assets/images/FooterBG2.png)] bg-bottom ">
                <h1 className="flex justify-center">How it works</h1>
                <div className=" flex flex-wrap gap-6 justify-center">
                    {cards.map((card,index)=>(
                        <Card key={index} {...card}/>
                    ))}
                </div>
                <h1 className="flex justify-center" ref={sectionReference}>Key Features</h1>
                <div className=" flex flex-wrap gap-6 justify-center">
                    {card2.map((card,index)=>(
                        <Card2 key={index} {...card}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
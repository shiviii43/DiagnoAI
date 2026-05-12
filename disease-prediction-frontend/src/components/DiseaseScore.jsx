import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStethoscope, faBrain, faUserDoctor, faRotate} from "@fortawesome/free-solid-svg-icons"
import ConfidenceCirle from './ConfidenceCircle'


function DiseaseScore({disease,confidence,prediction}){

    const isSuffering = prediction==1;
    let diseaseSurity;
    if(confidence>=80){
        diseaseSurity = "strong"
    }
    else if(confidence>=40 && confidence<80){
        diseaseSurity = "moderate"
    }
    else{
        diseaseSurity = "few"
    }
    const word = isSuffering? "associated" : "dissociated";

    const summary = `The model has analyzed the provided health indicators and found ${diseaseSurity} patterns ${word} with ${disease}`;

    const recommendation = isSuffering
    ? "Please consult a healthcare professional for proper diagnosis and treatment."
    : "You appear to be at low risk. Maintain a healthy lifestyle and continue regular check-ups to stay healthy."

    return(
        <div className="py-3 mt-3   px-3 bg-white/60 rounded-lg border border-white/80 shadow-2xl">
            <div className="flex justify-between">
                <div className="mr-5"> 
                    <div className="flex mt-2">
                        <FontAwesomeIcon className = "mx-3 py-3.5" icon={faStethoscope} color="rgba(120, 90, 208, 1.00)"/>
                        <h1 className="flex flex-col text-xs font-semibold">Disease <span className="text-purple-700 text-lg font-semibold">{disease}</span></h1>     
                    </div>
                    <div className="bg-purple-700/10 rounded-xl p-3 mt-4">
                        <FontAwesomeIcon icon={faBrain} color="rgba(120, 90, 208, 1.00)"/><span className="text-sm font-semibold text-purple-700 pl-3">AI summary Analysis</span>
                        <p className="text-xs mt-1.5">{summary}.</p>
                    </div>
                </div>
                <div className="flex my-auto mr-5">
                    <ConfidenceCirle percentage={confidence}/>
                </div>
                <div className="bg-green-400/10 rounded-lg p-3">
                    <FontAwesomeIcon icon={faUserDoctor} color="green"/><span className="text-green-700 font-semibold mx-3">Recommendation</span>
                    <p className="mt-2.5 text-xs">{recommendation}</p>
                </div>           
            </div>
            <div className="flex mx-auto">
                <button className="mx-auto my-3 bg-purple-700 text-white py-1 px-7 rounded-lg shadow-2xl hover:scale-105" ><FontAwesomeIcon className="mr-1.5" icon={faRotate} color="white"/>Try Again</button> 
            </div>
        </div>
    )
}
export default DiseaseScore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStethoscope, faBrain } from "@fortawesome/free-solid-svg-icons"

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


    return(
        <div className="flex justify-between py-3 mt-3   px-3 bg-white/60 rounded-lg border border-white/80 shadow-2xl">
            <div>
                <div className="flex">
                    <FontAwesomeIcon icon={faStethoscope}/>
                    <h1 className="flex flex-col">Disease <span>{disease}</span></h1>
                    
                </div>
                <div>
                    <FontAwesomeIcon icon={faBrain}/><span>AI summary Analysis</span>
                    <p>{summary}</p>
                </div>
            </div>
            <div>
                <h1>Confidence Score</h1>

            </div>
            <div>
                <FontAwesomeIcon icon={}/><span>Recommendation</span>
                
            </div>
            <button className="mx-auto ">Try Again</button>
        </div>
        
    )
}
export default DiseaseScore
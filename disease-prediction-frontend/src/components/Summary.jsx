import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRobot, faUserDoctor } from "@fortawesome/free-solid-svg-icons"

function Summary(disease,confidence){

    const positive = "The model has analysed the provided health indicators and found strong patterns associated with " + {disease}+"."
    
    const paragraph = confidence>70? positive :""

    return(
        <div>
            <div className="flex flex-col">
                <FontAwesomeIcon icon={faRobot}/>
                <div>
                    <h1>AI Analysis Summary</h1>
                    <p>{paragraph}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
export default Summary
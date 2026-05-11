import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faShieldHeart, faArrowTrendUp, faArrowTrendDown } from '@fortawesome/free-solid-svg-icons'

function DiseaseTitle({disease,prediction}){

    const isPositive = prediction==1

    const result = isPositive? "POSITIVE" : "NEGATIVE";
    const paragraph = isPositive? "Our AI model predicts that you have signs associated with " : "Our AI model did not find strong indicators of ";
    const icon1 = isPositive? faCircleExclamation : faShieldHeart;
    const icon2 = isPositive? faArrowTrendDown : faArrowTrendUp;

    const primaryColor = isPositive? "text-red-600" : "text-green-600";
    const iconColor = isPositive? "rgb(239,44,51)" : "rgb(22,163,74)";

    return(
        <div className="flex py-3 px-3 bg-white/60 rounded-lg border border-white/80 shadow-2xl">
            <FontAwesomeIcon className="rounded-4xl shadow-lg my-1 mx-3 p-3 " icon={icon1} size='2x' color={iconColor}/>
            <h1 className={`${primaryColor} text-xs font-semibold py-3`}>PREDICTION RESULT <span className='text-2xl text-shadow-xs'>{result}</span></h1>
            <div className="flex py-3">
                <p className="text-xs">{paragraph}<span className={primaryColor}>{disease}.</span></p>
                <FontAwesomeIcon className="my-auto ml-1 mr-4" icon={icon2} size='2x' color={iconColor}/>
            </div>
        </div>
    )
}
export default DiseaseTitle
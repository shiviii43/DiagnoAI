import PageTitle from "../components/PageTitle"
import "../components/DiseaseFields"
import { useState } from "react"
import {DiseaseFields} from "../components/DiseaseFields"
import API from '../services/api'
import { useNavigate } from "react-router-dom"

const StartPage = () => {
    const[selectedDisease, setSelectedDisease] = useState("")
    const[formData,setFormData] = useState({})

    const fields = DiseaseFields[selectedDisease]?.fields || []

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("FORM SUBMITTED");
        if(!selectedDisease) return;

        try{
            const processedData = DiseaseFields[selectedDisease].transform(formData);
            console.log("Sending:", processedData);
            //Sending the Form data to the backend.
            const response = await API.post(
                `/${selectedDisease}/predict`,
                processedData
            );
            console.log("Response:", response.data)
            //Sending the response data to the Result Page
            navigate("/result",{
                state: {
                    predictionData : response.data
                }
            })
        }catch(error){
            console.error("Axios Error:",error);
        }
    }
    return(
        <div className=" max-w-4xl bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl mx-auto my-10 rounded-3xl p-7">
            <PageTitle title="Information Input Form" paragraph="Enter the details below to analyse the Patient's symptoms"/>
            {/*The Select Component*/}
            <select
                value = {selectedDisease}
                onChange={(e) =>{
                    setSelectedDisease(e.target.value)
                    setFormData({})
                }}
                className="mb-6 p-2 border rounded"
            >
                <option value="">Select Disease</option>
                <option value="diabetes">Diabetes</option>
                <option value="heart">Heart Disease</option>
                <option value="liver">Liver Disease</option>
            </select>  

            {/*Dynamic Form*/}
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl space-y-4" >
                {fields.length === 0 && (
                    <p className="text-center text-gray-400"> Please Select a Disease :</p>
                )}
                {fields.map((field) => (
                    <div key={field.name}>
                    <label className="block mb-1 text-sm">
                    {field.label}
                    </label>

                {field.type === "select" ? (
                <select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-white/20 border border-white/30"
                >
                <option value="">Select</option>
                {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
                </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ""}
                step={field.step || "1"}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white/20 border border-white/30"
              />
            )}
          </div>
        ))}

        {fields.length > 0 && (
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded mt-4" >
            Predict
          </button>
        )}
            </form>
        </div>
    )
}
export default StartPage
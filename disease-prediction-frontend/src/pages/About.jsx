import PageTitle from "../components/PageTitle"
import "../style/About.css"

function About() {
  const title = "DiagnoAI - Smart Disease Prediction Powered by AI"
  const paragraph = "Helping users detect potential health risks early using Machine Learning. "
  return (
    <div className=" max-w-3xl bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl mx-auto my-10 rounded-3xl p-7">
      <PageTitle title={title} paragraph={paragraph}/>
      <h1 className="h1">About DiagnoAI</h1>
      <p className="content">DiagnoAI is an AI-powered disease prediction platform designed to assist users in identifying potential health risks based on their symptoms. The goal of this project is to make early health insights more accessible, faster, and easier to understand using modern technology.</p>
      <h1 className="h1" >What this project does </h1>
      <p className="content">DiagnoAI allows users to input their symptoms through a simple and intuitive interface. Based on this input, a machine learning model analyzes the data and predicts possible diseases that match the symptoms.<br/>
      The system is designed to:
      <br/>
      <ul className="list">
        <li>Process user-provided symptoms</li>
        <li>Analyze patterns using trained data models</li>
        <li>Generate possible disease predictions</li>
        <li>Provide basic guidance for next steps</li>
      </ul>
      </p>
      <h1 className="h1" >Disclaimer</h1>
      <p className="content" >DiagnoAI is intended for educational and informational purposes only. It does not provide medical advice, diagnosis, or treatment. Users are strongly advised to consult a qualified healthcare professional for any medical concerns.</p>
      <h1 className="h1" >Key Features</h1>
      <ul className="list" >
        <li>AI-Based Predictions</li>
        <li>User Friendly Interface</li>
        <li>Fast Results</li>
        <li>Data-Driven Insights</li>
        <li>Secure Input Handling</li>
      </ul>
      <h1 className="h1" >About the Developer</h1>
      <p className="content" >This project is developed as part of a learning initiative to explore the integration of artificial intelligence with healthcare systems. The aim is to build impactful solutions while strengthening technical skills in full-stack and machine learning development.</p>
      <h1 className="h1" >Technology Used</h1>
      <ul className="list" >
        <li>Frontend:ReactJS, Tailwind CSS</li>
        <li>Backend:SpringBoot</li>
        <li>Machine Learning:Python</li>
        <li>DataSet:Public HealthCare Datasets(Kaggle)</li>
      </ul>
    </div>
  )
}

export default About
import "../style/Donate.css"
import PageTitle from '../components/PageTitle'
import RazerPay from "../assets/images/Razorpay_logo.svg"

function Donate() {
  const title = "Support our Disease Prediction App"
  const paragraph = "Help us make early disease detection accessible to everyone"
  return (
    <div className=" max-w-3xl bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl mx-auto my-10 rounded-3xl p-7">
      <PageTitle title={title} paragraph={paragraph}/>
      <p>Your support allows us to enhance our AI models and keep the app free for all users</p>
      <div className="flex flex-col my-5">
        <h1 className="mx-auto">Choose an amount to contribute : </h1>
        <div className="mx-auto my-5" >
          <button className="btn" value={100}>₹ 100</button>
          <button className="btn" value={500}>₹ 500</button>
          <button className="btn" value={1000}>₹ 1000</button>
          <button className="btn" value={2000}>₹ 2000</button> 
        </div>
        <button className="bg-blue-800 text-white px-4 py-0.5 mx-auto my-2 rounded-lg">Donate a custom amount</button>
      </div>
      <div className="flex items-center w-full">
        <div className="grow border-t border-gray-400"></div>
        <span className="mx-3 text-gray-600 font-medium">
          Secure Payment Options
        </span>
        <div className="grow border-t border-gray-400"></div>
      </div>
      <div className="flex justify-center my-5">
        <img className="paymentLogo" src={RazerPay}/>
      </div>
      <p>💚 Every contribution brings us closer to a healthier future.</p>
    </div>
  )
}

export default Donate
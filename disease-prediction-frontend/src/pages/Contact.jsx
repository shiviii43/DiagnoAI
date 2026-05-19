import PageTitle from"../components/PageTitle"
import "../style/Contact.css"
function Contact() {
  const title = "Contact Us"
  const paragraph = "Have questions, feedback, or suggestions? We'd love to hear from you."
  return (
    <div className=" max-w-3xl bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl mx-auto my-10 rounded-3xl p-7">
      <PageTitle title={title} paragraph={paragraph}/>
      <h1>Reach out to us and we'll get back to you as soon as possible.</h1>
      <form className="bg-blue-50 flex flex-col m-5 p-5 rounded-3xl">
        <label className="label">Full Name</label>
        <input className="input" placeholder="Enter your name"/>
        <label className="label">Email</label>
        <input className="input" placeholder="Enter your email address"/>
        <label className="label">Message</label>
        <textarea className="message" placeholder="Write your message here."/>
        <button className="mt-3 bg-blue-500 w-30 mx-auto rounded-3xl text-white ">Send Message</button>
      </form>
      <h1>Contact Info</h1>
      <h3>Email : shivanshharbola190259@gmail.com</h3>
    </div>
  )
}

export default Contact
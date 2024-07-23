import React, { useState } from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  const [msg, setMsg]=useState("");
  const [name, setName]=useState("");
  const [subject, setSubject]=useState("");
  const [Email, setEmail]=useState("");
  const  handleSubmit = (e) => {
    e.preventDefault();
   
      alert(name +" you have submitted this Msg: "+ msg +" successfully!");
    
  }
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)} />
              <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <input type='text' placeholder='Subject' onChange={(e)=>setSubject(e.target.value)} />
            <textarea cols='30' rows='10' onChange={(e)=>setMsg(e.target.value)}></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact

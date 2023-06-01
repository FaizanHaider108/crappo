import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact section__padding' id='contact'>
        <div className='contact_form'>
           {/* form */}
            <form className='form'>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Email'></input>
                <textarea type="message" placeholder='message'></textarea>
                <button type='Submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
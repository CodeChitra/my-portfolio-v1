import React, { useState } from 'react'
import "./Contact.scss";

export default function Contact() {
    const [message, setMessage] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(true);
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='email' />
                    <textarea placeholder='message'></textarea>
                    <button type='submit'>Submit</button>
                    <span>Thanks, I'll reply ASAP :)</span>
                </form>
            </div>

        </div>
    )
}

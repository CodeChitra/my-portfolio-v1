import React from 'react'
import "./Contact.scss";

export default function Contact() {

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form action="https://formspree.io/f/xlekrana"
                    method="POST">
                    <input type="email" name="email" placeholder='email' />
                    <textarea name="message" placeholder='message'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}

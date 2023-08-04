import Image from 'next/image'
import React from 'react';
import contactVector from '../public/images/contact-vector.svg';

const Contact = () => {
    return (
        <section className='about spacing-btw-elements'>
            <div className='contact-div-container'>
                <h2>JOIN {" "}ICRA</h2>
                <div className='contact-vector'>
                    <Image src={contactVector} alt="line vector" />
                </div>
                <p>Let's Build Your VR Experience</p>

                <form className='contact-form '>
                    <div className='contact-grid'>
                        <div>
                            <input
                                type="text"
                                placeholder='First Name'
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder='Last Name'
                            />
                        </div>
                    </div>

                    <div className='contact-grid'>
                        <div>
                            <input
                                type="email"
                                placeholder='Email'
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder='Phone Number'
                            />
                        </div>
                    </div>

                    <div className='contact-input'>
                        <input
                            type="text"
                            placeholder='Subject'
                        />
                    </div>

                    <div className='contact-input'>
                        <textarea
                            placeholder='Tell us something . . .'
                            rows="8" cols="50"
                        ></textarea>
                    </div>

                    <div className='contact-btn'>
                        <button>
                            SEND TO ICRA
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
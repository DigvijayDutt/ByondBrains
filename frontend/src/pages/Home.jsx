import Navbar from '../assets/Navbar';
import "../pages/faq.css";
import { useState } from 'react';

function Home() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        { question: "What is the duration of my course?", answer: "The duration varies depending on the course you choose. Please check the course details for specific durations." },
        { question: "Do I need any programming background to start this course?", answer: "No, our courses are designed for both beginners and experienced individuals." },
        { question: "What are the prerequisites for this course?", answer: "Basic knowledge of mathematics and logical thinking is recommended but not required." },
        { question: "Do you provide certification upon completion?", answer: "Yes, we provide an industry-recognized certificate upon successful completion of the course." },
        { question: "Can I get a refund?", answer: "We are sorry, but we don't refund the amount. Every aspirant is encouraged to connect with the sales team and watch free videos on our Instagram, YouTube channels to experience the method of delivering training." }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <div className='Container'>
                <div className='HeroContainer'>
                    <h1>Start your AI learning TODAY</h1>
                    <div className='FormContainer'>
                        <ul className='SignInUl'>
                            <li className='selected'>Log In</li>
                            <li className='SignInLi'>Sign Up</li>
                        </ul>
                        <form action="submit" className='SignInForm'>
                            <label htmlFor="email">Email Address</label>
                            <input type='email' name='email' id='email' required className='SignInFormInput' placeholder='Enter Your Email' />
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' id='password' required className='SignInFormInput SignInPassword' placeholder='Enter Your Password' />
                            <a href="">Forget password?</a>
                            <button className='SignInButton'>Log In</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='FAQContainer'>
                <h2 className='FAQTitle'>FAQs</h2>
                <div className='FAQList'>
                    {faqs.map((faq, index) => (
                        <div key={index} className='FAQItem'>
                            <div className='Question' onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                <span className={`Arrow ${openFAQ === index ? 'open' : ''}`}>&#9660;</span>
                            </div>
                            {openFAQ === index && <div className='Answer'>{faq.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;

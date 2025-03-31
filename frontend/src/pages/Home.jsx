import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';
import LoginForm from '../assets/LoginForm';
import SignupForm from '../assets/SignupForm';
import "../pages/faq.css";
import { useState } from 'react';

function Home() {
    const [openFAQ, setOpenFAQ] = useState(null);
    const [formType, setFormType] = useState("Signin");
    const [isClass, setIsClass] = useState(false);
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
    return(
        <>
            <Navbar />
            <div className='Container'>
                <div className='HeroContainer'>
                    <h1>Start your AI learning TODAY</h1>
                    <div className='FormContainer'>
                        <ul className='SignInUl'>
                            <button className={`${isClass ? "selected" : "SignInLi" }`} onClick={()=>{setFormType("Login"), setIsClass(!isClass)}}>Log In</button>
                            <button className={`${isClass ? "SignInLi" : "selected" }`} onClick={()=>{setFormType("Signin"), setIsClass(!isClass)}}>Sign Up</button>
                        </ul>
                        {formType === "Signin" ? <SignupForm /> : <LoginForm />}
                    </div>
                </div>
                <div className='CardsContainer'>
                    <div className='Card'>
                        <img className='MainImage' src='src/assets/DS.jpg' />
                        <h4 className='text'>AI with Python and SQL Full course</h4>
                        <div className="brow flexstart mb">
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                        </div>
                        <div className="brow">
                            <p className='text'>$4000</p>
                            <a href="">Enroll Now <img className='svg' src="src/assets/img/arrow-right.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='MainImage' src='src/assets/img/DS.jpg' />
                        <h4 className='text'>AI with Python and SQL Full course</h4>
                        <div className="brow flexstart mb">
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                        </div>
                        <div className="brow">
                            <p className='text'>$4000</p>
                            <a href="">Enroll Now <img className='svg' src="src/assets/img/arrow-right.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='MainImage' src='src/assets/DS.jpg' />
                        <h4 className='text'>AI with Python and SQL Full course</h4>
                        <div className="brow flexstart mb">
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                            <img className='svg' src="src/assets/img/star.svg" alt="" />
                        </div>
                        <div className="brow">
                            <p className='text'>$4000</p>
                            <a href="">Enroll Now <img className='svg' src="src/assets/img/arrow-right.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="Databar">
                    <div className='brow'>
                        <h2>18,723+</h2>
                        <img src="src/assets/img/man.png" alt="" className='CircleSmallImage'/>
                        <img src="src/assets/img/man.png" alt="" className='CircleSmallImage'/>
                        <img src="src/assets/img/man.png" alt="" className='CircleSmallImage'/>
                        <h4>Got wonderful results</h4>
                    </div>
                    <div>
                        <h4>Your learning is important. Here is what our previous students across the globe have to say...</h4>
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
            </div>
            <Footer />
        </>
    );                  
}

export default Home;

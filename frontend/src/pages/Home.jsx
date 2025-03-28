import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';
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
    return(
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
                <div className='CardsContainer'>
                    <div className='Card'>
                        <img className='MainImage' src='src/assets/DS.jpg' />
                        <h4 className='text'>AI with Python and SQL Full course</h4>
                        <div className="brow flexstart mb">
                            <img className='svg' src="src/assets/star.svg" alt="" />
                            <img className='svg' src="src/assets/star.svg" alt="" />
                            <img className='svg' src="src/assets/star.svg" alt="" />
                            <img className='svg' src="src/assets/star.svg" alt="" />
                        </div>
                        <div className="brow">
                            <p className='text'>$4000</p>
                            <a href="">Enroll Now <img className='svg' src="src/assets/arrow-right.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='MainImage' src='src/assets/DS.jpg' />
                        <h4 className='text'>AI with Python and SQL Full course</h4>
                        <div className="brow flexstart mb">
                            <img className='svg' src="src/assets/star.svg" alt="" />
                            <img className='svg' src="src/assets/star.svg" alt="" />
                            <img className='svg' src="src/assets/star.svg" alt="" />
                            <img className='svg' src="src/assets/star.svg" alt="" />
                        </div>
                        <div className="brow">
                            <p className='text'>$4000</p>
                            <a href="">Enroll Now <img className='svg' src="src/assets/arrow-right.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className='Card'>
                        <img className='MainImage' src='src/assets/DS.jpg' />
                        <h4 className='text'>AI with Python and SQL Full course</h4>
                        <div className="brow flexstart mb">
                            <img className='svg' src="src/assets/star.svg" alt="" />
                            <img className='svg' src="src/assets/star.svg" alt="" />
                            <img className='svg' src="src/assets/star.svg" alt="" />
                            <img className='svg' src="src/assets/star.svg" alt="" />
                        </div>
                        <div className="brow">
                            <p className='text'>$4000</p>
                            <a href="">Enroll Now <img className='svg' src="src/assets/arrow-right.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="Databar">
                    <div className='brow'>
                        <h2>18,723+</h2>
                        <img src="src/assets/man.png" alt="" className='CircleSmallImage'/>
                        <img src="src/assets/man.png" alt="" className='CircleSmallImage'/>
                        <img src="src/assets/man.png" alt="" className='CircleSmallImage'/>
                        <h4>Got wonderful results</h4>
                    </div>
                    <div>
                        <h4>Your learning is important. Here is what our previous students across the globe have to say...</h4>
                    </div>
                </div>




                <div className="TestimonialCards">
                        <div className="Card2">
                            <img src="src/assets/PngItem_4042710.png" alt="Profile" className="ProfileImage" />
                            <h4>Ted</h4>
                            <p>
                                "My son has studied for almost a year between 2020 and 2021, and I am very thankful 
                                for the programming background ByondBrains has developed for my son. I'm sure it will
                                help him in his graduation."
                            </p>
                            <div className="Stars">★★★★★</div>
                        </div>

                        <div className="Card2">
                            <img src="src/assets/PngItem_4042710.png" alt="Profile" className="ProfileImage" />
                            <h4>If-elif-else block in Python</h4>
                            <p>
                                "Shaurya has had an interest in Python since he was 9 and started learning 
                                from ByondBrains. Look at the confidence he shows in explaining the topic."
                            </p>
                            <div className="Stars">★★★★★</div>
                        </div>

                        <div className="Card2">
                            <img src="src/assets/PngItem_4042710.png" alt="Profile" className="ProfileImage" />
                            <h4>Ted</h4>
                            <p>
                                "Shaurya has had an interest in Python since he was 9 and started learning 
                                from ByondBrains. Look at the confidence he is showing in explaining the topic."
                            </p>
                            <div className="Stars">★★★★★</div>
                        </div>
                    </div>

                    <h3 className="CommunityHeading">Community contributions by ByondBrains</h3>






                    <div className="container3">
            <div className="content-box3">
                <img src="src/assets/comunity.png" alt="Group of people working" className="image3" />
                <div className="text-content3">
                    <h2>Touching Lives in Rural Areas</h2>
                    <p>
                        ByondBrains team has been spreading knowledge across different diverse areas in India. 
                        We value and encourage imparting knowledge versus selling courses.
                    </p>
                    <button>Begin Your Journey</button>
                </div>
            </div>

            <div className="content-box3">
                <div className="text-content3">
                    <h2>Touching Lives in Rural Areas</h2>
                    <p>
                        ByondBrains team has been spreading knowledge across different diverse areas in India. 
                        We value and encourage imparting knowledge versus selling courses.
                    </p>
                    <button>Begin Your Journey</button>
                </div>
                <img src="src/assets/comunity.png" alt="Group of people working" className="image3" />
            </div>

            <div className="content-box3">
                <img src="src/assets/comunity.png" alt="Group of people working" className="image3" />
                <div className="text-content3">
                    <h2>Touching Lives in Rural Areas</h2>
                    <p>
                        ByondBrains team has been spreading knowledge across different diverse areas in India. 
                        We value and encourage imparting knowledge versus selling courses.
                    </p>
                    <button>Begin Your Journey</button>
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
            </div>
            <Footer />
        </>
    );                  
}

export default Home;
        <div className="container">
            <div className="content-box">
                <img src="/images/group.jpg" alt="Group of people working" className="image" />
                <div className="text-content">
                    <h2>Touching Lives in Rural Areas</h2>
                    <p>
                        ByondBrains team has been spreading knowledge across different diverse areas in India. 
                        We value and encourage imparting knowledge versus selling courses.
                    </p>
                    <button>Begin Your Journey</button>
                </div>
            </div>

            <div className="content-box">
                <div className="text-content">
                    <h2>Touching Lives in Rural Areas</h2>
                    <p>
                        ByondBrains team has been spreading knowledge across different diverse areas in India. 
                        We value and encourage imparting knowledge versus selling courses.
                    </p>
                    <button>Begin Your Journey</button>
                </div>
                <img src="/images/group.jpg" alt="Group of people working" className="image" />
            </div>

            <div className="content-box">
                <img src="/images/group.jpg" alt="Group of people working" className="image" />
                <div className="text-content">
                    <h2>Touching Lives in Rural Areas</h2>
                    <p>
                        ByondBrains team has been spreading knowledge across different diverse areas in India. 
                        We value and encourage imparting knowledge versus selling courses.
                    </p>
                    <button>Begin Your Journey</button>
                </div>
            </div>
        </div>
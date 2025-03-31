import { useState, useEffect } from 'react';
import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';
import LoginForm from '../assets/LoginForm';
import SignupForm from '../assets/SignupForm';
import "../pages/styles/faq.css";

function Home() {
    const [openFAQ, setOpenFAQ] = useState(null);
    const [formType, setFormType] = useState("Signin");
    const [isClass, setIsClass] = useState(false);
    const [faqs, setFaqs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch FAQs from backend
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await fetch('http://localhost:5000/faqs');
                if (!response.ok) {
                    throw new Error('Failed to fetch FAQs');
                }
                const data = await response.json();
                setFaqs(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchFaqs();
    }, []);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <div className='Container'>
                {/* LOGIN AND SIGN UP FORM CONTAINER */}
                <div className='HeroContainer'>
                    <h1>Start your AI learning TODAY</h1>
                    <div className='FormContainer'>
                        <ul className='SignInUl'>
                            <button className={`${isClass ? "selected" : "SignInLi"}`} onClick={() => { setFormType("Login"); setIsClass(!isClass) }}>Log In</button>
                            <button className={`${isClass ? "SignInLi" : "selected"}`} onClick={() => { setFormType("Signin"); setIsClass(!isClass) }}>Sign Up</button>
                        </ul>
                        {formType === "Signin" ? <SignupForm /> : <LoginForm />}
                    </div>
                </div>

                {/* POPULAR COURSES CONTAINER */}
                <div className='CardsContainer'>
                    {/* Course cards remain the same */}
                    {[1, 2, 3].map((_, index) => (
                        <div className='Card' key={index}>
                            <img className='MainImage' src='src/assets/img/DS.jpg' alt="Course" />
                            <h4 className='text'>AI with Python and SQL Full course</h4>
                            <div className="brow flexstart mb">
                                {[1, 2, 3, 4].map((_, i) => (
                                    <img key={i} className='svg' src="src/assets/img/star.svg" alt="Star rating" />
                                ))}
                            </div>
                            <div className="brow">
                                <p className='text'>$4000</p>
                                <a href="/">Enroll Now <img className='svg' src="src/assets/img/arrow-right.svg" alt="Arrow" /></a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DATABAR WITH IMAGES */}
                <div className="Databar">
                    <div className='brow'>
                        <h2>18,723+</h2>
                        {[1, 2, 3].map((_, i) => (
                            <img key={i} src="src/assets/img/man.png" alt="User" className='CircleSmallImage' />
                        ))}
                        <h4>Got wonderful results</h4>
                    </div>
                    <div>
                        <h4>Your learning is important. Here is what our previous students across the globe have to say...</h4>
                    </div>
                </div>

                {/* TESTIMONIAL CARDS */}
                <div className="TestimonialCards">
                    {[1, 2, 3].map((_, index) => (
                        <div className="Card2" key={index}>
                            <img src="src/assets/PngItem_4042710.png" alt="Profile" className="ProfileImage" />
                            <h4>{index === 0 ? "Ted" : "If-elif-else block in Python"}</h4>
                            <p>
                                {index === 0 ? 
                                "My son has studied for almost a year between 2020 and 2021, and I am very thankful for the programming background ByondBrains has developed..." : 
                                "Shaurya has had an interest in Python since he was 9 and started learning from ByondBrains. Look at the confidence he shows..."}
                            </p>
                            <div className="Stars">★★★★★</div>
                        </div>
                    ))}
                </div>

                {/* COMMUNITY CARDS */}
                <h3 className="CommunityHeading">Community contributions by ByondBrains</h3>
                <div className="container3">
                    {[1, 2, 3].map((_, index) => (
                        <div className="content-box3" key={index}>
                            {index % 2 === 0 && <img src="src/assets/comunity.png" alt="Community" className="image3" />}
                            <div className="text-content3">
                                <h2>Touching Lives in Rural Areas</h2>
                                <p>
                                    ByondBrains team has been spreading knowledge across different diverse areas in India. 
                                    We value and encourage imparting knowledge versus selling courses.
                                </p>
                                <button className="CCbutton">Begin Your Journey</button>
                            </div>
                            {index % 2 !== 0 && <img src="src/assets/comunity.png" alt="Community" className="image3" />}
                        </div>
                    ))}
                </div>

                {/* FAQ SECTION */}
                <div className='FAQContainer'>
                    <h2 className='FAQTitle'>FAQs</h2>
                    {isLoading ? (
                        <div className="loading-message">Loading FAQs...</div>
                    ) : error ? (
                        <div className="error-message">Error: {error}</div>
                    ) : (
                        <div className='FAQList'>
                            {faqs.map((faq, index) => (
                                <div key={faq.id || index} className='FAQItem'>
                                    <div className='Question' onClick={() => toggleFAQ(index)}>
                                        {faq.question}
                                        <span className={`Arrow ${openFAQ === index ? 'open' : ''}`}>&#9660;</span>
                                    </div>
                                    {openFAQ === index && <div className='Answer'>{faq.answer}</div>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
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
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState({
        faqs: true,
        courses: true
    });
    const [error, setError] = useState({
        faqs: null,
        courses: null
    });
    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    // Toggle description expansion
    const toggleDescription = (courseId) => {
        setExpandedDescriptions(prev => ({
            ...prev,
            [courseId]: !prev[courseId]
        }));
    };

    // Fetch FAQs and Courses from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch FAQs
                const faqResponse = await fetch('http://localhost:5000/faqs');
                if (!faqResponse.ok) throw new Error('Failed to fetch FAQs');
                const faqData = await faqResponse.json();
                setFaqs(faqData);

                // Fetch Courses
                const courseResponse = await fetch('http://localhost:5000/courses');
                if (!courseResponse.ok) throw new Error('Failed to fetch courses');
                const courseData = await courseResponse.json();
                setCourses(courseData);

                // Initialize expanded state for descriptions
                const initialExpandedState = {};
                courseData.forEach(course => {
                    initialExpandedState[course.courseid] = false;
                });
                setExpandedDescriptions(initialExpandedState);
            } catch (err) {
                setError(prev => ({
                    ...prev,
                    [err.message.includes('FAQs') ? 'faqs' : 'courses']: err.message
                }));
            } finally {
                setIsLoading({
                    faqs: false,
                    courses: false
                });
            }
        };

        fetchData();
    }, []);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    // Format price with currency
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
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
                    {isLoading.courses ? (
                        <div className="loading-message">Loading courses...</div>
                    ) : error.courses ? (
                        <div className="error-message">Error: {error.courses}</div>
                    ) : (
                        courses.sort((a, b) => a.courseid - b.courseid).slice(0, 3).map((course) => (
                            <div className='Card' key={course.courseid}>
                                <img 
                                    className='MainImage' 
                                    src={course.imageUrl || 'src/assets/img/DS.jpg'} 
                                    alt={course.title} 
                                />
                                <h4 className='text'>{course.title}</h4>
                                
                                {/* Course Description with Read More toggle */}
                                <div className="course-description">
                                    {expandedDescriptions[course.courseid] || course.description.length <= 150 
                                        ? course.description 
                                        : `${course.description.substring(0, 150)}...`}
                                    {course.description.length > 150 && (
                                        <button 
                                            className="read-more-btn"
                                            onClick={() => toggleDescription(course.courseid)}
                                        >
                                            {expandedDescriptions[course.courseid] ? 'Show less' : 'Read more'}
                                        </button>
                                    )}
                                </div>
                                
                                <div className="brow flexstart mb">
                                    {[1, 2, 3, 4].map((_, i) => (
                                        <img key={i} className='svg' src="src/assets/img/star.svg" alt="Star rating" />
                                    ))}
                                </div>
                                <div className="brow">
                                    <p className='text'>{formatPrice(course.price)}</p>
                                    <a href={`/course/${course.courseid}`}>
                                        Enroll Now <img className='svg' src="src/assets/img/arrow-right.svg" alt="Arrow" />
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
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
                    {isLoading.faqs ? (
                        <div className="loading-message">Loading FAQs...</div>
                    ) : error.faqs ? (
                        <div className="error-message">Error: {error.faqs}</div>
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
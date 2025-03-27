import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';
function Home(){
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
                            <input type='email' name='email' id='email' required className='SignInFormInput'placeholder='Enter Your Email'/>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' id='password' required className='SignInFormInput SignInPassword'placeholder='Enter Your Password'/>
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
            </div>
            <Footer />
        </>
    );
}

export default Home
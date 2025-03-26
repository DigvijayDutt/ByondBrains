import Navbar from '../assets/Navbar';
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
            </div>
        </>
    );
}

export default Home
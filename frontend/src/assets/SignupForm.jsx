function SignupForm(){
    return(
        <>
            <form action="submit" className='SignInForm'>
                <label htmlFor="email">Email Address</label>
                <input type='email' name='email' id='email' required className='SignInFormInput' placeholder='Enter Your Email' />
                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='password' required className='SignInFormInput SignInPassword' placeholder='Enter Your Password' />
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input type='ConfirmPassword' name='ConfirmPassword' id='ConfirmPassword' required className='SignInFormInput SignInPassword' placeholder='Enter Your Password' />                
                <a href="">Already have an account?</a>
                <button className='SignInButton'>Sign Up</button>
            </form>            
        </>
    );
}
export default SignupForm;
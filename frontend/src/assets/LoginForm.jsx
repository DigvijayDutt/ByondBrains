function LoginForm(){
    return(
        <>
            <form action="submit" className='SignInForm'>
                <label htmlFor="email">Email Address</label>
                <input type='email' name='email' id='email' required className='SignInFormInput' placeholder='Enter Your Email' />
                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='password' required className='SignInFormInput SignInPassword' placeholder='Enter Your Password' />
                <a href="">Forget password?</a>
                <button className='SignInButton'>Log In</button>
            </form>
        </>
    );
}
export default LoginForm;
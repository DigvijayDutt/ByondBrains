import { useState } from 'react';
import axios from 'axios';

function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                email,
                password
            });

            if (response.data.success) {
                setSuccess('Signup successful! You can now log in.');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='SignInForm'>
            <label htmlFor="email">Email Address</label>
            <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required className='SignInFormInput' placeholder='Enter Your Email' />

            <label htmlFor="password">Password</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required className='SignInFormInput SignInPassword' placeholder='Enter Your Password' />

            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input type='password' id='ConfirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className='SignInFormInput SignInPassword' placeholder='Confirm Your Password' />

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <button type="submit" className='SignInButton'>Sign Up</button>
        </form>
    );
}

export default SignupForm;

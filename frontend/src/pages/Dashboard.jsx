import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user info from storage
        navigate('/'); // Redirect to home (login)
    };

    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;

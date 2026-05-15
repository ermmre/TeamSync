import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate('/app');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='login-form'>
                <h1>Login to TeamSync AI</h1>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default Login;


import './style.css';

export default function Navbar() {
    return <nav className="Navbar">
        <a href="/" className="site-title">ShikeScribe</a>
        <ul className='navlinks'>
            
            <li className='list'>
                <a href="/home">Home</a>
            
            </li>
            <li className='list'>
                <a href="/myposts">MyPosts</a>
            </li>
            <li className='list'>
                <a href="/signup/login">Signup/Login</a>
            </li>
            
        </ul>
    </nav>
}
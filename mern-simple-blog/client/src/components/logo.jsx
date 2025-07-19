import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link
            to={'/'}
            className='font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 tracking-tight'
        >
            MERN Simple Blog
        </Link>
    );
}

export default Logo;

import { Link } from 'react-router-dom';
import Logo from './logo';

function Navbar() {
    return (
        <header className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50'>
            <div className='max-w-7xl mx-auto flex items-center justify-between p-4'>
                <Logo />
                <nav>
                    <Link
                        to={'/create'}
                        className='px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300'
                    >
                        Create Article
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;

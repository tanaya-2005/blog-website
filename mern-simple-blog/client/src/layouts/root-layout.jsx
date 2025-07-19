import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function RootLayout() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col'>
            <div className='max-w-[1280px] mx-auto flex-grow'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default RootLayout;

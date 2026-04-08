import { Outlet } from 'react-router';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
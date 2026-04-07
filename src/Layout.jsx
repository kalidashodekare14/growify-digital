import { Outlet } from 'react-router';
import Navbar from './components/layout/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                 <Outlet />
            </main>
        </div>
    );
};

export default Layout;
import { FaChevronRight } from 'react-icons/fa';
import './SectionHeader.css';

const SectionHeader = ({ title }) => {
    return (
        <div className='banner bg-cover bg-center bg-no-repeat h-100 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-white text-5xl font-bold'>{title}</h1>
                <div className='flex items-center gap-2 text-[#dad9d9d5]'>
                    <p>Home</p>
                    <FaChevronRight />
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;
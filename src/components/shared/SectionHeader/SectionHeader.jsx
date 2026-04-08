import { FaChevronRight } from 'react-icons/fa';

const SectionHeader = ({ title }) => {
    return (
        <div
            style={{ backgroundImage: "url('/img.png')" }}
            className='h-[400px] flex justify-center items-center bg-cover bg-center'>
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
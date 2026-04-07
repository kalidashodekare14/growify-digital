import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ name, isIcon = false }) => {
    return (
        <div>
            <button className="btn bg-vivid text-white px-6 py-6 rounded-full flex items-center gap-3">
                <span>{name}</span>
                {isIcon && <FaArrowRightLong />}
            </button>
        </div>
    );
};

export default Button;
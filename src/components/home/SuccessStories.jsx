import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import testimonialData from '../../data/testimonials.json';
import SectionHeadLine from '../shared/SectionHeadLine';


const SuccessStories = () => {
    return (
        <div className="2xl:w-350 xl:w-310 lg:w-260 w-full m-auto px-5 lg:px-0 py-10">
            <SectionHeadLine title={"Success Stories"} description={"Real results from real clients."} />
            {/* Slide to review data */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {testimonialData.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className=" border border-[#e7e7e7bb] shadow p-5 rounded-2xl space-y-4 mt-10">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-20 h-20 rounded-full"
                                    src={review.image}
                                    alt="image"
                                />
                                <div>
                                    <h1 className="text-xl font-bold">{review.name}</h1>
                                    <p className="text-charcoal">{review.role}</p>
                                </div>
                            </div>
                            <Rating style={{ maxWidth: 140 }} value={3} readOnly />
                            <p className=" text-charcoal leading-8">
                                {review.review.slice(0, 400)}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SuccessStories;
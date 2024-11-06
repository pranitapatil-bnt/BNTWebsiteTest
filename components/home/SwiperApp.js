import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay
} from "swiper/core";
import ReviewCard from './ReviewCard'



SwiperCore.use([EffectCoverflow, Pagination, Navigation,Autoplay]);

const comments = [
    'Currencies Direct and BNT have been working together for over 10 years now. Our experience has been excellent. We have achieved a lot together in terms of technical capabilities, professionalism, domain knowledge',
    'Working along since 2011, Click a Waiter has been working with BNT Soft. The team at BNT is excellent in pressure-handling, with abundant knowledge and professional ethics.',
    'We worked with BNT from March 2015 to Feb 2016. BNT has provided an efficient service, maintaining quality and excellent technical skills in the payment space. They are extremely responsive and flexible in meeting our requirements.'
]

export default function SwiperApp() {
    return (
        <>
            <div className="myContainer">
                <Swiper
                style={{
                      "--swiper-navigation-size": "30px",  //font-size: var(--swiper-navigation-size);
                    }}
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                    loop={true}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    pagination={{
                        clickable: true
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        {/* <img className="imgNew" src="images/1.jpg" /> */}
                        <ReviewCard className="reviewCard" imgUrl={'LeoMarkides.png'} name={'Leo Markides'} desg={'CIO - Currencies Direct'} comment={comments[0]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <img className="imgNew" src="images/2.jpg" /> */}
                        <ReviewCard className="reviewCard" imgUrl={'2'} name={'Osvaldo Rodriguess'} desg={'CEO - Click a Waiter Inc.'} comment={comments[1]} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard className="reviewCard" imgUrl={'DaveRitten.png'} name={'Dave Ritten'} desg={'CEO - Invenco'} comment={comments[2]} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
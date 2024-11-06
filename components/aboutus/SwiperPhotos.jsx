
import react, { useEffect } from 'react'
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

import SwipCardPhoto from './SwipCardPhoto'

import { imageDetails } from './swiperImagesJson'



SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const photosDetail = [
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '',
]

export default function SwiperPhotos({swiperImagesDetails}) {

    // const getImages = async()=>{

    // }

    // useEffect(()=>{
    //     getImages()
    // },[])


    return (
        <>
            <div style={{
                height: '150px!important',
                width: '100%',
                backgroundColor: '#fff',
                display: 'block',
                marginTop: '20px'
            }}>
                <Swiper
                    effect={'coverflow'}
                    style={{
                        "--swiper-navigation-size": "30px",  //font-size: var(--swiper-navigation-size);
                        width: '95%!important',
                        height: '200px!important'
                    }}
                    centeredSlides={true}
                    navigation={true}
                    // centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{
                        clickable: true
                    }}
                    className="mySwiper"
                >

                    {
                        swiperImagesDetails.map((image, i) => 
                        <>
                            <SwiperSlide>
                                <SwipCardPhoto imageName={image} />
                            </SwiperSlide>
                        </>)



                    }

                </Swiper>
            </div>
        </>
    );
}
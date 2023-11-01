import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><div className="swiper__background" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/img/slide/slide-1.jpg"})`}}></div></SwiperSlide>
        <SwiperSlide><div className="swiper__background" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/img/slide/slide-2.jpg"})`}}></div></SwiperSlide>
        <SwiperSlide><div className="swiper__background" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/img/slide/slide-3.jpg"})`}}></div></SwiperSlide>
        <SwiperSlide><div className="swiper__background" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/img/slide/slide-4.jpg"})`}}></div></SwiperSlide>
      </Swiper>
    );
  };
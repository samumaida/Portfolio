// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './slider.module.scss' ;

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.SwiperSlide}>
          <img src="/images/markup0.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img src="/images/markup2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img src="images/markup3.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide} >
          <img src="images/markup4.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img src="/images/GreenFuture.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

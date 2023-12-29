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
        <a href="https://angular-first-app-xw7p.vercel.app/currency-converter"><img src="/images/markup0.png" /></a>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
        <a href="https://angular-first-app-xw7p.vercel.app/iphone-calculator"><img src="/images/markup2.png" /></a>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
        <a href="https://angular-first-app-xw7p.vercel.app/sasso-carta-forbice"><img src="images/markup3.png" /></a>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide} >
        <a href="https://www.ilprodottochecerchi.it/"><img src="images/markup4.png" /></a>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
        <a href="https://green-future-three.vercel.app/"><img src="/images/GreenFuture.png" /></a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

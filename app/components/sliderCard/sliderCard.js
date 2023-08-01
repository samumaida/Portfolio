// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import styles from './sliderCard.module.scss';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.mySwiperCard}><span className={styles.titleCard}>Angular App Repo</span>
        <a href="https://github.com/samumaida/AngularFirstApp"><img className={styles.imgSlide} src="/images/Screenshot__36_-removebg-preview.png"></img></a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperCard}><span className={styles.titleCard}>Calcolatrice Iphone</span>
        <a href="https://angular-first-app-xw7p.vercel.app/iphone-calculator"><img className={styles.imgSlide} src="/images/Screenshot__37_-removebg-preview.png"></img></a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperCard}><span className={styles.titleCard}>Convertitore Euro</span>
        <a href="https://angular-first-app-xw7p.vercel.app/currency-converter"><img className={styles.imgSlide} src="/images/Screenshot__38_-removebg-preview.png"></img></a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperCard}><span className={styles.titleCard}>Sasso-Carta-Forbice</span>
        <a href="https://angular-first-app-xw7p.vercel.app/sasso-carta-forbice"><img className={styles.imgSlide} src="/images/Screenshot__39_-removebg-preview.png"></img></a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperCard}><span className={styles.titleCard}>Il Prodotto che Cerchi</span>
        <a href="https://www.ilprodottochecerchi.it/"><img className={styles.imgSlide} src="/images/Screenshot__41_-removebg-preview.png"></img></a>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperCard}>
        <img className={styles.imgSlide} src="/images/Screenshot__28_-removebg-preview.png"></img>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperCard}>
        <img className={styles.imgSlide} src="/images/Screenshot__28_-removebg-preview.png"></img>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperCard}>
        <img className={styles.imgSlide} src="/images/Screenshot__28_-removebg-preview.png"></img>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperCard}>
        <img className={styles.imgSlide} src="/images/Screenshot__28_-removebg-preview.png"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

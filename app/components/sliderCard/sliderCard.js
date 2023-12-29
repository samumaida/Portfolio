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
        <a href="https://angular-first-app-xw7p.vercel.app/"><img className={styles.imgSlide} src="/images/Screenshot__36_-removebg-preview.png"></img></a><span><a href="https://github.com/samumaida/AngularFirstApp">Link Repository</a></span>
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
        <a href="https://www.ilprodottochecerchi.it/"><img className={styles.imgSlide} src="/images/Screenshot__41_-removebg-preview.png"></img></a><span><a href="https://github.com/FabioFarinella96/IlProdottoCheCerchi">Link Repository</a></span>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiperCard}><span className={styles.titleCard}>Green Future</span>
        <a href="https://green-future-three.vercel.app/"><img className={styles.imgSlide} src="/images/GreenFuture.png"></img></a><span><a href="https://github.com/samumaida/GreenFuture">Link Repository</a></span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

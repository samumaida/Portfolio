"use client";
import styles from "./works.module.scss";
import Image from "next/image";
import Link from "next/link";

import Footer from "../components/footer";
import Header from "../components/header";
import App from "../components/slider/slider";
import Slider from "../components/slider";
import Transition from "../components/transitions";
import SliderCard from "../components/sliderCard";

export default function Works() {
  return (
    <>
      <div className={styles.containerWorks}>
        <Transition />
        <Image
          className={styles.imgBg}
          src="/images/BlueGradientPortfolioCoverDocument.png"
          alt="Blue Gradient Portfolio Cover Document"
          width={100}
          height={100}
        />
        <Header />
        <h1 className={styles.title}>I miei progetti</h1>
        <p className={styles.pTitle}>Di seguito gli ultimi progetti da me realizzati con Angular e Next.js</p>
        <div className={styles.containerSlider}>
          <Slider />
        </div>
        <div className={styles.containerSliderCard}>
          <SliderCard />
        </div>
        <Image
          className={styles.imageLeft}
          width={350}
          height={350}
          src="/images/leftscroll2.png"
        ></Image>
        <Footer />
      </div>
    </>
  );
}

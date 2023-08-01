"use client";
import styles from "./works.module.scss";
import Image from "next/image";
import Link from "next/link";

import Footer from "../components/footer";
import Header from "../components/header";
import App from "../components/slider/slider";
import Slider from '../components/slider';
import Transition from "../components/transitions";
import SliderCard from "../components/sliderCard";

export default function Works() {
    return (
<>
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
<div className={styles.containerSlider}>
<Slider />
</div>
<div className={styles.containerSliderCard}>
    <SliderCard />
  </div>
<Footer />
</>
    )
}

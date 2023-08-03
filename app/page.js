"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

//components
import Footer from "./components/footer";
import Header from "./components/header";

//framer motion
import { AnimatePresence } from "framer-motion";
import Transition from "./components/transitions";



export default function Home() {
  return (
    <AnimatePresence mode="wait">
    <main className={styles.main}>
      <Transition />
      <div className={styles.containerMain}>
        <Image
          className={styles.imgBg}
          src="/images/BlueGradientPortfolioCoverDocument.png"
          alt="Blue Gradient Portfolio Cover Document"
          width={100}
          height={100}
        />
        <Header />
        <div className={styles.containerh1}>
          <h1 className={styles.h1Home}>
            Sviluppando <strong>soluzioni</strong> per un <strong>mondo</strong>{" "}
            più <strong>tecnologico</strong>
          </h1>
          <p className={styles.pHome}>
            "La tecnologia è come un pennello per l'artista. Ciò che conta è
            come usiamo questo strumento per dipingere il nostro futuro."{" "}
            <br></br> - Satya Nadella, CEO di Microsoft.
          </p>
          {/* <img className={styles.gif1} src="https://video-public.canva.com/VAFKHBrA9Gs/v/07eb5016af.gif"></img> */}
          <div>
          <a className={styles.ancorGif} href="https://chat.openai.com/">
            <img
              className={styles.gif2}
              src="https://video-public.canva.com/VAFKHLlSM90/v/8be168ef08.gif"
            ></img>
          </a>
          </div>
          {/* <img className={styles.gif3} src="https://video-public.canva.com/VAFKHMYsmyM/v/1b0d7efe92.gif"></img>
  <img className={styles.gif4} src="https://video-public.canva.com/VAFKHEvf6I0/v/094501087b.gif"></img>
  <img className={styles.gif5} src="https://video-public.canva.com/VAFKHLeOx28/v/45cb848511.gif"></img> */}
        </div>
        {/* <div className={styles.containerFooter}>
    <Link className={styles.linkFooter} href="#"><AiFillHome /></Link>
    <Link className={styles.linkFooter} href="./about"><FaUserTie /></Link>
    <Link className={styles.linkFooter} href="#"><MdWindow /></Link>
    <a href="/assets/CurriculumVitaeSamueleMaida.pdf" download>
        <img
          className={styles.iconCv}
          src="/assets/cv.png"
          alt="iconCV"
          width={30}
          height={30}
        />
      </a>
  </div> */}
  <div className={styles.divImage}>
        <img
          className={styles.myPhoto}
          src="/images/ImmaginePortfolio1BgScale2x.png"
          alt="My photo"
          width={300}
          height={300}
        ></img>
        </div>
        <Footer />
      </div>
    </main>
    </AnimatePresence>
  );
}

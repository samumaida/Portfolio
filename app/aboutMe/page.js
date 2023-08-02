"use client";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
import Transition from "../components/transitions";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { DiAngularSimple } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoSass } from "react-icons/bi";
import { SiAdobephotoshop } from "react-icons/si";
import { RiBootstrapFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiAdobepremierepro } from "react-icons/si";
import { DiW3C } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiStackoverflow } from "react-icons/di";

//components
import Footer from "../components/footer";
import Header from "../components/header";

export default function AboutMe() {
  return (
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
          <div className={styles.textAbout}>
            <h2>QUALCOSA SU DI ME</h2>
            <br></br>
            <p>
              Ciao a tutti e benvenuti nel mio portoflio, se stai leggendo
              questo testo probabilmente sarai interessato di conoscere qualcosa
              in più su di me e capire che tipo di persona sono. Per aiutarti,
              riassumerò brevemente i punti principali che mi hanno portato alla
              creazione di questo portfolio e quali sono i miei obiettivi
              futuri. Classe 1994, nato a Erba (CO), cresciuto a Bregnano (CO).
              Fin da piccolo ho avuto modo di approcciare con il computer
              attraverso lo scaricamento o la masterizzazione di giochi,
              nell'età adolescenziale però spinto da un'altra mia passione, che
              è quella per i motori, decido di frequentare le scuole superiori
              come autoriparatore. Successivamente, le scarse opportunità
              lavorative e la mancanza di un diploma effettivo, avendo
              frequentato un cfp di 3 anni, mi spingono ad incrementare le mie
              conoscenze e decido quindi di frequentare la scuola serale come
              perito meccanico. Prima ancora di finire gli studi riesco a
              trovare un lavoro concernente il mio ambito a due passi da casa ed
              instauro con i colleghi e con il capo un ottimo rapporto! Ok, 
              sono arrivato! avrebbero detto la maggior parte dei miei cotanei,
              ma non mi sentivo affatto arrivato, anzi, sentivo che quella strada che avevo
              intrapreso mi teneva come chiuso in gabbia, limitato nelle
              conoscenze e nelle esperienze. Dopo 6 anni, nei quali ho cercato
              di trovare un'ispirazione riguardo ai miei progetti, mi imbatto in
              un corso come sviluppatore web, ho sentito subito una grande
              carica! poter interagire e lavorare con persone di tutto il mondo
              sperimentando realtà sempre differenti ed innovative mi hanno
              convinto ad iniziare questo percorso e a lasciare il posto fisso
              che tanto mi invidiavano. Oggi sto iniziando il mio percorso universitario
              in informatica per le aziende digitali e anche se la mia conoscenza pratica è
              ancora agli albori, sono sicuro e determinato a crescere in questo
              settore che negli ultimi anni ha stravolto la vita di tutti noi e certo
              continuerà a farlo!
            </p>
            Grazie per aver dedicato del tempo a conoscere la mia storia!
          </div>
          <div className={styles.containerSkills}>
            <div className={styles.skills}>
              <section className={styles.sectionSkills1}>
                Web Development
                <section>
                  <Link className={styles.iconsDev} href="">
                    <FaHtml5 />
                  </Link>
                  <Link className={styles.iconsDev} href="">
                    <FaCss3Alt />
                  </Link>
                  <Link className={styles.iconsDev} href="">
                    <IoLogoJavascript />
                  </Link>
                  <Link className={styles.iconsDev} href="">
                    <RiReactjsLine />
                  </Link>
                  <Link className={styles.iconsDev} href="">
                    <DiAngularSimple />
                  </Link>
                  <Link className={styles.iconsDev} href="">
                    <BiLogoTypescript />
                  </Link>
                  <Link className={styles.iconsDev} href="">
                    <BiLogoSass />
                  </Link>
                </section>
              </section>
              <section className={styles.section2}>
                <section className={styles.sectionSkills2}>
                  UI/UX Design
                  <section>
                    <Link className={styles.iconsDev} href="">
                      <SiAdobephotoshop />
                    </Link>
                    <Link className={styles.iconsDev} href="">
                      <RiBootstrapFill />
                    </Link>
                    <Link className={styles.iconsDev} href="">
                      <TbBrandFramerMotion />
                    </Link>
                  </section>
                </section>
                <section className={styles.sectionSkills3}>
                  Other
                  <section>
                    <Link className={styles.iconsDev} href="">
                      <SiAdobepremierepro />
                    </Link>
                    <Link className={styles.iconsDev} href="">
                      <DiW3C />
                    </Link>
                    <Link className={styles.iconsDev} href="">
                      <DiStackoverflow />
                    </Link>
                    <Link className={styles.iconsDev} href="">
                      <DiWordpress />
                    </Link>
                    <Link className={styles.iconsDev} href="">
                      <DiVisualstudio />
                    </Link>
                  </section>
                </section>
              </section>
            </div>
          </div>
          <img
            className={styles.gif1}
            src="https://video-public.canva.com/VAFKHBrA9Gs/v/07eb5016af.gif"
          ></img>

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

        <Footer />
      </div>
    </main>
  );
}

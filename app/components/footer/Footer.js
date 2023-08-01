import styles from "./index.module.scss"
import Link from "next/link"
import { AiFillHome } from "react-icons/ai"
import { FaUserTie } from "react-icons/fa"
import { MdWindow } from "react-icons/md"

import { usePathname } from "next/navigation";

// import { useEffect } from "react";

export const  footerData = [
  { name: "home", path: "/", icon: <AiFillHome /> },
  { name: "about", path: "/aboutMe", icon: <FaUserTie /> },
  { name: "works", path: "/works", icon: <MdWindow />},
]

export default function Footer(){
  const pathName = usePathname();
  return (
<div className={styles.containerFooter}>
   { footerData.map((data, index) => {
    return(
      <Link className={`${data.path === pathName ? styles.selectedLink : styles.colorLink }`} key={index} href={data.path}>{data.icon}</Link>
    )
   })
   }
    <a href="/assets/CurriculumVitaeSamueleMaida.pdf" download>
        <img
          className={styles.iconCv}
          src="/assets/cv.png"
          alt="iconCV"
          width={30}
          height={30}
        />
      </a>
  </div>
  )
}

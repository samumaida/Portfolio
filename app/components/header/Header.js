import styles from "./index.module.scss";
import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.name}>
        <p className={styles.pName}>
          <strong>Samuele</strong> Maida{" "}
          <span className={styles.colorDot}>.</span>
        </p>
      </div>
      <div className={styles.containerNav}>
        <Link className={styles.linkSocial} href="https://www.youtube.com/channel/UCJKM4yr0RzZqEtU6cuae7ag">
          <AiFillYoutube />
        </Link>
        <Link className={styles.linkSocial} href="https://www.facebook.com/samuele.maida">
          <AiFillFacebook />
        </Link>
        <Link className={styles.linkSocial} href="https://www.instagram.com/samuelemaida/">
          <AiFillInstagram />
        </Link>
        <Link className={styles.linkSocial} href="https://www.linkedin.com/in/samuele-maida-b7bb89b4/">
          <AiFillLinkedin />
        </Link>
        <Link className={styles.linkSocial} href="https://github.com/samumaida">
          <AiFillGithub />
        </Link>
      </div>
      </div>
  );
}

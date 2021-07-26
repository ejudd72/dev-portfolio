import styles from "./navBar.module.scss";
import Link from 'next/link'

export default () => (
    <nav className={styles.navBar}><Link href="#home">
    <a>
     Home
    </a>
  </Link>
  <Link href="#bio">
    <a>
     Bio
    </a>
  </Link>
  <Link href="#projects">
    <a>
     Projects
    </a>
  </Link>
  <Link href="#contact">
    <a>
     Contact
    </a>
  </Link>
  </nav>
)

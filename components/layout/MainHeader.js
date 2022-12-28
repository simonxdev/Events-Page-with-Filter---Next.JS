import Link from "next/link";
import styles from "./MainHeader.module.css";
import MonthYearForm from "../form/filter";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <div>
        <MonthYearForm />
      </div>
      <nav className={styles.navigation}>
        <ul>
            <li>
                <Link href='/events'>Browse all Events</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader

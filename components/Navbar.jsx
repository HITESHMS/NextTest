import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <p>Next.js</p>
                <ul className={styles.links}>
                    <Link href='/'>
                    <li>Home 🏠 </li>
                    </Link>
                    <Link href='/about'>
                    <li>About 🐶 </li>
                    </Link>
                    <Link href='/contact'>
                    <li>Contact ☎️ </li>
                    </Link>
                    <Link href='/login' replace>
                    <li>Login ✔</li>
                    </Link>
                    <Link href='/registor'>
                    <li>registor 🙌</li>
                    </Link>
                    <Link href= '/product'>
                        <li>product 🐱‍👤</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
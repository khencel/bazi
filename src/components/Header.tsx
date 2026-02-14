// import styles from "../page.module.css";
import styles from "../app/page.module.css";

export default function Header(){
    return (
        <>
            <header>
                <div className="container">
                    <div className={styles.nav}>
                        <a className={styles.brand} href="#">
                    
                        <div className={styles.logo} aria-hidden="true">
                            <img src="/logo.png" className="img-fluid" alt="" />
                        </div>
                        <div>
                            <h1>BaZi Life Analysis</h1>
                            <span>by Jennel Cheng</span>
                        </div>
                        </a>

                        <nav className={styles.navlinks} aria-label="Primary">
                        <a href="#services">Home</a>
                        <a href="#how">About Us</a>
                        <a href="#pricing">Data Privacy</a>
                        <a href="#faq">Copyright Notice</a>
                        </nav>

                        <div className={styles.navcta}>
                        <a className="btn" href="#pricing">Sign In</a>
                        <a className="btn primary" href="#book">Sign Up</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
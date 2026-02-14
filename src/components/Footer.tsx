import styles from "../app/page.module.css";

export default function Footer(){
    return (
        <>
            <footer>
                <div className="container">
                <div className={styles["foot"]}>
                    <div>© <span id="y"></span> BaZi Life Analysis — Jennel Cheng</div>
                    <div style={{display:"flex", gap:".7rem"}}>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}
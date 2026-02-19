
"use client";
import { useRouter } from "next/navigation";

export default function Header(){
    const router = useRouter();
    return (
        <>
            <header>
                <div className="container">
                    <div className="nav">
                        <a className="brand" href="#">
                    
                        <div className="logo" aria-hidden="true">
                            <img src="/logo.png" className="img-fluid" alt="" />
                        </div>
                        <div>
                            <h1>BaZi Life Analysis</h1>
                            <span>by Jennel Cheng</span>
                        </div>
                        </a>

                        <nav className="navlinks" aria-label="Primary">
                        <a href="#services" onClick={() => router.push("/")}>Home</a>
                        <a href="#how">About Us</a>
                        <a href="#pricing">Data Privacy</a>
                        <a href="#faq">Copyright Notice</a>
                        </nav>

                        <div className="navcta">
                        <button className="btn"  onClick={() => router.push("/login")}>Sign In</button>
                        <button className="btn primary"  onClick={() => router.push("/register")}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
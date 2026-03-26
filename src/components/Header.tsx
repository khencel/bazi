"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const goTo = (path: string) => {
        router.push(path);
        setMenuOpen(false);
    };

    return (
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

                    <button
                        className="menu-toggle"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`nav-right ${menuOpen ? "open" : ""}`}>
                        <nav className="navlinks" aria-label="Primary">
                            <a href="#" onClick={() => goTo("/")}>Home</a>
                            <a href="#how" onClick={() => setMenuOpen(false)}>About Us</a>
                            <a href="#pricing" onClick={() => setMenuOpen(false)}>Data Privacy</a>
                            <a href="#faq" onClick={() => setMenuOpen(false)}>Copyright Notice</a>
                        </nav>

                        <div className="navcta">
                            <button className="btn" onClick={() => goTo("/login")}>
                                Sign In
                            </button>
                            <button className="btn primary" onClick={() => goTo("/register")}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
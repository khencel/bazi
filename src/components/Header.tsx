"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { alertPopup } from "./Toaster";

export default function Header() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const token = Cookies.get("access"); // palitan mo kung iba name ng cookie mo
        setHasToken(!!token);
    }, []);

    const goTo = (path: string) => {
        router.push(path);
        setMenuOpen(false);
    };

    const handleLogout = () => {
        alertPopup({
            title: "Logout?",
            text: "You will be logged out!",
            confirmText: "Yes, logout",
            onConfirm: async () => {
                
            }
        });
    }

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
                        {
                            !hasToken && (
                                <>
                                    <a href="#" onClick={() => goTo("/")}>Home</a>
                                    <a href="#how" onClick={() => setMenuOpen(false)}>About Us</a>
                                    <a href="#pricing" onClick={() => setMenuOpen(false)}>Data Privacy</a>
                                    <a href="#faq" onClick={() => setMenuOpen(false)}>Copyright Notice</a>
                                </>
                            )
                        }
                        
                        <div className="navcta">
                            {hasToken ? (
                                <>
                                    <a href="#" onClick={() => goTo("/")}>Khenneth Alaiza</a>
                                    <button
                                        className="btn primary"
                                        onClick={handleLogout}
                                    >
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="btn" onClick={() => goTo("/login")}>
                                        Sign In
                                    </button>
                                    <button className="btn primary" onClick={() => goTo("/register")}>
                                        Sign Up
                                    </button>
                                </>
                            )}
                        </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
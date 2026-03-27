"use client"

import { useState } from "react";
import s from "../../../public/css/login.module.css";
import { LoginPayload } from "@/redux/types/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/slices/auth/authThunk";
import { useRouter } from "next/navigation";
import {showToast} from "@/components/Toaster";
import Cookies from "js-cookie";


export default function LoginPage() {
    const dispatch = useDispatch<any>()
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false)

    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        const payload: LoginPayload = {
            email: email.trim(),
            password: password,
            remember_me: rememberMe
        }
        
        try{
            const res = await dispatch(loginUser(payload)).unwrap();

            Cookies.set("access", res.access, {
                expires: 7,
                path: "/",
                sameSite: "Strict",
                secure: process.env.NODE_ENV === "production",
            });

            Cookies.set("user", JSON.stringify(res.user), {
                expires: 7,
                path: "/",
                sameSite: "Strict",
                secure: process.env.NODE_ENV === "production",
            })
            
            setLoading(false)
            router.push("/home")
        } catch (err: any) {
            setLoading(false)
            showToast("Login","Invalid your credential","error")
        }
    }

    return (
        <div className={s.loginroot}>
            <div className={s.loginMain}>
                    <div className={s.grid}>
                    <section className={s.panel + " " + s.left}>
                        <div className={s.pill}>🔥 Secure Client Portal</div>
                        <h2>Access your <span className={s.grad_text}>BaZi Reports</span> and session notes.</h2>
                        <p>
                        Login to view your saved readings, recommendations, and follow-up guidance — anytime, anywhere.
                        </p>

                        <div className={s.feature}>
                        <div className={s.item}>
                            <div className={s.dot}></div>
                            <div>
                            <b>Private & Confidential</b>
                            <small>Your information stays protected. (Add your privacy note here.)</small>
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.dot}></div>
                            <div>
                            <b>Saved Summaries</b>
                            <small>Keep your key points and action steps organized.</small>
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.dot}></div>
                            <div>
                            <b>Easy Follow-up</b>
                            <small>Message for follow-up questions based on your plan/package.</small>
                            </div>
                        </div>
                        </div>
                    </section>

                    <form onSubmit={handleSubmit}>
                        <section className={s.panel + " " + s.right}>
                            <div className={s.card}>
                                <h3>Welcome back</h3>
                                <p>Login to continue. (This is UI-only — connect it to your backend later.)</p>

                            
                                <label className={s.labelLogin}>Email</label>
                                <input className={s.input} 
                                    id="email" name="email" 
                                    type="email" 
                                    placeholder="you@example.com" 
                                    required 
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
                                />

                                <label className={s.labelLogin}>Password</label>
                                <div className={s.pwWrap}>
                                <input className={s.input} 
                                    id="password" 
                                    name="password" 
                                    type={showPassword?"text": "password"}
                                    placeholder="••••••••"
                                    required 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                                <button className={s.toggle} type="button" onClick={togglePassword}>SHOW</button>
                                </div>

                                <div className={s.row}>
                                {/* <label className={s.labelLogin} style={{margin:0, fontWeight:700, display:'flex', alignItems:'center', gap:'.55rem'}}>
                                    <input type="checkbox" style={{accentColor:'#ffd58a'}} />
                                    Remember me
                                </label>
                                <a className={s.loginA} href="#">Forgot password?</a> */}
                                </div>

                                <div style={{marginTop:'1rem'}}>
                                    <button className={`${s.btn} ${s.primary}`} type="submit">
                                        {
                                            loading ? (
                                                "Submitting..."
                                            ):(
                                                "Login"
                                            )
                                        }
                                        
                                    </button>
                                </div>

                                <div className={s.hr}></div>


                                <p className={s.note} style={{marginTop:'1rem'}}>
                                    Don’t have an account? <a href="#" style={{color:'rgba(255,213,138,.92)', fontWeight:800}}>Create one</a>
                                </p>
                            
                            </div>

                        </section>
                    </form>
                </div>
            </div>
            
        </div>
    );
}
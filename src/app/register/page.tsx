import s from '../../../public/css/register.module.css';

export default function RegistrationPage() {
  return (
    <div className={s.registrationRoot}>
        <div className={s.regmain}>
            <div className={s.grid}>
            
            <section className={s.panel + " " + s.left}>
                <div className={s.pill}>✨ Create your account</div>
                <h2>Start your <span className={s.gradText}>BaZi Journey</span> today.</h2>
                <p>
                Register to access your reports, session notes, and future follow-ups — all in one place.
                </p>

                <div className={s.bullets}>
                <div className={s.bullet}>
                    <div className={s.check}>✓</div>
                    <div>
                    <b>Save your readings</b>
                    <small>Keep your insights organized and accessible anytime.</small>
                    </div>
                </div>
                <div className={s.bullet}>
                    <div className={s.check}>✓</div>
                    <div>
                    <b>Track recommendations</b>
                    <small>Remember favorable elements, timing, and action plans.</small>
                    </div>
                </div>
                <div className={s.bullet}>
                    <div className={s.check}>✓</div>
                    <div>
                    <b>Faster follow-ups</b>
                    <small>Easy to message for add-on consultations or updates.</small>
                    </div>
                </div>
                </div>
            </section>

        
            <section className={s.panel + " " + s.right}>
                <div className={s.card}>
                <h3>Create Account</h3>
                <p>UI-only demo — connect this form to your backend later.</p>

               
                    <div className={s.two}>
                    <div>
                        <label htmlFor="first" className={s.reglabel}>First name</label>
                        <input className={s.input} id="first" name="first" type="text" placeholder="Juan" required />
                    </div>
                    <div>
                        <label htmlFor="last" className={s.reglabel}>Last name</label>
                        <input className={s.input} id="last" name="last" type="text" placeholder="Dela Cruz" required />
                    </div>
                    </div>

                    <label htmlFor="email" className={s.reglabel}>Email</label>
                    <input className={s.input} id="email" name="email" type="email" placeholder="you@example.com" required />

                    <div className={s.two}>
                    <div>
                        <label htmlFor="password" className={s.reglabel}>Password</label>
                        <div className={s.pwWrap}>
                        <input className={s.input} id="password" name="password" type="password" placeholder="••••••••" required minLength={8} />
                        <button className={s.toggleLeft} type="button" >SHOW</button>
                        </div>
                        <div className={s.hint}>At least 8 characters recommended.</div>
                    </div>

                    <div>
                        <label htmlFor="confirm" className={s.reglabel}>Confirm</label>
                        <div className={s.pwWrap}>
                        <input className={s.input} id="confirm" name="confirm" type="password" placeholder="••••••••" required minLength={8} />
                        <button className={s.toggleRight} type="button" >SHOW</button>
                        </div>
                        <div className={s.hint}>Make sure it matches your password.</div>
                    </div>
                    </div>

                    <div className={s.row}>
                    <label style={{margin:0, fontWeight:800, display:'flex', alignItems:'center', gap:'.55rem'}}>
                        <input id="terms" type="checkbox" required style={{accentColor: '#ffd58a', marginTop: '.2rem'}} />
                        <span>
                        I agree to the <a href="#" >Terms</a> and
                        <a className={s.regA} href="#" >Privacy Policy</a>.
                        </span>
                    </label>
                    </div>

                    <div id="err" className={s.error}></div>

                    <div  style={{marginTop: '1rem'}}>
                    <button className={s.btn + " " + s.primary} type="submit">Create Account</button>
                    </div>

                    <div className={s.hr}></div>


                    <p className={s.hint} style={{marginTop: '1rem'}}>
                    Already have an account?
                    <a className={s.regA} href="./login.html" style={{color: 'rgba(255,213,138,.92)', fontWeight: 900}}>Login</a>
                    </p>
                
                </div>

            </section>
            </div>
        </div>
    </div>
  );
}
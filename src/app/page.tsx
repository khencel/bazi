import styles from "../app/page.module.css"


export default function Home() {
  return (
    <>
      <main className="container">
        <section className={styles.hero}>
          <div className={styles.herogrid}>
            <div>
              <div className={styles.pill}>🔥 BaZi • Four Pillars • Destiny Mapping</div>
              <h2>
                Discover your <span className={styles.gradtext}>Life Elements</span> and
                make clearer decisions.
              </h2>
              <p>
                Personalized BaZi analysis to help you understand your strengths, timing, career direction,
                relationships, and opportunities — explained in a practical way.
              </p>
              <div className={styles["hero-actions"]}>
                <a className="btn primary" href="#book">Start Consultation</a>
                <a className="btn" href="#services">See Services</a>
              </div>
              <p className={styles["mini"]} style={{marginTop:"1rem"}}>
                ✅ Private & confidential • ✅ Easy online booking • ✅ Clear action steps
              </p>
            </div>

            <div className={styles["hero-card"]} aria-label="Preview card">
              <div className={styles["mock"]}>
                {/* <img src="/logo.png" className="img-fluid" alt="" /> */}
                {/* <div className={styles["mock-top"]}>
                  <div className={styles["badge"]}>Featured Reading</div>
                  <div className={styles["mini"]}>Element + Timing + Guidance</div>
                </div> */}

                <div className={styles["preview"]}>
                  <div>
                    <img src="/logo.png" className="img-fluid" alt="" />
                    {/* <div className={styles["preview-title"]}>
                      <div className={styles["ring"]}></div>
                      <div>
                        <div style={{fontWeight:"900"}}>BaZi Life Report</div>
                        <div className={styles["mini"]}>Your personal overview</div>
                      </div>
                    </div> */}

                    {/* <div className={styles["preview-grid"]}>
                      <div className={styles["tile"]}>
                        <b>Elements</b>
                        <small>Balance, favorable elements</small>
                      </div>
                      <div className={styles["tile"]}>
                        <b>Luck Cycles</b>
                        <small>Timing & key opportunities</small>
                      </div>
                      <div className={styles["tile"]}>
                        <b>Career</b>
                        <small>Direction & strengths</small>
                      </div>
                      <div className={styles["tile"]}>
                        <b>Love</b>
                        <small>Compatibility insights</small>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* <div className={styles["mini"]}>Tip: Replace this preview with your real logo / graphics later.</div> */}
              </div>
            </div>

          </div>
        </section>

        {/* <!-- SERVICES --> */}
        <section id="services" className=" mt-5">
          <div>
            <div>
              <h3>Services</h3>
              <p>Choose what you need — from quick guidance to a full deep dive.</p>
            </div>
          </div>

          <div className={styles["cards"]}>
            <div className={styles["card"]}>
              <div className={styles["icon"]} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" stroke="currentColor" strokeWidth={"2"}/>
                </svg>
              </div>
              <h4>BaZi Fundamentals</h4>
              <p>Element chart reading, personality strengths, favorable elements, and do’s & don’ts.</p>
            </div>

            <div className={styles["card"]}>
              <div className={styles["icon"]} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth={"2"} />
                  <path d="M7 7l10 10" stroke="currentColor" strokeWidth={"2"} opacity=".75" />
                </svg>
              </div>
              <h4>Timing & Luck Cycles</h4>
              <p>Understand which years/months are strong for career moves, money, and relationships.</p>
            </div>

            <div className={styles["card"]}>
              <div className={styles["icon"]} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-4.4-9-9a5.5 5.5 0 0 1 9-6 5.5 5.5 0 0 1 9 6c-2 4.6-9 9-9 9z" stroke="currentColor"
                    strokeWidth={"2"} />
                </svg>
              </div>
              <h4>Compatibility</h4>
              <p>Relationship and partner dynamics, strengths, friction points, and practical advice.</p>
            </div>
          </div>
        </section>

        {/* <!-- HOW IT WORKS --> */}
        <section id="how">
          <div>
            <div>
              <h3>How it works</h3>
              <p>Simple process — mabilis at malinaw.</p>
            </div>
          </div>

          <div className={styles["cards"]}>
            <div className={styles["card"]}>
              <h4>1) Send Details</h4>
              <p>Provide birth date, time, and location (as accurate as possible).</p>
              <div className={styles["divider"]}></div>
              <p className={styles["mini"]}>Optional: your current concerns (career, love, money, etc.)</p>
            </div>

            <div className={styles["card"]}>
              <h4>2) Analysis Session</h4>
              <p>Online session + clear explanation of your chart and key themes.</p>
              <div className={styles["divider"]}></div>
              <p className={styles["mini"]}>You’ll get action-oriented notes, not just theory.</p>
            </div>

            <div className={styles["card"]}>
              <h4>3) Personalized Guidance</h4>
              <p>Timing recommendations and “next steps” based on your favorable elements.</p>
              <div className={styles["divider"]}></div>
              <p className={styles["mini"]}>Career, relationship, health, finances — depending on your goals.</p>
            </div>
          </div>
        </section>

        {/* <!-- PRICING --> */}
        {/* <section id="pricing">
          <div className="section-title">
            <div>
              <h3>Packages</h3>
              <p>Sample pricing layout lang ito — palitan mo na lang yung actual rates mo.</p>
            </div>
          </div>

          <div className="pricing">
            <div className="card price">
              <h4>Starter</h4>
              <div className="money">₱999</div>
              <p className="mini">Quick overview reading</p>
              <ul>
                <li>Element balance</li>
                <li>Strengths + challenges</li>
                <li>1 main focus topic</li>
              </ul>
              <div className="divider"></div>
              <a className="btn" href="#book" style={{width:"100%"}} >Choose Starter</a>
            </div>

            <div className="card price featured">
              <div className="tag">Most Popular</div>
              <h4>Full Reading</h4>
              <div className="money">₱2,499</div>
              <p className="mini">Deep dive session</p>
              <ul>
                <li>Elements + structure</li>
                <li>Luck cycles timing</li>
                <li>Career + love insights</li>
                <li>Action plan</li>
              </ul>
              <div className="divider"></div>
              <a className="btn primary" href="#book" style={{width:"100%"}} >Choose Full Reading</a>
            </div>

            <div className="card price">
              <h4>Premium</h4>
              <div className="money">₱4,999</div>
              <p className="mini">Consultation + follow-up</p>
              <ul>
                <li>Full reading + report</li>
                <li>2 follow-up questions</li>
                <li>Timing roadmap</li>
              </ul>
              <div className="divider"></div>
              <a className="btn" href="#book" style={{width:"100%"}}>Choose Premium</a>
            </div>
          </div>
        </section> */}

        {/* <!-- FAQ --> */}
        {/* <section id="faq">
          <div className="section-title">
            <div>
              <h3>FAQ</h3>
              <p>Common questions. Pwede pa natin dagdagan.</p>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <h4>Need ba exact birth time?</h4>
              <p>Mas accurate kapag exact, pero pwede pa rin mag reading kahit estimate (may limitations lang).</p>
            </div>
            <div className="card">
              <h4>Online lang ba?</h4>
              <p>Yes — convenient via Zoom/Meet. Pwedeng recorded notes depende sa preference mo.</p>
            </div>
            <div className="card">
              <h4>May refund ba?</h4>
              <p>Sample text: Deposits are non-refundable once schedule is confirmed. (Palitan mo based sa policy mo.)</p>
            </div>
          </div>
        </section> */}

        {/* <!-- CTA --> */}
        <section id="book">
          <div className={styles["cta"]}>
            <div>
              <h3>Ready to book your BaZi session?</h3>
              <p>Message us to schedule. You can replace these buttons with Facebook/Instagram/WhatsApp links.</p>
            </div>
            <div style={{display:"flex", gap:".7rem", flexWrap:"wrap"}}>
              <a className="btn primary" href="#">Message on Facebook</a>
              <a className="btn" href="#">Email</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

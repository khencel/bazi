"use client";
import { useState } from "react";
import s from '../../../public/css/register.module.css';
import { post_no_auth_api } from "@/redux/api_request";
import { useDispatch } from "react-redux";
import { registerUser } from "@/redux/slices/auth/authThunk";
import { alertPopup } from "@/components/Toaster";
import { useRouter, usePathname  } from "next/navigation";
import { showToast } from "@/components/Toaster";


export default function RegistrationPage() {
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
    birth_date: "1990-01-01",
    country: "Philippines",
  });

  const [showPassword, setShowPassword] = useState({ password: false, confirm: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const errors: string[] = [];

    if (!form.first_name.trim()) errors.push("First name is required.");
    if (!form.last_name.trim()) errors.push("Last name is required.");

    if (!form.email.trim()) errors.push("Email is required.");
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.push("Email format is invalid.");

    if (!form.password) errors.push("Password is required.");
    else if (form.password.length < 8) errors.push("Password must be at least 8 characters.");

    if (!form.password_confirmation) errors.push("Confirm password is required.");
    else if (form.password !== form.password_confirmation) errors.push("Passwords do not match.");

    if (!form.terms) errors.push("You must accept the Terms and Privacy Policy.");

    if (errors.length > 0) {
      showToast("Register", errors.join("\n"), "error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    alertPopup({
      title: "Register",
      text: "Are you sure, you want to register this email?",
      confirmText: "Yes, Sign Up",
      onConfirm: async () => {
        const res = await dispatch(registerUser(form));

        if (registerUser.fulfilled.match(res)) {
          showToast("Register", "Registration successful", "success");
          router.push("/login");
        } else {
          showToast("Register", "Registration failed. Please try again", "error");
        }
      },
    });
  };

  return (
    <div className={s.registrationRoot}>
      <div className={s.regmain}>
        <div className={s.grid}>
          <section className={`${s.panel} ${s.left}`}>
            <div className={s.pill}>✨ Create your account</div>
            <h2>
              Start your <span className={s.gradText}>BaZi Journey</span> today.
            </h2>
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

          <section className={`${s.panel} ${s.right}`}>
            <div className={s.card}>
              <h3>Create Account</h3>
              {/* <p>UI-only demo — connect this form to your backend later.</p> */}

              <form onSubmit={handleSubmit}>
                <div className={s.two}>
                  <div>
                    <label htmlFor="first_name" className={s.reglabel}>First name</label>
                    <input
                      className={s.input}
                      id="first_name"
                      name="first_name"
                      type="text"
                      placeholder="Juan"
                      value={form.first_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className={s.reglabel}>Last name</label>
                    <input
                      className={s.input}
                      id="last_name"
                      name="last_name"
                      type="text"
                      placeholder="Dela Cruz"
                      value={form.last_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <label htmlFor="email" className={s.reglabel}>Email</label>
                <input
                  className={s.input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />

                <div className={s.two}>
                  <div>
                    <label htmlFor="password" className={s.reglabel}>Password</label>
                    <div className={s.pwWrap}>
                      <input
                        className={s.input}
                        id="password"
                        name="password"
                        type={showPassword.password ? "text" : "password"}
                        placeholder="••••••••"
                        value={form.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className={s.toggleLeft}
                        onClick={() =>
                          setShowPassword({ ...showPassword, password: !showPassword.password })
                        }
                      >
                        {showPassword.password ? "HIDE" : "SHOW"}
                      </button>
                    </div>
                    <div className={s.hint}>At least 8 characters recommended.</div>
                  </div>

                  <div>
                    <label htmlFor="password_confirmation" className={s.reglabel}>Confirm</label>
                    <div className={s.pwWrap}>
                      <input
                        className={s.input}
                        id="password_confirmation"
                        name="password_confirmation"
                        type={showPassword.confirm ? "text" : "password"}
                        placeholder="••••••••"
                        value={form.password_confirmation}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className={s.toggleRight}
                        onClick={() =>
                          setShowPassword({ ...showPassword, confirm: !showPassword.confirm })
                        }
                      >
                        {showPassword.confirm ? "HIDE" : "SHOW"}
                      </button>
                    </div>
                    <div className={s.hint}>Make sure it matches your password.</div>
                  </div>
                </div>

                <div className={s.row}>
                  <label style={{ margin: 0, fontWeight: 800, display: "flex", alignItems: "center", gap: ".55rem" }}>
                    <input
                      id="terms"
                      type="checkbox"
                      name="terms"
                      checked={form.terms}
                      onChange={handleChange}
                      style={{ accentColor: "#ffd58a", marginTop: ".2rem" }}
                    />
                    <span>
                      I agree to the <a className={s.regA} href="#">Privacy Policy</a>.
                    </span>
                  </label>
                </div>

                <div style={{ marginTop: "1rem" }}>
                  <button className={`${s.btn} ${s.primary}`} type="submit">Create Account</button>
                </div>

                <div className={s.hr}></div>

                <p className={s.hint} style={{ marginTop: "1rem" }}>
                  Already have an account? <a className={s.regA} href="./login.html" style={{ color: "rgba(255,213,138,.92)", fontWeight: 900 }}>Login</a>
                </p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
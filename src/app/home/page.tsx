"use client"

import s from "../../../public/css/home.module.css"
import { useMemo, useState } from "react";

export default function HomePage(){
    const [name, setName] = useState("test");
    const [gender, setGender] = useState("male");
    const [dob, setDob] = useState("1992-10-03"); // yyyy-mm-dd
    const [tob, setTob] = useState(""); // HH:mm


    const canSubmit = useMemo(() => {
        return name.trim().length > 0 && dob.trim().length > 0;
    }, [name, dob]);

    const handlePlot = (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
        name,
        gender,
        dob,
        tob, // optional
        };

        console.log("Plot Destiny Chart payload:", payload);
        // TODO: call API / router push / set state
    };
    const baziCards = [
    {
        date: "July 7",
        code: "F",
        icon: "🔒",
        element: "Yi",
        ratio: "Yin Wood",
        category: "Life",
        year: "Wei",
        animal: "Goat",
        stats: [
        { icon: "🐯", value: "Goat" },
        { icon: "⚡", value: "Yin Wood" }
        ]
    },
    {
        date: "June 5",
        code: "Xin",
        icon: "🪙",
        element: "Yin Metal",
        ratio: "10 / 1",
        category: "Weaver",
        year: "Yin",
        animal: "Weaver",
        stats: [
        { icon: "🧵", value: "19 Weaver" }
        ]
    },
    {
        date: "May 5",
        code: "Ren",
        icon: "💧",
        element: "Yang Water",
        ratio: "10 / 1",
        category: "Dragon",
        year: "Yang",
        animal: "Dragon",
        stats: [
        { icon: "🐉", value: "11 Dragon" }
        ]
    },
    {
        date: "April 6",
        code: "Gui",
        icon: "💧",
        element: "Yin Water",
        ratio: "10 / 1",
        category: "Yin Water",
        year: "Yin",
        animal: "Water",
        stats: [
        { icon: "🌊", value: "11 Water" }
        ]
    },
    {
        date: "March 5",
        code: "Jia",
        icon: "🌳",
        element: "Yin Wood",
        ratio: "32 / 1",
        category: "Wood",
        year: "Yin",
        animal: "Wood",
        stats: [
        { icon: "🌲", value: "14 Wood" }
        ]
    },
    {
        date: "February 4",
        code: "HO",
        icon: "🔥",
        element: "Yang Fire",
        ratio: "10 / 1",
        category: "Metal",
        year: "Yang",
        animal: "Wood",
        stats: [
        { icon: "🔥", value: "11 Metal" }
        ]
    },
    {
        date: "January 5",
        code: "DO",
        icon: "🔒",
        element: "Yang Metal",
        ratio: "10 / 1",
        category: "Life",
        year: "Yin",
        animal: "Tiger",
        stats: [
        { icon: "🐯", value: "12 Tiger" },
        { icon: "⚡", value: "11 Metal" }
        ]
    },
    {
        date: "December 7",
        code: "Xin",
        icon: "🪙",
        element: "Yin Metal",
        ratio: "10 / 1",
        category: "Weaver",
        year: "Yin",
        animal: "Weaver",
        stats: [
        { icon: "🧵", value: "19 Weaver" }
        ]
    },
    {
        date: "November 7",
        code: "Ren",
        icon: "💧",
        element: "Yang Water",
        ratio: "10 / 1",
        category: "Dragon",
        year: "Yang",
        animal: "Dragon",
        stats: [
        { icon: "🐉", value: "11 Dragon" }
        ]
    },
    {
        date: "October 8",
        code: "Gui",
        icon: "💧",
        element: "Yin Water",
        ratio: "10 / 1",
        category: "Yin Water",
        year: "Yin",
        animal: "Water",
        stats: [
        { icon: "🌊", value: "11 Water" }
        ]
    },
    {
        date: "September 7",
        code: "Jia",
        icon: "🌳",
        element: "Yin Wood",
        ratio: "32 / 1",
        category: "Wood",
        year: "Yin",
        animal: "Wood",
        stats: [
        { icon: "🌲", value: "14 Wood" }
        ]
    },
    {
        date: "August 7",
        code: "HO",
        icon: "🔥",
        element: "Yang Fire",
        ratio: "10 / 1",
        category: "Metal",
        year: "Yang",
        animal: "Wood",
        stats: [
        { icon: "🔥", value: "11 Metal" }
        ]
    },
   
    ]

    return (
        <>
        <section>
            <div className={s["destiny-section"]}>
                <div className={s["destiny-card"]}>

                    <div className={s["destiny-grid"]}>
                    <div className={s["destiny-field"]}>
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>

                    <div className={s["destiny-field"]}>
                        <label>Gender</label>
                        <select>
                        <option>Male</option>
                        <option>Female</option>
                        </select>
                    </div>

                    <div className={s["destiny-field"]}>
                        <label>Date of Birth</label>
                        <input type="date" />
                    </div>

                    {/* <div className={s["destiny-field"]}>
                        <label>Time of Birth</label>
                        <input type="time" />
                    </div> */}
                    <button className="btn primary">
                        Plot Destiny Chart
                    </button>
                    </div>

                    

                    <span className={s["destiny-glow"]}></span>
                </div>
            </div>
        </section>
            

            <section className={s["lp-wrap"]}>
                <div className={s["lp-grid"]}>

                    {baziCards.map((card, index) => (
                        <article key={index} className={s["lp-card"]}>
                            <div className={s["lp-top"]}>
                            <div className={s["lp-date"]}>{card.date}</div>
                            <div className={s["lp-pill"]}>
                                <span className={s["lp-ico"]}>{card.icon}</span>
                                <span className={s["lp-code"]}>{card.code}</span>
                            </div>
                            </div>

                            <div className={s["lp-mid"]}>
                            <div className={s["lp-title"]}>{card.element}</div>
                            <div className={s["lp-sub"]}>
                                {card.ratio} 
                                {/* • {card.category} */}
                            </div>
                            </div>

                            <div className={s["lp-bottom"]}>
                            <div className={s["lp-row"]}>
                                <span className={s["dot"]}></span>
                                <span className={s["lp-small"]}>{card.year}</span>
                                <span className={`${s["lp-small"]} ${s["muted"]}`}>|</span>
                                <span className={s["lp-small"]}>{card.animal}</span>
                            </div>

                            <div className={s["lp-stats"]}>
                                {card.stats.map((stat, i) => (
                                <span key={i} className={s["lp-stat"]}>
                                    {stat.icon} {stat.value}
                                </span>
                                ))}
                            </div>
                            </div>

                            <span className={s["lp-glow"]}></span>
                        </article>
                        ))}
                </div>
            </section>
        </>
    )
}

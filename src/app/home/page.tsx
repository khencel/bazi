"use client"

import s from "../../../public/css/home.module.css"
import {useEffect, useState } from "react";
import GetGods from "@/utils/getGod";
import { fetchBazi, fetchMonthly } from "@/redux/slices/bazi/baziThunk";
import { useDispatch } from "react-redux";
import { ConvertMonthIntoText, AnimalSign } from "@/utils/convertData";

export default function HomePage(){
    const dispatch = useDispatch<any>();
    const [form, setForm] = useState({
        name: "",
        gender: "",
        dob: "",
        time: ""
    });
    const [dayMaster, setDayMaster] = useState<any>({})
    const [baziCardsFirst, setBaziCardsFirst] = useState<any[]>([])
    const [baziCardsSecond, setBaziCardsSecond] = useState<any[]>([])
    const [baziCardNext, setBaziCardNext] = useState<any[]>([])
    const [ natal_day, setNatalDay ] = useState<any[]>([])
    const [ natal_hour, setNatalHour] = useState<any[]>([])
    const [ natalMonth, setNatalMonth] = useState<any[]>([])
    const [ natalYear, setNatalYear] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const { name, value } = e.target;
        setForm(prev => ({
        ...prev,
        [name]: value
        }));
    }

    const isDisabled = !form.name || !form.gender || !form.dob;

    const handlePlot = async () => {
        try {
            setLoading(true);

            const arr_date = form.dob.split("-");
            const payload = {
                selectedDay: arr_date[2],
                selectedMonth: arr_date[1],
                selectedTime: form.time ? Number(form.time.split(":")[0]) : 0,
                selectedYear: arr_date[0],
            };

            const res: any = await dispatch(fetchBazi(payload));

            const hour = res.payload.natal_hour.split(" ");
            const day = res.payload.natal_day.split(" ");
            const month = res.payload.natal_month.split(" ");
            const year = res.payload.natal_year.split(" ");

            setDayMaster(res.payload);
            setNatalHour(hour);
            setNatalDay(day);
            setNatalMonth(month);
            setNatalYear(year);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        dispatch(fetchMonthly(2026)).then((res: any) => {
            setBaziCardsFirst(res.payload.first)
            setBaziCardsSecond(res.payload.second)
            setBaziCardNext(res.payload.nextYear)
        })
    },[dispatch,])
  

    return (
        <>
        <div className="row p-4">
            <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <section>
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]}>

                            <div className={s["destiny-grid"]}>
                                {/* Name */}
                                <div className={s["destiny-field"]}>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                </div>

                                {/* Gender */}
                                <div className={s["destiny-field"]}>
                                <label>Gender</label>
                                <select
                                    name="gender"
                                    value={form.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                </div>

                                {/* Date of Birth */}
                                <div className={s["destiny-field"]}>
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={form.dob}
                                    onChange={handleChange}
                                />
                                </div>

                                {/* Time */}
                                <div className={s["destiny-field"]}>
                                <label>Time of Birth</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={form.time}
                                    onChange={handleChange}
                                />
                                </div>

                                {/* Button */}
                                <button
                                    className={`${s["plot-btn"]} ${loading ? s["loading-btn"] : ""}`}
                                    disabled={isDisabled || loading}
                                    onClick={handlePlot}
                                >
                                    {loading ? (
                                        <span className={s["btn-loading"]}>
                                            <span className={s["spinner"]}></span>
                                            Plotting Destiny...
                                        </span>
                                    ) : (
                                        "Plot Bazi Chart"
                                    )}
                                </button>
                            </div>
                            <span className={s["destiny-glow"]}></span>
                        </div>
                    </div>
                </section>
            </div>
            <div className="col">
                <section>
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]}>
                            {loading ? (
                                <div className={s["result-loading"]}>
                                    <div className={s["mystic-loader"]}></div>
                                    <h4>Calculating your destiny chart...</h4>
                                    <p>Please wait while we align the heavenly stems and earthly branches.</p>
                                </div>
                            ) : (

                                <div className="row text-center justify-content-center">
                                    {
                                        form.time && (
                                            <div className="col-3">
                                                <div>
                                                    <div className={s["destiny-field"]}>
                                                        <label>Hour</label>
                                                        <div>
                                                            <img src={dayMaster?.hour_atrology?.animal?.image} className="img-fluid" alt="" />
                                                        </div>
                                                        
                                                        <div className={s["lp-title"]}>{natal_hour[0]} <sup>({natal_hour[1]} {natal_hour[2]})</sup></div>
                                                        <div className={s["lp-title"]}>{natal_hour[3]} <sup>({natal_hour[5]} {natal_hour[6]})</sup></div>
                                                        <div className={s["lp-pill"]}>
                                                            <span className={s["lp-code"]}>{natal_hour[4]}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    

                                    <div className="col-3">
                                        <div>
                                            <div className={s["destiny-field"]}>
                                                <label>Day</label>
                                                <div>
                                                    <img src={dayMaster?.day_atrology?.animal?.image} className="img-fluid" alt="" />
                                                </div>
                                                <div className={s["lp-title"]}>{natal_day[0]} <sup>({natal_day[1]} {natal_day[2]})</sup></div>
                                                <div className={s["lp-title"]}>{natal_day[3]} <sup>({natal_day[5]} {natal_day[6]})</sup></div>
                                                <div className={s["lp-pill"]}>
                                                    <span className={s["lp-code"]}>{natal_day[4]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div>
                                            <div className={s["destiny-field"]}>
                                                <label>Month</label>
                                                <div>
                                                    <img src={dayMaster?.month_atrology?.animal?.image} className="img-fluid" alt="" />
                                                </div>
                                                <div className={s["lp-title"]}>{natalMonth[0]} <sup>({natalMonth[1]} {natalMonth[2]})</sup></div>
                                                <div className={s["lp-title"]}>{natalMonth[3]} <sup>({natalMonth[5]} {natalMonth[6]})</sup></div>
                                                <div className={s["lp-pill"]}>
                                                    <span className={s["lp-code"]}>{natalMonth[4]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div>
                                            <div className={s["destiny-field"]}>
                                                <label>Year</label>
                                                <div>
                                                    <img src={dayMaster?.year_atrology?.animal?.image} className="img-fluid" alt="" />
                                                </div>
                                                <div className={s["lp-title"]}>{natalYear[0]} <sup>({natalYear[1]} {natalYear[2]})</sup></div>
                                                <div className={s["lp-title"]}>{natalYear[3]} <sup>({natalYear[5]} {natalYear[6]})</sup></div>
                                                <div className={s["lp-pill"]}>
                                                    <span className={s["lp-code"]}>{natalYear[4]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>   
                </section>
            </div>
            
        </div>
        
            <section className={s["lp-wrap"]}>
                <div className={s["lp-grid"]}>
                    
                    {baziCardsFirst.map((card, index) => (
                        <article key={index} className={s["lp-card"]}>
                            <div className={s["lp-top"]}>
                            <div className={s["lp-date"]}>{ConvertMonthIntoText(card.month)}</div>
                            <div className={s["lp-pill"]}>
                                <span className={s["lp-ico"]}>🔒</span>
                                <span className={s["lp-code"]}>{GetGods(natal_day[0],card.month_chart.stem.value)}</span>
                            </div>
                            </div>

                            <div className={s["lp-mid"]}>
                            <div className={s["lp-title"]}>{card.month_chart.stem.value}</div>
                            <div className={s["lp-sub"]}>
                                {/* {card.ratio}  */}
                                {card.month_chart.stem.name}
                            </div>
                            </div>

                            <div className={s["lp-bottom"]}>
                            <div className={s["lp-row"]}>
                                <span className={s["dot"]}></span>
                                <span className={s["lp-small"]}>{card.month_chart.branch.name}</span>
                                <span className={`${s["lp-small"]} ${s["muted"]}`}>|</span>
                                <span className={s["lp-small"]}>{card.month_chart.element.name}</span>
                            </div>

                            <div className={s["lp-stats"]}>
                                <span className={s["lp-stat"]}>
                                    {AnimalSign(card.month_chart.english.name)} {card.month_chart.english.name}
                                </span>
                            </div>
                            </div>

                            <span className={s["lp-glow"]}></span>
                        </article>
                    ))}

                    {baziCardNext.map((card, index) => (
                        <article key={index} className={s["lp-card"]}>
                            <div className={s["lp-top"]}>
                            <div className={s["lp-date"]}>{ConvertMonthIntoText(card.month)} 5 2027</div>
                            <div className={s["lp-pill"]}>
                                <span className={s["lp-ico"]}>🔒</span>
                                <span className={s["lp-code"]}>{GetGods(natal_day[0],card.month_chart.stem.value)}</span>
                            </div>
                            </div>

                            <div className={s["lp-mid"]}>
                            <div className={s["lp-title"]}>{card.month_chart.stem.value}</div>
                            <div className={s["lp-sub"]}>
                                {/* {card.ratio}  */}
                                {card.month_chart.stem.name}
                            </div>
                            </div>

                            <div className={s["lp-bottom"]}>
                            <div className={s["lp-row"]}>
                                <span className={s["dot"]}></span>
                                <span className={s["lp-small"]}>{card.month_chart.branch.name}</span>
                                <span className={`${s["lp-small"]} ${s["muted"]}`}>|</span>
                                <span className={s["lp-small"]}>{card.month_chart.element.name}</span>
                            </div>

                            <div className={s["lp-stats"]}>
                                <span className={s["lp-stat"]}>
                                    {AnimalSign(card.month_chart.english.name)} {card.month_chart.english.name}
                                </span>
                            </div>
                            </div>

                            <span className={s["lp-glow"]}></span>
                        </article>
                    ))}

                    {baziCardsSecond.map((card, index) => (
                        <article key={index} className={s["lp-card"]}>
                            <div className={s["lp-top"]}>
                            <div className={s["lp-date"]}>{ConvertMonthIntoText(card.month)}</div>
                            <div className={s["lp-pill"]}>
                                <span className={s["lp-ico"]}>🔒</span>
                                <span className={s["lp-code"]}>{GetGods(natal_day[0],card.month_chart.stem.value)}</span>
                            </div>
                            </div>

                            <div className={s["lp-mid"]}>
                            <div className={s["lp-title"]}>{card.month_chart.stem.value}</div>
                            <div className={s["lp-sub"]}>
                                {/* {card.ratio}  */}
                                {card.month_chart.stem.name}
                            </div>
                            </div>

                            <div className={s["lp-bottom"]}>
                            <div className={s["lp-row"]}>
                                <span className={s["dot"]}></span>
                                <span className={s["lp-small"]}>{card.month_chart.branch.name}</span>
                                <span className={`${s["lp-small"]} ${s["muted"]}`}>|</span>
                                <span className={s["lp-small"]}>{card.month_chart.element.name}</span>
                            </div>

                            <div className={s["lp-stats"]}>
                                <span className={s["lp-stat"]}>
                                    {AnimalSign(card.month_chart.english.name)} {card.month_chart.english.name}
                                </span>
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

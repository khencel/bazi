import s from "../../../public/css/home.module.css"
import { ConvertMonthIntoText, AnimalSign } from "@/utils/convertData";
import GetGods from "@/utils/getGod";

interface MonthlyProps {
    baziCardsFirst: any[];
    baziCardsSecond: any[];
    baziCardNext: any[];
    natal_day: any[];
}

export default function Monthly({baziCardsFirst, baziCardsSecond, baziCardNext, natal_day}: MonthlyProps){
    return (
        <>
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
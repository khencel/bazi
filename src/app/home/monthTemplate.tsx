import s from "../../../public/css/home.module.css"
import { ConvertMonthIntoText, AnimalSign } from "@/utils/convertData";
import GetGods from "@/utils/getGod";
import { convertInitailLetter } from "@/utils/convertData";

interface DailyProps {
    monthData: any[];   
    natal_day: any[];
    label: string;
    selectedGod: string;
}

const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default function MonthTemplate({monthData, natal_day,label, selectedGod}: DailyProps){
    return (
        <>
            <section className={s["lp-wrap"]} style={{padding:"0px"}}>
                <strong>{label}</strong>
                <div className={s["daily-scroll"]}>
                    <div className={s["lp-grid-daily"]}>
                    
                        {
                            day.map((d,index) => {
                                return(
                                    <div key={d + index} className={s["lp-small"]}>
                                        {d}
                                    </div>
                                )
                            })
                        }
                        
                        {monthData.map((card, index) => {
                            const god = convertInitailLetter(GetGods(natal_day[0], card?.day_chart?.stem?.value));

                            if (selectedGod && god !== selectedGod) {
                                return null;
                            }

                            return (
                                <article 
                                    key={index} 
                                    className={s["lp-card"]}
                                    style={{
                                        backgroundColor: selectedGod && god === selectedGod ? "#ffe082" : "" 
                                    }}
                                >
                                    <div className={s["lp-top"]}>
                                        <div className={s["lp-date"]}>{index + 1}</div>
                                        <div className={s["lp-pill"]}>
                                            <span className={s["lp-ico"]}></span>
                                            <span className={s["lp-code"]}>{god=="SK"?"7K":god}</span>
                                        </div>
                                    </div>

                                    <div className={s["lp-mid"]}>
                                        <div className={s["lp-title"]}>
                                            <small>{card?.day_chart?.stem?.value}</small>
                                        </div>
                                        <div className={s["lp-sub"]}>
                                            {card?.day_chart?.stem?.name}
                                        </div>
                                    </div>

                                    <div className={s["lp-bottom"]}>
                                        <div className={s["lp-row"]}>
                                            <span className={s["lp-small"]} style={{fontSize:"10px"}}>{card?.day_chart?.branch?.name}</span>
                                            <span className={`${s["lp-small"]} ${s["muted"]}`}>|</span>
                                            <span className={s["lp-small"]} style={{fontSize:"10px"}}>{card?.day_chart?.element?.name}</span>
                                        </div>

                                        <div className={s["lp-stats"]}>
                                            <span className={s["lp-stat"]}>
                                                {AnimalSign(card?.day_chart?.english?.name)} {card?.day_chart?.english.name}
                                            </span>
                                        </div>
                                    </div>

                                    <span className={s["lp-glow"]}></span>
                                </article>
                            )
                        })}
                    </div>
                </div>
                
            </section>
        </>
    );
}
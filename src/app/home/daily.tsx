import s from "../../../public/css/home.module.css"
import MonthTemplate from "./monthTemplate";
import { ConvertMonthIntoText } from "@/utils/convertData";


interface DailyProps {
    dailyData: any[];   
    natal_day: any[];
    selectedGod: string;
    selectedMonth?: number | null;
    onBack?: () => void;
}

export default function Daily({dailyData, natal_day, selectedGod, selectedMonth, onBack}: DailyProps){

    // If a specific month is selected, only render that one
    if (selectedMonth) {
        const monthData = dailyData.filter((card) => card.month === selectedMonth);

        return (
            <>
                {onBack && (
                    <div className="row">
                        <div className="col-12 mb-3">
                            <button className={s["plot-btn"]} onClick={onBack}>
                                ← Back to Months
                            </button>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-12">
                        <div className={s["destiny-section"]}>
                            <div className={s["destiny-card"]} style={{padding:"5px"}}>
                                <MonthTemplate 
                                    monthData={monthData} 
                                    natal_day={natal_day} 
                                    label={ConvertMonthIntoText(selectedMonth)} 
                                    selectedGod={selectedGod} 
                                />
                            </div>
                        </div>  
                    </div>
                </div>
            </>
        );
    }

    // Default: show all 12 months
    const januaryData = dailyData.filter((card) => card.month === 1);
    const febData = dailyData.filter((card) => card.month === 2);
    const marchData = dailyData.filter((card) => card.month === 3);
    const aprilData = dailyData.filter((card) => card.month === 4);
    const mayData = dailyData.filter((card) => card.month === 5);
    const juneData = dailyData.filter((card) => card.month === 6);
    const julyData = dailyData.filter((card) => card.month === 7);
    const augustData = dailyData.filter((card) => card.month === 8);
    const septemberData = dailyData.filter((card) => card.month === 9);
    const octoberData = dailyData.filter((card) => card.month === 10);
    const novemberData = dailyData.filter((card) => card.month === 11);
    const decemberData = dailyData.filter((card) => card.month === 12);

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={januaryData} natal_day={natal_day} label="January" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={febData} natal_day={natal_day} label="February"  selectedGod={selectedGod}/>
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={marchData} natal_day={natal_day} label="March" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={aprilData} natal_day={natal_day} label="April" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={mayData} natal_day={natal_day} label="May" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={juneData} natal_day={natal_day} label="June" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={julyData} natal_day={natal_day} label="July" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={augustData} natal_day={natal_day} label="August" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={septemberData} natal_day={natal_day} label="September" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={octoberData} natal_day={natal_day} label="October" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={novemberData} natal_day={natal_day} label="November" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={decemberData} natal_day={natal_day} label="December" selectedGod={selectedGod} />
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
}
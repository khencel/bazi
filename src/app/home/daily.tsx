import s from "../../../public/css/home.module.css"
import MonthTemplate from "./monthTemplate";


interface DailyProps {
    dailyData: any[];   
    natal_day: any[];
}

export default function Daily({dailyData, natal_day}: DailyProps){
    const januaryData = dailyData.filter((card) => {
        return card.month === 1;
    });
    const febData = dailyData.filter((card) => {
        return card.month === 2;
    });
    const marchData = dailyData.filter((card) => {
        return card.month === 3;
    });
    const aprilData = dailyData.filter((card) => {
        return card.month === 4;
    });
    const mayData = dailyData.filter((card) => {
        return card.month === 5;
    });
    const juneData = dailyData.filter((card) => {
        return card.month === 6;
    });
    const julyData = dailyData.filter((card) => {
        return card.month === 7;
    });
    const augustData = dailyData.filter((card) => {
        return card.month === 8;
    });
    const septemberData = dailyData.filter((card) => {
        return card.month === 9;
    });
    const octoberData = dailyData.filter((card) => {
        return card.month === 10;
    });
    const novemberData = dailyData.filter((card) => {
        return card.month === 11;
    });
    const decemberData = dailyData.filter((card) => {
        return card.month === 12;
    });

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={januaryData} natal_day={natal_day} label="January" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={febData} natal_day={natal_day} label="February" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={marchData} natal_day={natal_day} label="March" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={aprilData} natal_day={natal_day} label="April" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={mayData} natal_day={natal_day} label="May" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={juneData} natal_day={natal_day} label="June" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={julyData} natal_day={natal_day} label="July" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={augustData} natal_day={natal_day} label="August" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={septemberData} natal_day={natal_day} label="September" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={octoberData} natal_day={natal_day} label="October" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={novemberData} natal_day={natal_day} label="November" />
                        </div>
                    </div>  
                </div>
                <div className="col-md-6">
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]} style={{padding:"5px"}}>
                            <MonthTemplate monthData={decemberData} natal_day={natal_day} label="December" />
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
}
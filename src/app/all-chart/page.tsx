"use client"

import s from "../../../public/css/home.module.css"
import {useEffect, useState } from "react";
import { fetchBazi, fetchMonthly, fetchDaily, deleteDiary } from "@/redux/slices/bazi/baziThunk";
import { useDispatch } from "react-redux";
import Monthly from "@/app/home/monthly";
import Daily from "@/app/home/daily";
import html2canvas from "html2canvas";
import { GetAllGods } from "@/utils/getGod";
import {convertInitailLetter} from "@/utils/convertData";
import GodDescription from "@/components/GodDescription";
import { fetchAllDiary } from "@/redux/slices/bazi/baziThunk";
import Cookies from "js-cookie";
import { alertPopup } from "@/components/Toaster";

export default function AllChart(){
    const dispatch = useDispatch<any>();
    const [form, setForm] = useState({
        name: "",
        gender: "",
        dob: "",
        time: ""
    });
    const [outlook, setOutlook] = useState<any>("monthly")
    const [dayMaster, setDayMaster] = useState<any>({})
    const [baziCardsFirst, setBaziCardsFirst] = useState<any[]>([])
    const [baziCardsSecond, setBaziCardsSecond] = useState<any[]>([])
    const [baziCardNext, setBaziCardNext] = useState<any[]>([])
    const [ natal_day, setNatalDay ] = useState<any[]>([])
    const [ natal_hour, setNatalHour] = useState<any[]>([])
    const [ natalMonth, setNatalMonth] = useState<any[]>([])
    const [ natalYear, setNatalYear] = useState<any[]>([])
    const [dailyData, setDailyData] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [downloadLoading, setDownloadLoading] = useState(false) 
    const [isPlot, setIsPlot] = useState(true)
    const [selectedGod , setSelectedGod] = useState("")
    const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
    const [godDesc, setGodDesc] = useState(false)
    const [diary, setDiary] = useState<any[]>([])

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    //     const { name, value } = e.target;
    //     setForm(prev => ({
    //     ...prev,
    //     [name]: value
    //     }));
    // }

    const isDisabled = !form.name || !form.gender || !form.dob;
    
    const handleGetData = async (data:any) => {
        
        const itemDiary = JSON.parse(data);
        
        setOutlook("monthly")
        
        const payload = {
            selectedDay: itemDiary.selectedDay,
            selectedMonth: itemDiary.selectedMonth,
            selectedTime: itemDiary.selectedTime,
            selectedYear: itemDiary.selectedYear,
        };
        setForm(prev => ({ ...prev, time: "14" }));

        try {
            setLoading(true);

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

            setIsPlot(true);
            setGodDesc(true)
        } finally {
            setLoading(false);
        }
        
    }

    const handleDownloadImage = async () => {
        try {
            setDownloadLoading(true);

            const element = document.getElementById("daily-capture");
            if (!element) return;

            const canvas = await html2canvas(element, {
                scale: 1,
                useCORS: true,
                backgroundColor: "#ffffff"
            });

            const image = canvas.toDataURL("image/png");

            // download
            const link = document.createElement("a");
            link.href = image;
            link.download = "daily-outlook.png";
            link.click();

            // print
            const printWindow = window.open("", "_blank", "width=900,height=700");
            if (!printWindow) return;

            printWindow.document.open();
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Print</title>
                    <style>
                        @page {
                            size: auto;
                            margin: 0;
                        }

                        html, body {
                            margin: 0;
                            padding: 0;
                            width: 100%;
                            height: 100%;
                            background: #fff;
                        }

                        body {
                            display: flex;
                            justify-content: center;
                            align-items: flex-start;
                        }

                        img {
                            display: block;
                            width: 100%;
                            height: auto;
                            page-break-inside: avoid;
                            break-inside: avoid;
                        }
                    </style>
                </head>
                <body>
                    <img src="${image}" onload="window.print(); window.onafterprint = () => window.close();" />
                </body>
                </html>
            `);
            printWindow.document.close();

        } catch (error) {
            console.error("Download/Print failed:", error);
        } finally {
            setDownloadLoading(false);
        }
    };

    const handleChangeGod = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedGod(value);
    }

    const handleDelete = (id:number) => {
        alertPopup({
            title: "Delete?",
            text: "Are you sure you want to delete this record?",
            confirmText: "Yes, Delete",
            onConfirm: async () => {
                await dispatch(deleteDiary(id)).unwrap(); 
                await loadData();
            }
        });
    }

    
    const loadData = async () => {
        const currentYear = new Date().getFullYear();

        try {
            const monthlyRes: any = await dispatch(fetchMonthly(currentYear));

            setBaziCardsFirst(monthlyRes.payload.first);
            setBaziCardsSecond(monthlyRes.payload.second);
            setBaziCardNext(monthlyRes.payload.nextYear);

            const user = Cookies.get("user");
            let userData: any = null;

            if (user) {
                userData = JSON.parse(user);
            }

            if (userData?.id) {
                const diaryRes: any = await dispatch(fetchAllDiary(userData.id));
                setDiary(diaryRes.payload);
            } else {
                setDiary([]);
            }

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadData();
    }, [dispatch]);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        dispatch(fetchDaily(currentYear)).then((res:any) => {
            setDailyData(res.payload?.daily)
        })
    },[dispatch])
  

    return (
        <>
        <div className="row p-4" id="daily-capture">
            <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <section>
                    <div className={s["destiny-section"]}>
                        <div className={s["destiny-card"]}>
                            
                            {/* <div className={s["destiny-grid"]}> */}

                                {/* <button onClick={handleGetData}>
                                    Sample Data
                                </button> */}
                                <div className="row">
                                    <div className="col" style={{maxHeight:"300px",overflow:"auto"}}>
                                            <table className="table table-dark" style={{ backgroundColor: "transparent", fontSize:"12px" }} >
                                                <thead >
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Gender</th>
                                                        <th>Date of Birth</th>
                                                        <th>Time of Birth</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {diary?.length > 0 ? (
                                                        diary.map((item, index) => (
                                                        <tr key={index}>
                                                            <td className="text-capitalize">{item.name}</td>
                                                            <td className="text-capitalize">{item.gender}</td>
                                                            <td>
                                                            {new Date(item.date_of_birth).toLocaleDateString("en-US", {
                                                                month: "long",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            })}
                                                            </td>
                                                            <td>{item.time_of_birth}</td>
                                                            <td>
                                                            <span
                                                                className="badge bg-success"
                                                                style={{ cursor: "pointer" }}
                                                                onClick={() => handleGetData(item.bazi_info)}
                                                            >
                                                                View
                                                            </span>
                                                            <span
                                                                className="badge bg-danger ms-1"
                                                                style={{ cursor: "pointer" }}
                                                                onClick={() => handleDelete(item.id)}
                                                            >
                                                                Delete
                                                            </span>
                                                            </td>
                                                        </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                        <td colSpan={5} className="text-center text-secondary py-4">
                                                            No records found.
                                                        </td>
                                                        </tr>
                                                    )}
                                                    </tbody>
                                            </table>
                                    </div>
                                </div>
                                
                                <div className="row mt-3 mb-3">
                                    <div className="col">
                                        <div className={s["destiny-field"]}>
                                            <label>Outlook</label>
                                            <select
                                                name="outlook"
                                                value={outlook}
                                                onChange={(e)=>setOutlook(e.target.value)}
                                            >
                                                <option value="monthly">Monthly</option>
                                                <option value="daily">Daily</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        
                                        <div className={s["destiny-field"]}>
                                            <label>The 10 Gods</label>
                                            <select
                                                name="gods"
                                                value={selectedGod}
                                                onChange={handleChangeGod}
                                            >
                                                <option value="">Selected God</option>
                                                {   
                                                    
                                                    GetAllGods()?.map((god, index) => (
                                                        <option key={index} value={convertInitailLetter(god)}>{god}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    
                                    </div>
                                </div>

                    
                                <div className="row mb-3 mt-3">
                                    <div className="col-md-6">
                                        {/* Button */}
                                        {/* <button
                                            className={`${s["plot-btn"]} ${loading ? s["loading-btn"] : ""}`}
                                            disabled={isDisabled || loading}
                                            onClick={handlePlot}
                                        >
                                            {loading ? (
                                                <span className={s["btn-loading"]}>
                                                    <span className={s["spinner"]}></span>
                                                    Plotting Destiny...
                                                </span>
                                            ) : isPlot ? (
                                                "Plot another Bazi chart"
                                            ) : (
                                                "Plot Bazi Chart"
                                            )}
                                        </button> */}
                                        
                                    </div>
                                
                                
                                
                                    <div className="col-md-6">
                                        <button
                                            className={`${s["plot-btn"]}`}
                                            // disabled={isDisabled}
                                            onClick={handleDownloadImage}
                                        >
                                            {
                                                downloadLoading ? (
                                                    <span className={s["btn-loading"]}>
                                                    <span className={s["spinner"]}></span>
                                                    Downloading...
                                                </span>
                                                ):(
                                                    "Download Result"
                                                )
                                            }
                                        </button>
                                    </div>
                               
                                </div>
                                
                                
                               
                            {/* </div> */}
                            <span className={s["destiny-glow"]}></span>
                        </div>
                    </div>
                </section>
            </div>
            <div className="col">
                <section className="pb-0">
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
                {
                    selectedGod  && (
                        <GodDescription selectedGod={selectedGod} />
                    )
                }
                
            </div>
            {
                outlook === "monthly" ? (
                    selectedMonth === null ? (
                        <Monthly 
                            baziCardsFirst={baziCardsFirst} 
                            baziCardsSecond={baziCardsSecond} 
                            baziCardNext={baziCardNext} 
                            natal_day={natal_day}
                            onSelectMonth={(month) => setSelectedMonth(month)}
                        />
                    ) : (
                        <Daily 
                            dailyData={dailyData} 
                            natal_day={natal_day} 
                            selectedGod={selectedGod}
                            selectedMonth={selectedMonth}
                            onBack={() => setSelectedMonth(null)}
                        />
                    )
                ): (
                    <Daily dailyData={dailyData} natal_day={natal_day} selectedGod={selectedGod}/>
                )
            }
            
        </div>
        
            
        </>
    )
}

import { useState } from "react";
import s from "../../public/css/home.module.css"
import godDescription from "@/data/godDescription.json"

interface GodDescroptionProps{
    selectedGod:string
}

export default function GodDescription({selectedGod}:GodDescroptionProps){
    const godMap = {
        IW:     godDescription.IndirectWealth,
        F:      godDescription.Friend,
        IR:     godDescription.Indirect_Resource,
        EG:     godDescription.Eating_God,
        DW:     godDescription.Direct_Wealth,
        DO:     godDescription.Direct_Officer,
        DR:     godDescription.Direct_Resource,
        RW:     godDescription.Rob_Wealth,
        HO:     godDescription.Hurting_Officer,
        SK:     godDescription.Seven_Killing,
       
    } as const;
    const god = godMap[selectedGod as keyof typeof godMap];
    
    return(
        <>
            <section className="p-0">
                <div className={s["destiny-section"]}>
                    <div className={s["destiny-card"]}>
                        <div className="row w-100">
                            <div className="col-md-2 border-end">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Personality</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.personality.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 border-end">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Family</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.family.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 border-end">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>People</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.people.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 border-end">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Career & Work</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.career_works.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 border-end">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Talents</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.talents.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Function</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.function.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row w-100">
                            <div className="col-md-2 border-end">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Activities</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.activities.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 border-end">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Health</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.health.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 border-end">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Money Matters</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.money_matters.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 border-end">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Items</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.items.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 border-end">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Places</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.places.map((item, index) => (
                                            <span key={index}>-{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className={s["lp-title"]} style={{fontSize:"14px"}}>Disputes</div>
                                <div className={`${s["lp-sub"]} d-flex flex-column`}>
                                    {
                                        god?.disputes.map((item, index) => (
                                            
                                            <span key={index}>-{item}</span>
                                            
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            </section>
        </>
    )
}
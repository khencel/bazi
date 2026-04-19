import s from "./style.module.css"

export default function CopyrightNotice(){
    return (
        <>
            <section style={{height:"auto"}}>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className={s.privacyContainer}>
                            <span className={s.title}>Copyright Notice of Acknowledgement</span>
                            <br />
                            <br />
                            <p>
                                Period 9 Strategic Management Services would like to express to the public that the terminologies, approach, charts, and but not limited wordings belongs to Joey Yap. Joey Yap Research Group Sdn Bhd. The references used for these are the Qi Men Dun Jia Compendium vol. 2, Plumblossom Divination, Yi Oracle Number, Yi Jing Mastery, Qi Men Forecasting Methods.

                                The Founder of Period 9 Strategic Management Services is an alumni of Mastery Academy of Chinese Metaphysics in Malaysia under the direct supervision of training of Dato Joey Yap.

                                As such, the founder would like to give credits and acknowledgement to Team Joey Yap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
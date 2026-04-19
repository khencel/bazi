import s from "./style.module.css"

export default function AboutUs(){
    return (
        <>
            <section style={{height:"auto"}}>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className={s.privacyContainer}>
                            <span className={s.title}>About Us</span>
                            <br />
                            <br />
                            <p>
                                Period 9 Strategic Management is a consulting firm that focuses on business strategies, legal or lawsuit strategies, personal development, investments, property selection guide, date selection for major decision making, and making the most out of life using Chinese Metaphysics tools like Feng Shui, BaZi (8 Characters), Qi Men Dun Jia, Yi Jing and Date Selection. The Company believes that if anything or something of great importance is done timely, then the result is the amazingly awesome!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
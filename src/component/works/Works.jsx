import React, { useState } from 'react'
import "./Works.scss"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/front.png",
            title: "Front-End",
            desc: "Technologies that are used to design UI.",
            img1: "assets/html.png",
            img2: "assets/css.png",
            img3: "assets/js1.png",
            img4: "assets/react.png",
            img5: "assets/bootstrap.png",
            img6: "assets/saas.png"
        },
        {
            id: "2",
            icon: "./assets/back.png",
            title: "Back-End",
            desc: "Technologies that are used to design API and Database.",
            img1: "assets/node.png",
            img2: "assets/mongodb.png",
            img3: "assets/mysql.png",
            img4: "assets/firebase.png",
        },
        {
            id: "3",
            icon: "./assets/tool.png",
            title: "Tools",
            desc: "Tools that are used to enhance productivity.",
            img1: "assets/git.png",
            img2: "assets/github.png",
            img3: "assets/vs.png",
        },
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className="works" id='works'>

            {/* Here we are dynamically translating slider according to the number of slide, if it is slide no 1 then translateX(0) if it is slide no 2 then translateX( -(1 * 100)vw ) ie translateX(-100vw)*/}
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

                {data.map(d => <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>

                            </div>
                        </div>
                        <div className="right">
                            <div className="rightWrapper">

                                <div className='logo'>
                                    <img src={d.img1} alt="HTML5" />
                                </div>
                                <div className='logo'>

                                    <img src={d.img2} alt="CSS3" />
                                </div>
                                <div className='logo'>

                                    <img src={d.img3} alt="JAVASCRIPT" />
                                </div>
                                {d.img4 && <div className='logo'>

                                    <img src={d.img4} alt="REACT JS" />
                                </div>}
                                {d.img5 && <div className='logo'>

                                    <img src={d.img5} alt="BOOTSTRAP" />
                                </div>}
                                {d.img6 && <div className='logo'>

                                    <img src={d.img6} alt="BOOTSTRAP" />
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>)
                }
            </div>
            <img src="assets/arrow.png" alt="" className="arrow left" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" alt="" className="arrow right" onClick={() => handleClick("right")} />
        </div>
    )
}

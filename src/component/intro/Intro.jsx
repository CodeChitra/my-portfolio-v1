import React, { useEffect, useRef } from 'react'
import "./Intro.scss";
import { init } from 'ityped';
export default function Intro() {

    const spanRef = useRef();

    useEffect(() => {
        init(spanRef.current, { showCursor: true, backSpeed: 60, strings: ['React Developer', 'Singer', 'Cook'] })
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/avatar.png" alt="loading" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Akash Deep Chitransh</h1>
                    <h3>Web Developer <span ref={spanRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="arrow" />
                </a>
            </div>
        </div>
    )
}

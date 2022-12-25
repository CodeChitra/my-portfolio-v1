import React, { useEffect, useState } from 'react'
import "./Portfolio.scss";
import PortfolioList from './PortfolioList'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";
import ProjectButton from './ProjectButton';
export default function Portfolio() {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "basic",
            title: "Basic"
        },
        {
            id: "intermediate",
            title: "Intermediate"
        },
        {
            id: "advance",
            title: "Advance"
        }
    ]

    useEffect(() => {
        switch (selected) {
            case "feautred":
                setData(featuredPortfolio);
                break;
            case "basic":
                setData(webPortfolio);
                break;
            case "intermediate":
                setData(mobilePortfolio);
                break;
            case "advance":
                setData(designPortfolio);
                break;
            case "branding":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Projects</h1>
            <ul>
                {list.map((item) => <PortfolioList title={item.title} key={item.id} id={item.id} active={item.id === selected} setSelected={setSelected} />)}
            </ul>
            <div className="container">


                {data.map((item) => {
                    return <div className="item">
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <div className="buttons">
                            <ProjectButton title="Code" url={item.code} />
                            <ProjectButton title="Demo" url={item.live} />
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

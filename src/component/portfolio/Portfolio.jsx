import React, { useEffect, useState } from 'react'
import "./Portfolio.scss";
import PortfolioList from './PortfolioList'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";
export default function Portfolio() {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        }
    ]

    useEffect(() => {
        switch (selected) {
            case "feautred":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
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
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => <PortfolioList title={item.title} key={item.id} id={item.id} active={item.id === selected} setSelected={setSelected} />)}
            </ul>
            <div className="container">


                {data.map((item) => {
                    return <div className="item">
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                    </div>
                })}

            </div>
        </div>
    )
}

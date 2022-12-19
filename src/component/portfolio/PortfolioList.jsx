import React from 'react';
import "./PortfolioList.scss";

export default function PortfolioList({ title, id, active, setSelected }) {
    return (
        <li id={id} className={active ? "portfolioList active" : "portfolioList"} onClick={() => { setSelected(id) }}>{title}</li>
    )
}

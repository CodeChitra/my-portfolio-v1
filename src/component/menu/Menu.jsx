import React from 'react'
import "./Menu.scss";
import ListItem from "./ListItem";
export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={`menu ${menuOpen && "active"}`}>
            <ul>
                <ListItem name="Home" id="intro" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <ListItem name="Portfolio" id="portfolio" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <ListItem name="Works" id="works" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <ListItem name="Testimonials" id="testimonials" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <ListItem name="Contact" id="contact" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </ul>
        </div>
    )
}

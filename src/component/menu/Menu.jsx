import React from 'react'
import "./Menu.scss";
import ListItem from "./ListItem";
import BlogListItem from './BlogListItem';
export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={`menu ${menuOpen && "active"}`}>
            <ul>
                <ListItem name="Home" id="intro" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <ListItem name="Skills" id="works" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <ListItem name="Projects" id="portfolio" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <ListItem name="Education" id="education" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <BlogListItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <ListItem name="Contact" id="contact" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </ul>
        </div>
    )
}

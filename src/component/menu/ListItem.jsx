import React from 'react'

export default function ListItem(props) {
    const { menuOpen, setMenuOpen } = props;
    return (
        <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href={"#" + props.id}>
                {props.name}
            </a>
        </li>
    )
}

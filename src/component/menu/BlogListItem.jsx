import React from 'react'

export default function BlogListItem(props) {
    const { menuOpen, setMenuOpen } = props;
    return (
        <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="https://codechitra.hashnode.dev/" target="_blank" rel="noreferrer noopener">
                Blog
            </a>
        </li>
    )
}

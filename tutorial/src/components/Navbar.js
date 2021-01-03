import React from 'react'
import {Link} from "gatsby";


export const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/about">About </Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/examples">Examples</Link>
                </li>
                <li>
                    <Link to="/images">Images</Link>
                </li>
            </ul>
        </div>
    )
}

import React from 'react';
import { Link } from 'gatsby';
import './breadcrumbs.styles.scss';

const Breadcrumbs = ({links, className}) => {
    return (
        <div className={`${className} breadcrumbs`}>
            <Link to="/" className="breadcrumb">home</Link>
            {
                links.map(link => (
                    <Link to={`/${link}/`} className="breadcrumb" key={link}>{link.substring(link.lastIndexOf("/") + 1).replace(/\-/g," ")}</Link>
                ))
            } 
        </div>
    )
}

export default Breadcrumbs;
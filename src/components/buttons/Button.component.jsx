import React from 'react';
import './button.styles.scss';
import { Link } from 'gatsby';

export const Button = (props) => {
    return (
        <button 
            className={`button classic-btn ${props.className ? props.className : ''} ${props.disabled ? 'disabled' : ''}`}
            disabled={props.disabled}
            onClick={props.onClick}
            style={props.style}
            type={props.type}
            >
            {props.children}
        </button>
    )
}

export const ButtonLink = React.forwardRef((props, ref) => (
        <div className={`${props.className}`} ref={ref} style={props.style}>
            <Link to={`${props.toLink}`} className="button">{props.children}</Link>
        </div>
))

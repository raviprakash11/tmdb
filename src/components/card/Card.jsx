import React from "react";
import "./Card.css"

export const Card = ({ header, body, footer }) => {
    return (<div className="card">
        {header ? <div className="card-header">{header}</div> : null}
        {body ? <div className="card-body">{body}</div> : null}
        {footer ? <div className="card-footer">{footer}</div> : null}
    </div>)
}
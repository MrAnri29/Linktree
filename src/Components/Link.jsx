import React from "react";
import "../styles/Link.css";

export const LinkComp = ({ link }) => {
    return (
        <button
            className="link"
            onClick={() => (window.location.href = link.href)}
        >
            {link.name}
        </button>
    );
};

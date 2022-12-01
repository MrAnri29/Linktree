import React, { useState, useEffect } from "react";

import { LinkComp } from "../Components/Link";

import "../styles/App.css";

export const App = () => {
    const links = [
        {
            name: "MNS",
            href: "https://discord.gg/money-no-skill-993084866499465307",
        },
        {
            name: "Pavle",
            href: "https://discord.com/api/oauth2/authorize?client_id=985544918422421515&permissions=1376739781702&scope=bot%20applications.commands",
        },
        {
            name: "Github",
            href: "https://github.com/MrAnri29",
        },
        {
            name: "Instagram",
            href: "https://instagram.com/Anrikk_",
        },
        {
            name: "Twitter",
            href: "https://twitter.com/Anrikk_",
        },
        {
            name: "Spotify",
            href: "https://open.spotify.com/user/31vfqw45wmm4b7fbavr4wzjgum4u",
        },
        {
            name: "TikTok",
            href: "https://www.tiktok.com/@mr.anri29",
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/profile.php?id=100081939550399",
        },
    ];

    return (
        <div className="App">
            <div className="App-wrapper">
                <div className="photo"></div>
                <p className="desc">Anrius</p>
                {links.map((link) => {
                        return <LinkComp key={link.name} link={link} />;
                    })}
            </div>
        </div>
    );
};

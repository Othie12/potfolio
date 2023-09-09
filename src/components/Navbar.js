import React from "react";
import mylogo from "../pictures/Asset 9.png"

export default function Navbar() {
    const links = [
        {id: 1, name: "Home", lnk: "#home"},
        {id: 2, name: "Skills", lnk: "#skills"},
        {id: 3, name: "Projects", lnk: "#projects"}, 
        {id: 4, name: "Resume", lnk: "#resume"},
        {id: 5, name: "Contact", lnk: "#contact"}
    ];

    const prepared = links.map( item => 
        <li key={item.id} className="nav-item">
          <a className="nav-link" href={item.lnk}>{item.name}</a>
        </li>
        );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="#home"><img src={mylogo} alt="My personal logo" style={{width: 40}} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                {prepared}
            </ul>
          </div>
        </div>
      </nav>
    );
}
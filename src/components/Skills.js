import React from "react";
import profilepic from "../pictures/profilepic.jpg";


export default function Skills(){
    return(
        <div className="container mx-auto px-4 columns-2" id="skills">
            <iframe className="w-full aspect-square rounded-md" width="560" height="315" src="https://www.youtube.com/embed/-ms8enQVgg0?si=JA4bk00rpu9AiiAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <img className="w-full aspect-square rounded-md" src={profilepic} alt="profile image" />
        </div>
    )
}
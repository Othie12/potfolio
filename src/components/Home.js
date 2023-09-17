import React from "react";
import profilepic from "../pictures/profilepic.jpg";
import degreeIcon from "../pictures/degreeIcon.png";



export default function Home(){
    let me = {
        name: "Othieno Simon",
        picture: profilepic,
        jobs: ["software Engineer", "Data scientist"],
        education: {
            icon: degreeIcon,
            institution: "Limkokwing University of Creative Technology(LUCT)",
            certificate: "Bsc. Software Engineering with Multimedia",
            from: "Feb, 2021",
            to: "Dec, 2023",
        },
    };
    return(
        <section className="" id="home" style={{marginTop: 30}}>
            <div className="float-left w-60">
                <img className="rounded-full w-full" src={me.picture} alt="mainImg" />
            </div>
            <div className="">
                <h2>{me.name}</h2>
                <div>
                    <img src={degreeIcon} style={{width: 50}} />
                    {me.certificate}
                </div>
            </div>
        </section>
    );
}

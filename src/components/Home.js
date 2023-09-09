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
        <section className="row col-12 col-md-12" id="home" style={{marginTop: 30}}>
            <div className="col-12 col-md-3">
                <img className="" src={me.picture} alt="mainImg" style={{width: "100%", borderRadius: "5%"}}/>
            </div>
            <div className="col-12 col-md-9">
                <h2>{me.name}</h2>
                <div style={{borderTopStyle: "solid", padding: 20, display: "flex"}}>
                    <img src={degreeIcon} style={{width: 50}} />
                    {me.certificate}
                </div>
            </div>
        </section>
    );
}

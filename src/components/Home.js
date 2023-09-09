import React, { createContext } from "react";
import profilepic from "../pictures/profilepic.jpg";
import degreeIcon from "../pictures/degreeIcon.png";
import { useContext } from "react";
import { useState } from "react";

const NameContext = createContext(null);

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
            <div className="col-12 col-md-9 whitebg">
                <h2>{me.name}</h2>
                <div style={{borderTopStyle: "solid", padding: 20, display: "flex"}}>
                    <img src={degreeIcon} style={{width: 50}} />
                    {me.certificate}
                    <ChangeName />
                </div>
            </div>
        </section>
    );
}

function ChangeName(){
    const [name, setName] = useState("Matovu Isaac");
    return (
        <NameContext.Provider value={name}>
            <>
            <button onClick={setName("Othieno Simon")}>
                Change_name
            </button>
            <Name />
            </>
        </NameContext.Provider>

    )
}


function Name(){
    const name = useContext(NameContext);
    return (
            <h2>My name is {name}.</h2>
    );
}
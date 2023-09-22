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
        <section className="flex-row md:flex" id="home">
            <div className="md:w-1/4">
                <img className="rounded-lg md:rounded-full w-full object-right-top z-30 border-2" src={me.picture} alt="mainImg" />
            </div>
            <div className="dark:text-violet-50 mt-4 md:ml-4 py-auto backdrop-blur-md bg-white/30 rounded-lg p-10 md:w-3/4">
                <h2 className="dark:text-violet-50 pl-5 text-5xl font-bold font-serif">{me.name}</h2>
                <div className="pl-10 font-light">{me.jobs.join(' / ')}</div>
                <div className="text-white flex pl-10 mt-6 border-t-2 pt-5">
                    <img src={degreeIcon} className="w-5 h-5 md:w-20 md:h-20" />
                    <p className="">
                        {me.education.certificate}
                        <span className="font-thin block text-gray-700">{me.education.institution}</span>
                        <time className="text-gray-900">{me.education.from} - {me.education.to}</time>
                    </p>
                </div>
            </div>
        </section>
    );
}

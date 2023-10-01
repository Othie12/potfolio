import React from "react";
import aws from '../pictures/aws-2.svg';
import docker from '../pictures/docker.svg';
import git from '../pictures/git-icon.svg';
import golang from '../pictures/golang-1.svg';
import laravel from '../pictures/laravel-2.svg';
import linux from '../pictures/linux-tux.svg';
import mysql from '../pictures/mysql-logo.svg';
import postgre from '../pictures/postgresql.svg';
import reactlogo from '../pictures/react-2.svg';
import github from '../pictures/github-icon-1.svg';

export default function Skills(){
    let skills = [aws, docker, git, golang, laravel, linux, mysql, postgre, reactlogo, github];
    let skillList = skills.map( skill => 
        <div className="h-50">
            <img src={skill} className="w-20" alt="icon" />
        </div>
        );
    return(
        <div className="mt-10 " id="skills">
            <div className="font-bold text-center text-4xl text-slate-200">Skills</div>
            <div className="bg-white/50 mx-auto columns-5 backdrop-blur-sm border-2 rounded-lg p-5" >
                {skillList}
            </div>
        </div>
    )
}
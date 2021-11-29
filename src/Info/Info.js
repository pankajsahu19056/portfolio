import React from 'react';
import self from '../img/self.png';

export let colors = ["rgb(185, 85, 211)", "rgb(247, 10, 7)"];
export const info = {
    firstName: " Pankaj sahu",
    lastName: "",
    initials: "js",
    position: "Full Stack Developer",
    selfPortrait: self, 
    gradient: `linear-gradient(135deg, ${colors})`,
    miniBio: [ 
        ["☕️", "Fueled by coffee"],
        ["🇮🇳", "Based in india"],
        ["💼", "student at delhi-university"],
        ["✉️", "pankajsahu19056@gmail.com"],
    ],
    socials: [
        ["https://facebook.com/pankaj.sha.545849", facebookIcon()], 
        ["https://instagram.com/_pankaj._.sahu_", instagramIcon()],
        ["https://linkedin.com/pankaj-sahu-49514a214", linkedInIcon()],
        ["https://medium.com", mediumIcon()],
        ["https://twitter.com/pankajs06738295", twitterIcon()]
    ],
    bio: "Hello! I'm pankaj sahu. I'm a student at delhi-university. I studied CompSci at acharya narender dev college, I enjoy watching anime's, and I love to try new thing thank's for visiting , have a good day!",
    hobbies: [
        ["📖", "reading"],
        ["🎭", "coding"], 
        ["🎥", "movies"],
        ["🌶", "spicy food"]
    ],
    portfolio: [
        
        {
            title: "shopping-app",
            liveLink: "https://pankajsahu19056.github.io/new_shop_repo/",
            sourceLink: "https://github.com/pankajsahu19056/new_shop_repo",
        },
        {
            title: "robo-friends app",
            liveLink: "https://pankajsahu19056.github.io/react_app/",
            sourceLink: "https://github.com/pankajsahu19056/react_app",
        },
        {
            title: "note-book/note-pad",
            liveLink: "https://pankajsahu19056.github.io/lib/", 
            sourceLink: "https://github.com/pankajsahu19056/lib",
        },
        
       
        {
            title: "Project 4",
            liveLink: "...",
            sourceLink: "...",
        },
    ]
}

// FontAwesome from here

function facebookIcon() {
    return <i className="fa fa-facebook" aria-hidden="true"/>
};

function instagramIcon() {
    return <i className="fa fa-instagram" aria-hidden="true"/>
};

function linkedInIcon() {
    return <i className="fa fa-linkedin" aria-hidden="true"/>
};

function mediumIcon() {
    return <i className="fa fa-medium" aria-hidden="true"/>
};

function twitterIcon() {
    return <i className="fa fa-twitter" aria-hidden="true"/>
};


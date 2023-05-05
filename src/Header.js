import React from "react"
import image from "./images/troll face.jfif"
export default function Header(){
    return(
        <header className="header">
            <img src={image} alt="pic" className="image"/>
            <h2 className="title">Meme Generetor</h2>

        </header>
    )
}
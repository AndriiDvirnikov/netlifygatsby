import React from 'react'
import {slider,text_slider,women_img,hold_text_slider,hold_slider_info,slider_info,
    arrow_bc_left,arrow_left,arrow_bc_right,arrow_right} from "../styles/slider.module.css"
export default function Slider() {
    return (
        <div className={slider}>
            
            <img src="/slider.jpg"/>
            <div className="conteiner">
                <div className={text_slider}>
                    <div className={women_img}> 
                        <img  src="/women.png" />
                    </div>
                    <div className ={hold_text_slider}>
                        <h1> Maecenas quis lobortis nunc Nullam sit
                            vel odio congue vulputate a ut nisi
                        </h1>
                    </div>
                </div>
                <div className={hold_slider_info}>
                    <div className = {slider_info}>
                        <div className="categorry blue">
                            <p>People</p>
                        </div>
                        <div className ="author">
                            <p className="date-slider">14 septemvber 2016</p>
                            <p className="author-news">John Doe</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={arrow_bc_left}>
                <div className = {arrow_left}></div>
            </div>
            <div className={arrow_bc_right}>
                <div className = {arrow_right}></div>
            </div>
        </div>  
       
    )
}

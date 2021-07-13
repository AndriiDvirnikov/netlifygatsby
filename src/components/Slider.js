import React from 'react'

export default function Slider() {
    return (
        <div className="slider">
            <img src="/slider.jpg"/>
            <div className="conteiner">
                <div className="text-slider">
                    <div className="women-img"> 
                        <img  src="/women.png" />
                    </div>
                    <div className ="hold-text-slider">
                        <h1> Maecenas quis lobortis nunc Nullam sit
                            vel odio congue vulputate a ut nisi
                        </h1>
                    </div>
                </div>
                <div className="hold-slider-info">
                    <div className = "slider-info">
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
            <div className="arrow-bc-left">
                <div className = "arrow-left"></div>
            </div>
            <div className="arrow-bc-right">
                <div className = "arrow-right"></div>
            </div>
        </div>  
       
    )
}

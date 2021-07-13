import React from 'react'
import {newslatter_content,newslater_header,hold_newslatter_input,input_button} from "../styles/newslater.module.css"
export default function Newsletter() {
    return (
        <div className={newslatter_content}>
            <div className="conteiner">
                <div className ={newslater_header}>
                    <h1>Newsletter</h1>
                    <p>Donec elementum dui semper, pretium dui quis, pretium nisl.</p>
                    <div className={hold_newslatter_input}>
                        <input type="text" size="33" />
                        <div className={input_button}>Sign up</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function BlogCartImage({props}) {
    console.log ('BlogCartImage', props)
    return (
        <div>
            <StaticImage src ={props} />
        </div>
    )
}

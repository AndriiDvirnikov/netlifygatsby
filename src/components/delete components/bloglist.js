

import React from 'react'


export default function Bloglist( {props} ) {
    return (
        <div className="conteiner">
            <div className="hold-blog-mini">
                <div className="hold-blog-inner">
                    {props.posts.edges.map( posts=>( 
                        <div key={posts.node.data.title.text} className ="cart-blog">
                            <div className ="hold-img-blog blog-mini">
                                <img src ={posts.node.data.post_image.url} alt={posts.node.data.post_image.alt} />
                                <div className ="categorry-blog" style={{ backgroundColor:posts.node.data.color_category}} >
                                    <p>{posts.node.data.category.text}</p>
                                </div>
                            </div>
                            <div className ="sub-text-blog">
                                <p>{posts.node.data.title.text}</p>
                            </div>
                            <div className="author">
                                <p className="date-slider">{posts.node.data.datapost}</p>
                                <p className="author-news">{posts.node.data.author.text}</p>
                            </div>
                        </div>
                    )
                    )}

                </div>
            </div>
        </div>
    )
}

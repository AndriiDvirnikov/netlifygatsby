import React from 'react'

export default function BlogWithTwoNews( {props} ) {
    console.log ('two news',props.twonews.edges)
    return (
            <div className ="conten-bg-gray">
                <div className="conteiner">
                    <div className="hold-card">
                    {props.twonews.edges.map( twonews=>( 
                        <div key={twonews.node.data.title_news.text} className ="cart-blog">
                            <div className ="hold-img-blog">
                                <img src ={twonews.node.data.image_news.url} />
                                <div className ="categorry-blog" style={{ backgroundColor:twonews.node.data.color_category}} >
                                    <p>{twonews.node.data.category.text}</p>
                                </div>
                            </div>
                            <div className ="sub-text-blog">
                                <p>{twonews.node.data.title_news.text}</p>
                            </div>
                            <div className="author">
                                <p className="date-slider">{twonews.node.data.data_post_news}</p>
                                <p className="author-news">{twonews.node.data.author.text}</p>
                            </div>

                        </div>
                    )
                    )}
                   
                    </div>
                </div>
            </div>
    )
}

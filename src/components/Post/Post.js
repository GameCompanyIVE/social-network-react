import React from "react";

const Post = (props)=>{
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.name}</p>
            <span>{props.likecount}</span>
        </div>
    )
}

export default Post;
import React from "react"

const Post = ({post}) => {
    return (
        <div>
            <b>{post.id}: {post.title}</b>
            <button>Удалить</button>
        </div>
    )
}

export default Post
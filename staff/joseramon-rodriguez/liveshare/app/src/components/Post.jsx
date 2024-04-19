function Post({ post }) {
    return <article className="post">
        <h3>{post.author.username}</h3>
        <img className="post-image" src={`${post.image}`}></img>
        <p>{post.text}<br /><sup>{post.date}</sup></p>
    </article>
}

export default Post
import { User, Post } from '../data/index.js'

function retrievePosts(userId) {
    //TODO input validations

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            return Post.find().populate('author', 'username').lean()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()

                        delete post._id

                        post.author.id = post.author._id.toString()

                        delete post.author._id

                    })
                    return posts
                })
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error.message))

}

export default retrievePosts
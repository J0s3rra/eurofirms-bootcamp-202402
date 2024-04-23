import logic from "../logic"

function CreatePost({ onPostCreated, onCancelCreatePostClick }) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => onPostCreated())
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })

        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleCancelCreatePostClick = () => {
        onCancelCreatePostClick()
    }
    return <>
        <section id="create-post-section" className=" mb-10  fixed bottom-0 bg-slate-500 w-full pb-3">
            <h2>Create post</h2>

            <form className=" flex  flex-col" id="create-post-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input type="text" id="image" />

                <label htmlFor="text">Text</label>
                <input type="text" id="text" />

                <button type="submit">Create Post</button>
            </form>

            <button onClick={handleCancelCreatePostClick} id="create-post-cancel-button">Cancel create post</button>
        </section>
    </>
}

export default CreatePost

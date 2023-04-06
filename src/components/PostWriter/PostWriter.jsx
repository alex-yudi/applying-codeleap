import './PostWriter.css'
import Button from '../Button/Button'

function PostWriter() {
    return (
        <div className='container-post-writer'>
            <h1>What's on your mind?</h1>
            <form
                className='form-post-writer'
            >
                <label htmlFor="title">
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    placeholder='Hello world'
                />

                <label htmlFor="content">
                    Content
                </label>
                <textarea
                    id="content"
                    rows="4"
                    cols="50"
                    placeholder='Content here'
                ></textarea>

                <Button
                    classType='input'
                >
                    Create
                </Button>

            </form>

        </div>
    )
}

export default PostWriter;
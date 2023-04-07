import './PostWriter.css'
import Button from '../Button/Button'
import useUser from '../../hooks/useUser';
import { codeLeap } from '../../connections/codeLeap'
import { useEffect } from 'react';



function PostWriter() {
    const { userSignup, postContent, setPostContent, setButtonActive, setPostsList } = useUser()

    const handleOnChange = ({ target }) => {
        setPostContent({ ...postContent, [target.name]: target.value })
        if (postContent.title.length !== 0 && postContent.content.length !== 0) {
            return setButtonActive('active')
        } else {
            return setButtonActive('disabled')
        }
    }

    const submitNewPost = async () => {
        try {
            const response = await codeLeap.post('/', {
                username: userSignup,
                ...postContent
            })
            return console.log(response)

        } catch (error) {
            return console.log(error)
        }
    }

    const getNewListOfPosts = async () => {
        const response = await codeLeap.get('/')
        setPostsList(response.data.results)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        submitNewPost()
        getNewListOfPosts()
    }

    return (
        <div className='container-post-writer'>
            <h1>What's on your mind?</h1>
            <form
                className='form-post-writer'
                onSubmit={handleSubmit}
            >
                <label htmlFor="title">
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder='Hello world'
                    onChange={handleOnChange}
                />

                <label htmlFor="content">
                    Content
                </label>
                <textarea
                    id="content"
                    name="content"
                    rows="4"
                    cols="50"
                    placeholder='Content here'
                    onChange={handleOnChange}
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
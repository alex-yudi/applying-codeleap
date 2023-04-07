import { useState } from 'react';

function useUserProvider() {
    const [userIsLogged, setUserIsLogged] = useState(false)
    const [userSignup, setUserSignup] = useState('')
    const [buttonActive, setButtonActive] = useState('disabled')
    const [postsList, setPostsList] = useState([])
    const [postContent, setPostContent] = useState({ title: '', content: '' })

    return {
        userIsLogged, setUserIsLogged,
        userSignup, setUserSignup,
        buttonActive, setButtonActive,
        postsList, setPostsList,
        postContent, setPostContent
    }
}

export default useUserProvider; 
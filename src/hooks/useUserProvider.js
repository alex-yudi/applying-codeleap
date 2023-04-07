import { useState } from 'react';

function useUserProvider() {
    const [userIsLogged, setUserIsLogged] = useState(false)
    const [userSignup, setUserSignup] = useState('')
    const [buttonActive, setButtonActive] = useState('disabled')
    const [postsList, setPostsList] = useState([])

    return {
        userIsLogged, setUserIsLogged,
        userSignup, setUserSignup,
        buttonActive, setButtonActive,
        postsList, setPostsList
    }
}

export default useUserProvider; 
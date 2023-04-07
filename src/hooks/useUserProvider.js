import { useState } from 'react';

function useUserProvider() {
    const [userIsLogged, setUserIsLogged] = useState(false)
    const [userSignup, setUserSignup] = useState('')
    const [buttonActive, setButtonActive] = useState('disabled')

    return {
        userIsLogged, setUserIsLogged,
        userSignup, setUserSignup,
        buttonActive, setButtonActive
    }
}

export default useUserProvider; 
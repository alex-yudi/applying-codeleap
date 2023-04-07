import { useState } from 'react';

function useUserProvider() {
    const [userIsLogged, setUserIsLogged] = useState(false)
    const [userSignup, setUserSignup] = useState('')
    const [buttonActive, setButtonActive] = useState('disabled')
    const [postsList, setPostsList] = useState([])
    const [postContent, setPostContent] = useState({ title: '', content: '' })
    const [postSelected, setPostSelected] = useState({ title: '', content: '' })
    const [openTrash, setOpenTrash] = useState(false);
    const [openModify, setOpenModify] = useState(false);

    return {
        userIsLogged, setUserIsLogged,
        userSignup, setUserSignup,
        buttonActive, setButtonActive,
        postsList, setPostsList,
        postContent, setPostContent,
        postSelected, setPostSelected,
        openTrash, setOpenTrash,
        openModify, setOpenModify
    }
}

export default useUserProvider; 
import { useState } from 'react';

function useUserProvider() {
    const [userIsLogged, setUserIsLogged] = useState(false)
    const [username, setUsername] = useState("")
    const [buttonActive, setButtonActive] = useState('disabled')
    const [postsList, setPostsList] = useState([])
    const [postContent, setPostContent] = useState({ title: '', content: '' })
    const [postSelected, setPostSelected] = useState({ title: '', content: '' })
    const [openTrash, setOpenTrash] = useState(false);
    const [openModify, setOpenModify] = useState(false);

    return {
        userIsLogged, setUserIsLogged,
        username, setUsername,
        buttonActive, setButtonActive,
        postsList, setPostsList,
        postContent, setPostContent,
        postSelected, setPostSelected,
        openTrash, setOpenTrash,
        openModify, setOpenModify,
    }
}

export default useUserProvider; 
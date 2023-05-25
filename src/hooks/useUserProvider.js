import { useState } from 'react';

function useUserProvider() {
    const [username, setUsername] = useState('')
    const [buttonActive, setButtonActive] = useState('disabled') // Excluir dps
    const [postsList, setPostsList] = useState([])
    const [postContent, setPostContent] = useState({ title: '', content: '' })
    const [postSelected, setPostSelected] = useState({ title: '', content: '' })
    const [openTrash, setOpenTrash] = useState(false);
    const [openModify, setOpenModify] = useState(false);

    return {
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
import './PostField.css'

import { useState } from 'react'

import ModalDelete from '../ModalDelete/ModalDelete'
import ModalEditPost from '../ModalEditPost/ModalEditPost'

import trashImg from '../../assets/delete-img.png'
import pencilImg from '../../assets/modify-img.png'

import useUser from '../../hooks/useUser'



function PostField({ postData }) {
    const [openTrash, setOpenTrash] = useState(false);
    const [openModify, setOpenModify] = useState(false);
    const { userSignup } = useUser()

    const getTimeFromPost = (datetimePost) => {
        const past = new Date(datetimePost)
        const now = new Date()

        const diff = Math.abs(now.getTime() - past.getTime())

        const time = Math.ceil(diff / (1000 * 60));
        if (time > 60) {
            return `${Math.ceil(time / 60)} hours ago`
        }
        return `${time} minutes ago`
    }

    return (
        <>
            <div className='container-post-field'>
                <div className='post-header'>
                    <p>
                        {postData.title}
                    </p>
                    {
                        userSignup === postData.username &&
                        <div className='interactive-icons'>
                            <img
                                src={trashImg}
                                alt="Delete post"
                                onClick={() => { setOpenTrash(true) }}
                            />
                            <img
                                src={pencilImg}
                                alt="Modify post"
                                onClick={() => { setOpenModify(true) }}
                            />
                        </div>
                    }
                </div>
                <div className='post-body'>
                    <div className='post-body-information'>
                        <p>@{postData.username}</p>
                        <p>{getTimeFromPost(postData.created_datetime)}</p>
                    </div>
                    <div className='post-body-content'>
                        {postData.content}
                    </div>
                </div>
            </div >

            <ModalDelete
                openTrash={openTrash}
                setOpenTrash={setOpenTrash}
            />
            <ModalEditPost
                openModify={openModify}
                setOpenModify={setOpenModify}
            />

        </>
    )
}

export default PostField;
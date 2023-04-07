import './PostField.css'

import { useState } from 'react'

import ModalDelete from '../ModalDelete/ModalDelete'
import ModalEditPost from '../ModalEditPost/ModalEditPost'

import trashImg from '../../assets/delete-img.png'
import pencilImg from '../../assets/modify-img.png'



function PostField({ postData }) {
    const [openTrash, setOpenTrash] = useState(false);
    const [openModify, setOpenModify] = useState(false);

    return (
        <>
            <div className='container-post-field'>
                <div className='post-header'>
                    <p>
                        {postData.title}
                    </p>
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
                </div>
                <div className='post-body'>
                    <div className='post-body-information'>
                        <p>@{postData.username}</p>
                        <p>25 minutes ago</p>
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
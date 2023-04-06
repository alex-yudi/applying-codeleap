import './PostField.css'

import { useState } from 'react'

import ModalDelete from '../ModalDelete/ModalDelete'

import trashImg from '../../assets/delete-img.png'
import pencilImg from '../../assets/modify-img.png'



function PostField() {
    const [open, setOpen] = useState(false);


    return (
        <>
            <div className='container-post-field'>
                <div className='post-header'>
                    <p>
                        My First Post at CodeLeap Network!
                    </p>
                    <div className='interactive-icons'>
                        <img
                            src={trashImg}
                            alt="Delete post"
                            onClick={() => { setOpen(true) }}
                        />
                        <img src={pencilImg} alt="Modify post" />
                    </div>
                </div>
                <div className='post-body'>
                    <div className='post-body-information'>
                        <p>@Victor</p>
                        <p>25 minutes ago</p>
                    </div>
                    <div className='post-body-content'>
                        <p>
                            Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
                        </p>
                        <br />
                        <p>
                            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
                        </p>
                        <p>
                            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
                        </p>
                    </div>
                </div>
            </div >

            <ModalDelete
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}

export default PostField;
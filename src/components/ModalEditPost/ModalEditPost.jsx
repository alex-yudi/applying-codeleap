import './ModalEditPost.css'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button';

import useUser from '../../hooks/useUser';
import { codeLeap } from '../../connections/codeLeap';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 660,
    minHeight: 'auto',
    padding: 24,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 5,
    border: '1px transparent',
    p: 3,
};

export default function ModalEditPost() {
    const { postSelected, setPostSelected, setButtonActive, openModify, setOpenModify, setPostsList } = useUser()

    const handleClose = () => {
        setOpenModify(false)
    };

    const handleOnChange = ({ target }) => {
        setPostSelected({ ...postSelected, [target.name]: target.value })
        if (postSelected.title.length !== 0 && postSelected.content.length !== 0) {
            return setButtonActive('active')
        } else {
            return setButtonActive('disabled')
        }
    }

    const modifyPost = async () => {
        try {
            await codeLeap.patch(`/${postSelected.id}/`, {
                title: postSelected.title,
                content: postSelected.content
            })
        } catch (error) {
            return console.log(error)
        }
    }

    const getNewListOfPosts = async () => {
        const response = await codeLeap.get('/')
        setPostsList(response.data.results)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        modifyPost()
        getNewListOfPosts()
        handleClose()
    }

    return (
        <div>
            <Modal
                open={openModify}
                onClose={handleClose}
            >
                <Box
                    className='modal-edit-post'
                    sx={style}
                >
                    <h1>Edit item</h1>
                    <form
                        className='form-edit-post'
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
                            value={postSelected.title}
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
                            value={postSelected.content}
                        ></textarea>

                        <div className='container-btn-modal-edit-post'>
                            <Button
                                classType='cancel'
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>

                            <Button
                                classType='save'
                            >
                                Save
                            </Button>
                        </div>

                    </form>
                </Box>
            </Modal>
        </div>
    );
}
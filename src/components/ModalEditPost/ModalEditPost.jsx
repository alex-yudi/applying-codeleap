import './ModalEditPost.css'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button';

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

export default function ModalEditPost({ openModify, setOpenModify }) {
    const handleClose = () => setOpenModify(false);

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
                    >
                        <label htmlFor="title">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder='Hello world'
                        />

                        <label htmlFor="content">
                            Content
                        </label>
                        <textarea
                            id="content"
                            rows="4"
                            cols="50"
                            placeholder='Content here'
                        ></textarea>

                        <div className='container-btn-modal-edit-post'>
                            <Button
                                classType='cancel'
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
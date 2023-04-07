import './ModalDelete.css'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button'

import useUser from '../../hooks/useUser';
import { codeLeap } from '../../connections/codeLeap';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 660,
    height: 146,
    bgcolor: 'background.paper',
    border: '1px transparent #fff',
    borderRadius: 5,
    boxShadow: 24,
    p: 3,
};

export default function ModalDelete() {
    const { openTrash, setOpenTrash, postSelected } = useUser()

    const handleClose = () => {
        setOpenTrash(false)
        setButtonActive('disabled')
    };

    const getNewListOfPosts = async () => {
        const response = await codeLeap.get('/')
        setPostsList(response.data.results)
    }

    const handleDeletePost = async () => {
        await codeLeap.delete(`/${postSelected.id}/`)
        handleClose()
        getNewListOfPosts()
    }

    return (
        <div>
            <Modal
                className='container-modal-delete'
                open={openTrash}
                onClose={handleClose}
            >
                <Box
                    className='delete-message-modal'
                    sx={style}>
                    <p>
                        Are you sure you want to delete this item?
                    </p>
                    <div className='container-btn-delete-modal'>
                        <Button
                            classType='cancel'
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            classType='delete'
                            onClick={handleDeletePost}
                        >
                            Delete
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
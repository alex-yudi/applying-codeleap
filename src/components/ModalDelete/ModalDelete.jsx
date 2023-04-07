import './ModalDelete.css'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '../Button/Button'

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

export default function ModalDelete({ openTrash, setOpenTrash }) {
    const handleClose = () => setOpenTrash(false);

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
                        >
                            Cancel
                        </Button>
                        <Button
                            classType='delete'
                        >
                            Delete
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
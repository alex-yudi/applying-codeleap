import './ModalSignup.css'
import Button from '../Button/Button'

function ModalSignup() {

    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <div className='container-sign-up'>
            <div className='modal-sign-up'>
                <p>
                    Welcome to CodeLeap network!
                </p>
                <form
                    className='form-sign-up'
                    onSubmit={handleSubmit}
                >
                    <span>Please enter your name</span>
                    <input
                        type="text"
                        placeholder='John doe'
                    />
                    <Button
                        classType='input'
                    >
                        Enter
                    </Button>
                </form>
            </div>
        </div>
    )

}



export default ModalSignup
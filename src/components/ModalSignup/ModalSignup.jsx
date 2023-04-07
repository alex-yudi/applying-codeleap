import './ModalSignup.css'
import Button from '../Button/Button'
import useUser from '../../hooks/useUser'
import { useEffect } from 'react'

function ModalSignup() {
    const {
        username, setUsername,
        setButtonActive,
        setUserIsLogged
    } = useUser()

    const handleOnChange = ({ target }) => {
        setUsername(target.value)
        if ((target.value).length !== 0) {
            setButtonActive('active')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userLogged', username)
        setUserIsLogged(true)
    }

    useEffect(() => {
        if (localStorage.getItem('userLogged')) {
            setUserIsLogged(true)
        }
    }, [])

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
                        name="name"
                        type="text"
                        placeholder='John doe'
                        value={username}
                        onChange={handleOnChange}
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
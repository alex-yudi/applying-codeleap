import './ModalSignup.css'
import Button from '../Button/Button'
import useUser from '../../hooks/useUser'
import { useEffect, useState } from 'react'



function ModalSignup() {
    const [localUsername, setLocalUsername] = useState('')
    const [activeButtonSignUp, setActiveButtonSignUp] = useState(true);
    const {
        setUsername,
        setUserIsLogged
    } = useUser()

    const handleOnChange = ({ target }) => {
        setLocalUsername(target.value)
        if (target.value.length === 0) {
            return setActiveButtonSignUp(true)
        }
        setActiveButtonSignUp(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userLogged', localUsername)
        setUsername(localUsername)
        // setUserIsLogged(true)
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
                    <label htmlFor="name">
                        <span>Please enter your name</span>
                    </label>
                    <input
                        name="name"
                        id='name'
                        type="text"
                        placeholder='John doe'
                        value={localUsername}
                        onChange={handleOnChange}
                    />
                    <Button
                        classType='input'
                        isDisabled={activeButtonSignUp}
                    >
                        Enter
                    </Button>
                </form>
            </div>
        </div>
    )

}



export default ModalSignup
import './ModalSignup.css'
import Button from '../Button/Button'
import useUser from '../../hooks/useUser'
import { useEffect, useState } from 'react'



function ModalSignup() {
    const [localUsername, setLocalUsername] = useState('')
    const {
        setUsername,
        setButtonActive,
        setUserIsLogged
    } = useUser()

    const handleOnChange = ({ target }) => {
        setLocalUsername(target.value)
        if ((target.value).length !== 0) {
            setButtonActive('active')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (localUsername === null) {
            return
        }
        localStorage.setItem('userLogged', localUsername)
        setUsername(localUsername)
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
                    >
                        Enter
                    </Button>
                </form>
            </div>
        </div>
    )

}



export default ModalSignup
import './ModalSignup.css'
import Button from '../Button/Button'
import useUser from '../../hooks/useUser'
import { useEffect } from 'react'

function ModalSignup() {
    const {
        userSignup, setUserSignup,
        setButtonActive,
        setUserIsLogged
    } = useUser()


    const handleOnChange = ({ target }) => {
        setUserSignup(target.value)
        if (userSignup.length === 0) {
            return setButtonActive('disabled')
        }
        setButtonActive('active')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!userSignup || userSignup.length === 0) {
            return
        }
        localStorage.setItem('userLogged', userSignup)
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
                        type="text"
                        placeholder='John doe'
                        value={userSignup}
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
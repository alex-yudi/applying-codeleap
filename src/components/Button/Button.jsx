import './Button.css'
import useUser from '../../hooks/useUser'

function Button({ children, classType, onClick, isDisabled }) {

    return (
        <button
            className={`${classType}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </ button >
    )
}

export default Button
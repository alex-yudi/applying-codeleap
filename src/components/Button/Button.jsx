import './Button.css'
import useUser from '../../hooks/useUser'

function Button({ children, classType, onClick }) {
    const { buttonActive } = useUser();

    return (
        <button
            className={`${classType} ${buttonActive}`}
            onClick={onClick}
        >
            {children}
        </ button >
    )
}

export default Button
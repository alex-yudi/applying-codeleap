import './Button.css'
import useUser from '../../hooks/useUser'

function Button({ children, classType }) {
    const { buttonActive } = useUser();

    return (
        <button
            className={`${classType} ${buttonActive}`}
        >
            {children}
        </ button >
    )
}

export default Button
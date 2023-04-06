import './Button.css'

function Button({ children, classType }) {


    return (
        <button
            className={classType}
        >
            {children}
        </button >
    )
}

export default Button
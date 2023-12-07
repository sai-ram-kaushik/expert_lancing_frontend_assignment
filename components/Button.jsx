const Button = ({ children, className, onClick }) => {
    return (
        <button className={`px-5 py-3 min-w-[10rem] text-background bg-secondary rounded-xl hover:bg-transparent border border-secondary hover:text-primary duration-150 transition-all ease-in-out text-xl ${className}`} onClick={onClick}>{children}</button>
    )
}

export default Button
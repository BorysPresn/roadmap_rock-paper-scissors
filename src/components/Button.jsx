const Button = ({ children, size = 'normal', ...restProps }) => {
    const sizeClasses = {
        normal: 'h-[90px] text-[27px]',
        small: 'h-[60px] text-[25px]'
    };
    return (
        <button
            className={`font-bold uppercase rounded-[14px] leading-[100%] cursor-pointer w-[170px] bg-[var(--btn-bg-color)] text-[var(--btn-text-color)] ${sizeClasses[size]}`}
            {...restProps}>
            {children}
        </button>
    );
};

export default Button;

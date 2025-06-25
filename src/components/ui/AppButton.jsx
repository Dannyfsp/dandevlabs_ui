export default function AppButton({children, onClick, className = ''}) {
    return (
        <button
            onClick={onClick}
            className={`center-flex sm:py-[14px] py-[10px] sm:px-[32px] px-[20px] rounded-[8px] gap-[8px] ${className} font-lora`}
        >
            {children}
        </button>
    )
}
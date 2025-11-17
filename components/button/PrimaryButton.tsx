import React from 'react'
type Props = {
    children?: React.ReactNode,
    isLoading?: boolean
    type?: "submit" | "reset" | "button" | undefined;
    className?: string
}
const PrimaryButton = ({ children, isLoading = false, type = "button", className = "" }: Props) => {
    return (
        <button type={type} className={`primary-button hover:scale-105 cursor-pointer rounded-xl text-white uppercase py-2 px-5 flex gap-2 justify-center items-center ${className}`}>
            {isLoading ? <div className='loader'></div> : children}
        </button>
    )

}

export default PrimaryButton
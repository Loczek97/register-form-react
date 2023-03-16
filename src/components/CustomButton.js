import React from 'react'

export default function CustomButton({ children, onClick }) {
    return (
        <button className='mt-4 w-2/3 bg-red-600 hover:bg-red-700 hover:scale-[1.02] active:scale-95 transition-color duration-300 ease-in-out rounded-md py-2 px-4 text-white' onClick={onClick}> {children} </button>
    )
}

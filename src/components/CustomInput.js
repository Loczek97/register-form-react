import React from 'react'

export default function CustomInput({ type, name, value, id, onChange, text, error, errorMess }) {

    const borderError = error ? 'border-red-600' : 'border-white'

    const inputClassName = `block py-2.5 px-0 w-full bg-transparent border-b-2 appearance-none focus:border-red-600 focus:outline-none peer ${borderError}`

    return (
        <div className='w-2/3 relative mt-10'>
            <input
                type={type}
                className={inputClassName}
                placeholder=" "
                name={name}
                value={value}
                id={id}
                onChange={onChange}
            />
            <label htmlFor={id}
                className="absolute duration-300 transform -translate-y-6 -z-10 origin-[0] peer-focus:text-red-600 peer-placeholder-shown:translate-y-4 peer-focus:-translate-y-6">
                {error ? <span className='text-red-600'>{errorMess.incorrect}</span> : text}
            </label>
        </div>
    )
}

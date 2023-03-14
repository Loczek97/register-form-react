import React from 'react'

export default function CustomCheckbox({ name, id, text, checked, onChange, error, errorMess }) {
    return (
        <div className='w-2/3 mt-12'>
            <input type="checkbox" id={id} name={name} className='mr-2 accent-red-600 background-transparent rounded' checked={checked} onChange={onChange} />
            <label htmlFor='isAccepted' className='text-left'>
                {text + ' '}
            </label>
            {error ? <span className='text-red-600'>{errorMess.incorrect}</span> : null}
        </div >
    )
}

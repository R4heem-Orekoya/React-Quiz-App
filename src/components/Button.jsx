import React from 'react'

export default function Button(props) {
  return (
        <a href={props.href}>
            <button onClick={props.onClick} className='bg-gradient-to-r from-blue-600 to-purple-700 w-[300px] max-w-[100%] py-3 text-white text-md font-bold rounded-lg shadow-sm shadow-grren-400 active:scale-95 duration-300'>
                {props.children}
            </button>
        </a>
  )
}

import React from 'react'

const Alert = ({show, message}) => {

  return (
    <div className={`fixed bottom-0 left-0 overflow-hidden bg-gray-100 py-4 px-6 rounded-md m-4 transition-all ${show ? 'translate-x-0 visible' : '-translate-x-full invisible'}`}>
        <div className='w-full h-1 bg-primary absolute top-0 left-0 animate-move'></div>
        <p>{message}</p>
    </div>
  )
}

export default Alert
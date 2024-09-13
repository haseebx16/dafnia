import React from 'react'

const CancelButton = ({ title, func }) => {
  return (
        <button 
              className="text-white px-4 py-2 bg-slate-400 hover:bg-slate-600 font-medium rounded text-xl me-2 mb-2"
              onClick={func}
            >
              {title}
        </button>
  )
}

export default CancelButton
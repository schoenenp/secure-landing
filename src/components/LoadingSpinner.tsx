import { ArrowPathIcon } from '@heroicons/react/24/solid'
import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full z-50"><span><ArrowPathIcon className='animate-spin w-12 h-12 text-pirrot-green-100'/></span></div>
  )
}

export default LoadingSpinner
import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
  console.log (error);

  return (
    <div className='h-screen w-full flex flex-col gap-6 items-center justify-center'>
      <h1 className='text-4xl md:text-6xl font-bold'>Oops!</h1>
      <p className='md:text-xl'>Sorry, an unexpected error has occurred.</p>
      <p className='font-medium md:text-xl'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage

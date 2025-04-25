import React from 'react'
import { useRouteError } from 'react-router-dom'


function ErrorPage() {

    const error = useRouteError()
    console.log(error);

  return (
    <div>
       {error.status}<br />
       {error.data}
    </div>
  )
}

export default ErrorPage

import React from 'react'
import { useRouteError ,Link} from 'react-router-dom'

const NotFound = () => {

    const error:any= useRouteError()
    console.log("🚀 ~ file: NotFound.tsx ~ line 7 ~ NotFound ~ error", error)
    
  return (
    <div className='d'>
        <h1>404</h1>
     <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
    <Link to="/"> Volver al inicio </Link>
    </div>
  )
}

export default NotFound
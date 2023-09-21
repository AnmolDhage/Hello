import './helloPage.css'
import React from 'react'
import { useParams } from 'react-router-dom'


const HelloPage = () => {

  const {id} = useParams()

  return (
    <h1 className='hello-page'>Hello {id}</h1>
  )
}

export default HelloPage
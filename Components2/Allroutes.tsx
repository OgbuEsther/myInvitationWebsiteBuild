import React from 'react'
import { useRoutes } from 'react-router-dom'
import Hero from './Hero/Hero'

const Allroutes = () => {

    let element = useRoutes([
        {
            path: "/",
            element: <Hero />
        }
    ])
  return element
}

export default Allroutes

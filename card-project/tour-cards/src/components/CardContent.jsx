import React from 'react'
import { CardLayout } from './CardLayout'



export const CardContent = ({data}) => {
        
  return (
    <>
        {
            data.map((eachOnbject)=>(
                <CardLayout key={eachOnbject.id} {...eachOnbject}/>
            ))
        }
    </>
  )
}

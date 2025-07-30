import React from 'react'
import { CardContainer } from '../components/ui/CardContainer'
import { dataContent } from '../data/dataHome'
import { Experiencia } from './Experiencia'

export const Contenido = () => {
  return (
    <div className='md:w-calc-100-minus-160 mx-auto h-auto bg-white rounded-3xl'>
      <div className='bg-white md:-mt-20 2xl:-mt-40 z-10 grid relative mb-14 rounded-2xl mt-8 gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 p-1 md:p-2'>
        {
          dataContent.map(({ id, icon, title, description }) => (
            <CardContainer
              key={id}
              id={id}
              icon={icon}
              title={title}
              description={description} />
          ))
        }
      </div>
      <Experiencia />
    </div>
  )
}

import React from 'react'

export const ImageCard = ({ src, alt, text }) => {
  return (
    <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full h-full group ">
      {/* <a href="#"> */}
        <img className="h-auto max-w-full hover:transform hover:scale-110 duration-300" src={src} alt={alt} loading='lazy' />
      {/* </a> */}
      <figcaption
        className="absolute inset-0 flex items-center justify-center px-4 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'rgb(255, 189, 3)',
          background: 'radial-gradient(circle, rgba(255, 188, 3, 0.7) 0%, rgba(237,185,9,0.8) 35%, rgba(255,124,0,0.9) 100%)'
        }}
      >
        <p className='text-2xl md:text-5xl text-center font-bold tracking-wide'>{text}</p>
      </figcaption>
    </figure>
  )
}

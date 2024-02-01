import React from 'react'

const Hero = () => {
  return (
    <div className='flex gap-8 justify-center items-center  bg-primary bg-opacity-90 h-screen'>
      <div>
        <h1 className='leading-7 text-3xl extrabold text-[#fcec14f3]'> get your ddddddddfood on the go</h1>
        <p>you came to the right place</p>
      </div>
      <div>
        <img src='/public/pizza.jpg'  className='h-[200px] w-[200px] object-cover '/>
      </div>
    </div>
  )
}

export default Hero
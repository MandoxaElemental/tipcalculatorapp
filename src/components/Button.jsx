import React from 'react'

export const Button = ({
    click,
    number
}) => {
  return (
    <button onClick={{click}} className='bg-[#00494D] hover:bg-[#C5E4E7] h-[45px] rounded-md text-[#F4FAFA] text-xl font-bold hover:cursor-pointer'>{number}</button>
  )
}

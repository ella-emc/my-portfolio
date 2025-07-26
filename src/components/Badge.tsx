import React from 'react'

const Badge = ({ label }: { label: string }) => {
  return (
    <div className='bg-primary max-w-fit text-text font-sora py-1 px-3 rounded-3xl text-xs h-fit w-fit'>
      {label}
    </div>
  )
}

export default Badge
import React from 'react'
import NumberTicker from './number-ticker'

const Counter = () => {
  return (
    <div className='text-sky-400 flex justify-evenly sm:text-5xl font-extrabold p-4'>
      <h4>
        <NumberTicker value={8} />
        + Project
      </h4>
      <h4>
        <NumberTicker value={5} />
        {" "}Client
      </h4>
      <h4>
        <NumberTicker value={8} />
        + month studying
      </h4>
    </div>
  )
}

export default Counter

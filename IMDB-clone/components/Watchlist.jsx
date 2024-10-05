import React from 'react'

function Watchlist() {
  return (
    <>
    <div className='flex justify-center my-6'>
      <input type="text" placeholder='Search Movies' className='h-[2rem] w-[25rem] bg-gray-500/20 outline-none px-6'/>
    </div>

    <div className='border border-gray-300 m-8'>
      <table className='w-full text-center'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>

        <tbody>

        </tbody>
      </table>
    </div>
    </>
  )
}

export default Watchlist

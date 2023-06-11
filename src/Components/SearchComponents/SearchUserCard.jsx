import React from 'react'

const SearchUserCard = () => {
    return (
        <div className='py-2 cursor-pointer'>
            <div className='flex items-center'>
                <img className='w-10 h-10 rounded-full' 
                src="https://media.gettyimages.com/id/453882208/photo/actor-rowan-atkinson-as-mr-bean-performs-square-dance-during-a-programme-recording-on-august.jpg?s=612x612&w=0&k=20&c=aLB5kPlX3Rp8cJYTUhFwlIFfc8q4FzFiZIDBEKF2A6Y="
                alt=""
                />
                <div className='ml-3'>
                    <p>Full name</p>
                    <p className='opacity-70'> username</p>

                </div>
            </div>
        </div>
    )
}

export default SearchUserCard
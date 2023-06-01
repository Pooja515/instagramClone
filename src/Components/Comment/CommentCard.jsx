import React , { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const CommentCard = () => {
    const [isCommnetLike,setIsCommnetLike] = useState();

    const handleLikeComment = () => {
        setIsCommnetLike(!isCommnetLike)
    }
    return (
        <div>
            <div  className='flex items-center justify-between py-5' >
                <div className='flex items-center'>
                    <div>
                        <img className='w-9 h-9 rounded-full' 
                        src =" https://th.bing.com/th/id/OIP._d4gm7m1aAvkvEEMcdXA9wHaFj?w=248&h=186&c=7&r=0&o=5&pid=1.7" 
                        alt ="" 
                        />
                    </div>
                    <div className='ml-3'>
                        <p>
                           <span className='font-semibold'>Uma</span> 
                           <span className='ml-2'>suck post</span>
                        </p>
                        <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                         <span> 45 min ago</span>
                         <span>15 likes</span>
                        </div>
                    </div>
                </div>
                {isCommnetLike?(
                <AiFillHeart onClick ={handleLikeComment} className='text - xs hover:opacity-50 cursor-pointer text-red-600'/>
                 ):( <AiOutlineHeart onClick ={handleLikeComment} className='text - xs hover:opacity-50 cursor-pointer'/> 
                 )}
            </div>
        </div>
    )
}
export default CommentCard
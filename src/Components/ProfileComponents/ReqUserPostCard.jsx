import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment} from 'react-icons/fa';
import "./ReqUserPostCard.css"
const ReqUserPostCard = () => {
    return (
        <div className='p-2'>
            <div className='post w-60 h-60'>
                <img className='cursor-pointer' src="https://th.bing.com/th/id/OIP.Rf9A1jVpqWeBPxBUVoBkjQHaE5?w=204&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                <div className='overlay'>
                    <div className='overlay-text flex justify-between'>
                        <div>
                            <AiFillHeart></AiFillHeart> <span>10</span>
                        </div>
                        <div><FaComment/> <span>30</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReqUserPostCard
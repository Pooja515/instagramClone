import React  from 'react'
import { Modal , ModalBody , ModalContent , ModalOverlay } from '@chakra-ui/react'
import { BsThreeDots ,BsBookmarkFill, BsBookmark , BsEmojiSmile  } from 'react-icons/bs'
import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentCard from './CommentCard';
import "./CommentModal.css";

const CommentModal = ({ 
  onClose,
   isOpen , 
   isSaved , 
   isPostLiked ,
    handlePostLike , 
    handleSavePost 
  }) => {
    return (
        <div>
            <Modal size ={"4xl"} onClose ={onClose} isOpen={ isOpen } isCentered>
             <ModalOverlay/>
             <ModalContent>
                <ModalBody>
                    <div className='flex h-[75vh] relative'>
                        <div className='w=[45%] flex flex-col justify-center'>
                            <imag className= "max-h-full w-full"
                            src ="https://th.bing.com/th/id/OIP.feq9w7v6_m4DL3X8fskfOAHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7" 
                            alt =""
                            />
                        </div>
                        <div className=' w-[55%] pl-10'>
                            <div className='flex justify-between items-center py-5'>
          <div className='flex items-center'>
            <div>
                <img className='w-9 h-9 rounded-full' 
                src ="https://th.bing.com/th/id/OIP._HBwmGUhNJQLMn2_ioOrGwHaHa?w=207&h=183&c=7&r=0&o=5&pid=1.7 "
                alt = " "
                />
            </div>
            <div className='ml-2'>
                <p>username</p>
            </div>
          </div>
          <BsThreeDots/>
                        </div>
                        <hr/>
                        <div className='comment' >
                            {[1,1,1,1].map(()=> (
                             <CommentCard />
                             ))}
                        </div>
                        <div className='absolute bottom-0 w-[90%]'>
                        <div className="flex justify-between items-center w-full  py-4">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                onClick={handlePostLike}
              />
            ) : (
              <AiOutlineHeart 
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLike}
              />
            )}
            <FaRegComment className="text-xl hover:opacity -50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity -50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill onClick={handleSavePost} className="text-xl hover:opacity -50 cursor-pointer" />
            ) : (
              <BsBookmark onClick={handleSavePost} className="text-xl hover:opacity -50 cursor-pointer" />
            )}
            </div>
                    </div>
                    <div className="w-full py-2 ">
                 <p>12 likes</p>
                 <p className="opacity -50 text-sm">2 days ago</p>
             </div>
             
        <div className='flex items-center w-full' >
          <BsEmojiSmile />
          <input 
          className = " commentInputs "
           type ="text" 
           placeholder='Add a comment...'
           />
          </div>
        </div>
      </div>
    </div>
  
                </ModalBody>
             </ModalContent>
            </Modal>
        </div> 
    );
};
export default CommentModal;

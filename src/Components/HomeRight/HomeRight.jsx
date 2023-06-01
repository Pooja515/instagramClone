import React from 'react'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {
    return (
        <div >
            <div>
                <div className='flex justify between items center'>
                    <div className='flex items-center'>
                        <div>
                            <img
                             className='w-12 h-12 rounded-full'
                            src =" https://th.bing.com/th?id=OIP.YLY1QVG-VTBqaiZTEuDU_QHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2 " 
                            alt = " "
                            />
                        </div>
                        <div className='ml-3'>
                            <p>LuchaNumber1</p>
                            <p className='opacity-70'>Lucha515</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-blue-700'>Switch</p>
                    </div>
                    </div>
                    <div className='space-y-5 mt-10'>
                        {[1,1,1,1,1].map((item) => (
                        <SuggestionCard/>
                        ))}

                    </div>
                </div>
            </div>
        
    );
};
export default HomeRight
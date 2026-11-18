import React from 'react'

export const Middle2 = () => {
  return (
      <div className='flex items-center justify-between gap-2 mx-6 '>
          <div className='flex gap-5 sm:gap-7 '>
              <button
                  className='cursor-pointer text-xs font-semibold
                  text-[#7b8680] hover:text-[#236b53]'
                >All    
              </button>

              <button
                  
                  className='cursor-pointer text-xs font-semibold
                  text-[#7b8680] hover:text-[#236b53]'
                >Active  
              </button>

              <button
                
                  className='cursor-pointer text-xs font-semibold
                  text-[#7b8680] hover:text-[#236b53]'
                >Completed    
              </button>
            </div>  

         <p className=' mx-7 mb-7 mt-3 text-11px font-medium text-[#65766c] rounded-md bg-[#f0f4f1] flex justify-end'>0</p>
          
        
          
     </div>
  )
}

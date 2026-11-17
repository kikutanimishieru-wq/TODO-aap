import { Check  } from "lucide-react";


export const Footer = () => {
  return (
      <div className='flex min-h-60 flex-col items-center justify-center'>
          <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#f0f6f2] text-[#6c9b82]'>
              <Check />
          </div>
          <h1 className='text-base font-semibold text-[#304c3e]'>Your list starts here</h1>
          <p className='mt-2 text-sm text-[#7a8881]'>Add your first task above.</p>
          
      </div>
  )
}

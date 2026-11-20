import { Check  } from "lucide-react";


export const Footer = ({hasTask}: {hasTask: boolean}) => {
  return (
      <div className='flex min-h-60 flex-col items-center justify-center'>
          <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#f0f6f2] text-[#6c9b82]'>
              <Check />
          </div>
          <h1 className='text-base font-semibold text-[#304c3e]'>{hasTask ? "No task here" : "Your list starts here"}</h1>
          <p className='mt-2 text-sm text-[#7a8881]'>{hasTask ? "Try another filter to see your task" : "Add your first task above."}</p>
          
      </div>
  )
}

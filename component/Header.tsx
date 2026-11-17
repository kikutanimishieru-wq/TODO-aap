import { ListChecks } from "lucide-react";


export const Header = () => {
  return (
    <div className='flex items-center gap-3 px-6 pb-6 pt-7 sm:px-8 sm:pt-8'>
      <div className="w-11 h-11 rounded-2xl bg-[#e5f2ed]  text-[#23735a] flex justify-center items-center"><ListChecks /></div>
      <p className='text-2xl font-semibold text-[#213d35]'>My tasks</p>
    </div>
  )
}

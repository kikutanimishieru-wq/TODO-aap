import type { FilterType, Task } from "@/types";

const filters: FilterType[] = ["All", "Active", "Completed"];

type TaskFiltersProps = {
  tasks: Task[]
  filter: FilterType
  onFilter: (filter: FilterType) => void
}

export const Middle2 = ({ filter, onFilter, tasks }: TaskFiltersProps) => {
  const handleClick = (filterValue: FilterType) => ()=>{
    onFilter(filterValue)
  }
  return (
    <div className="mx-6 flex items-center justify-between gap-2">
      <div className="flex gap-5 sm:gap-7">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={handleClick(item)}
            className={`cursor-pointer border-b-2 text-xs font-semibold hover:text-[#236b53] ${
      filter === item
        ? "border-[#236b53] text-[#236b53]"
        : "border-transparent text-[#7b8680]"
    }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mx-7 mb-7 mt-3 flex justify-end rounded-md bg-[#f0f4f1] text-[11px] font-medium text-[#65766c]">
        {tasks.length}
      </p>
    </div>
  );
};
import type { FilterType } from "@/types";

const filters: FilterType[] = ["All", "Active", "Completed"];

type TaskFiltersProps = {
  filter: FilterType
  onFilter: (filter: FilterType) => void
}

export const Middle2 = ({ filter, onFilter }: TaskFiltersProps) => {
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
            className="cursor-pointer text-xs font-semibold text-[#7b8680] hover:text-[#236b53]"
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mx-7 mb-7 mt-3 flex justify-end rounded-md bg-[#f0f4f1] text-[11px] font-medium text-[#65766c]">
        0
      </p>
    </div>
  );
};
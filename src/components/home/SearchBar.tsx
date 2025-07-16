import type { SearchBarProps } from "../../types/home";

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <div className="px-4 py-3">
    <label className="flex flex-col w-full h-11">
      <div className="flex w-full items-stretch rounded-lg h-full">
        <div className="text-[#60758a] flex items-center justify-center pl-4 rounded-l-lg bg-[#f0f2f5]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search requests by name, type, or status"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="form-input flex w-full rounded-r-lg bg-[#f0f2f5] px-4 placeholder:text-[#60758a] focus:outline-none focus:ring-0"
        />
      </div>
    </label>
  </div>
);

export default SearchBar;

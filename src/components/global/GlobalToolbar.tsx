import { useState } from "react"
import { Search, RotateCcw } from "lucide-react"
import GlobalSearch from "./GlobalSearch"

type GlobalToolbarProps = {
  showSearch?: boolean;
  onSearch: (payload: { keyword: string }) => void;
};

export default function GlobalToolbar({ showSearch = true, onSearch }: GlobalToolbarProps) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch({ keyword })
  };

  const handleReset = () => {
    setKeyword("");
    onSearch({ keyword: "" })
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
      {showSearch && (
        <div className="w-full">
          <GlobalSearch
            value={keyword}
            onChange={setKeyword}
            onSearch={handleSearch}
          />
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={handleSearch}
          className="font-mono px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <Search className="w-4 h-4" />
          Search
        </button>

        <button
          onClick={handleReset}
          className="font-mono px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>
    </div>
  )
}
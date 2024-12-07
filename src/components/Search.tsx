import Backdrop from "./UI/Backdrop";

import { type SearchProps } from "../types/componentTypes";

function Search({ showSearch, hideSearch }: SearchProps) {
  return (
    <>
      <Backdrop showBackdrop={showSearch} hideBackdrop={hideSearch} />
      <div>
        <input
          type="text"
          placeholder="جستجو"
          className="fixed top-8 left-1/2 !-translate-x-1/2 z-20 w-1/2 bg-slate-100 dark:bg-slate-800 text-slate-500 px-4 py-2 rounded-lg outline-none transition"
        />
      </div>
    </>
  );
}

export default Search;

import Backdrop from "./UI/Backdrop";

import { type SearchProps } from "../types/componentTypes";

function Search({ showSearch, hideSearch }: SearchProps) {
  return (
    <>
      <Backdrop showBackdrop={showSearch} hideBackdrop={hideSearch} />
      <input
        autoFocus
        type="text"
        placeholder="جستجو"
        className={`fixed w-1/2 top-8 right-1/2 translate-x-1/2 z-20 bg-slate-100 dark:bg-slate-800 dark:text-slate-200 px-4 py-2 rounded-lg outline-none transition ${
          showSearch
            ? "opacity-100 visible"
            : "opacity-0 -translate-y-10 invisible"
        }`}
      />
    </>
  );
}

export default Search;

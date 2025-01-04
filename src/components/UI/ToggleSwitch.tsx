import { type ToggleSwitchProps } from "../../types/componentTypes";

function ToggleSwitch({ changeCheck, checked, checkId }: ToggleSwitchProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        id={checkId}
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={changeCheck}
      />
      <div className="group peer bg-[#ccc] rounded-full duration-300 w-8 h-4 after:duration-300 after:bg-white peer-checked:bg-blue-500 dark:peer-checked:bg-blue-400 after:rounded-full after:absolute after:h-2 after:w-2 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-4 peer-hover:after:scale-95" />
    </label>
  );
}

export default ToggleSwitch;

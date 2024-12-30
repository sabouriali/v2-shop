import { type BackdropProps } from "../../types/componentTypes";

function Backdrop({ showBackdrop, hideBackdrop }: BackdropProps) {
  return (
    <div
      className={
        showBackdrop
          ? "fixed top-0 right-0 opacity-100 visible min-h-screen w-full z-10 bg-[#00000080] backdrop-blur-sm transition"
          : "opacity-0 invisible"
      }
      onClick={hideBackdrop}
    />
  );
}

export default Backdrop;

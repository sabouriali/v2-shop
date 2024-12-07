import { type BackdropProps } from "../../types/componentTypes";

function Backdrop({ showBackdrop, hideBackdrop }: BackdropProps) {
  return (
    <div
      className={
        showBackdrop
          ? "fixed top-0 right-0 min-h-screen w-full z-10 bg-[#00000080] backdrop-blur-sm transition"
          : ""
      }
      style={{
        opacity: showBackdrop ? 1 : 0,
        visibility: showBackdrop ? "visible" : "hidden",
      }}
      onClick={hideBackdrop}
    />
  );
}

export default Backdrop;

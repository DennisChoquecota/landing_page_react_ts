import { useEffect, type ReactNode, type RefObject } from "react";
// import Button from "./Button";

interface ModalProps {
  onClose: () => void;
  modalRef: RefObject<HTMLElement | null>;
  children: ReactNode;
}

function Modal({ onClose, modalRef, children }: ModalProps) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      console.log("executing onClose function");
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-30 z-10"></div>
      <div
        ref={modalRef as RefObject<HTMLDivElement>}
        className="w-1/3 h-auto bg-white relative z-20 rounded-lg m-auto p-10 translate-y-7 overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
